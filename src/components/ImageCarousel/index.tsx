import React, { useState,useCallback } from 'react'
import { View, Text, FlatList, Image, StyleSheet,Dimensions } from 'react-native'



const ImageCarousel = ({ images } : {images: string[]} ) => {
    const windowWidth = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = useState(0)

    const onFlatlistUpdate = useCallback (({viewableItems}) => {

        if(viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
        console.log(viewableItems)
    },[])

    return (
        <View>
            <FlatList
            data={images}
            renderItem= {({item}) => (
                <Image style={[styles.image, {width: windowWidth -40 }]} source= {{uri : item}} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth - 20}
            snapToAlignment = {'center'}
            decelerationRate ={ 'fast' }
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold : 50
            }}
            onViewableItemsChanged={onFlatlistUpdate}
            />

            <View style={styles.dotContainer}>
                {images.map((image,index) => (
                    <View style={[styles.dot, {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#dee2e6'
                    }]} key={index} />
                ))}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image :{
       borderRadius: 5,
       margin: 10,
        height: 200,
        resizeMode: 'contain'
    
    },
    dot: {
        width: 10,
        height: 10,
        borderWidth: 1,
        backgroundColor: '#dee2e6',
        borderColor: '#adb5bd',
        borderRadius: 15,
        margin: 5,

    },
    dotContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    }
})


export default ImageCarousel
