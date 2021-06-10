import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Text style={ styles.header }>HomeScreen</Text>
            <Button 
                title="Go To IndexScreen"
                onPress={ ()=>navigation.navigate('Index') }
            />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 32
    }
});

export default HomeScreen;