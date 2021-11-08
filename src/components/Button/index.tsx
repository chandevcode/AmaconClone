import React from 'react'
import { Text,Pressable, StyleSheet } from 'react-native'

interface ButtonProps{
    text: string;
    onPress: () => void;
    containerStyle: object;
}

const Button = ({text, onPress, containerStyle} : ButtonProps) => {
    return (
        <Pressable style={[styles.button, containerStyle]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f48c06',
        borderRadius: 5,
        margin: 5,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ced4da'
        
    },
    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform : 'uppercase'
    }
})

export default Button
