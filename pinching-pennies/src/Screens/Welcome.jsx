
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Button from '../Components/Button';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Header title="Welcome to Pinching Pennies" />


            <Text style={styles.welcomeText}>
                Manage your expenses effortlessly.
            </Text>

            <Button title="Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default WelcomeScreen;
