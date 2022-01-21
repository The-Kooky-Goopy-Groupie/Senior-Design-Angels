import * as React from 'react';
import { View, Button, Text, Animated, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';


function Start({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
                fontSize: 64,
                textAlign: 'center',
                margin: 10,
                marginBottom: 0,
                color: 'black',
            }}> Gaurdian Angel Saftey Alerting System </Text>
            <View style={{
                backgroundColor: '#CB826A',
                padding: 0,
                width: "50%",
                marginBottom: 0,
                marginTop: 40,
                borderRadius: 50,
            }}><Text style={{
                fontSize: 18,
                textAlign: 'center',
                margin: 15,
                color: 'CB826A',
            }} onPress={() => navigation.navigate('Home')} > Start </Text></View>
        </LinearGradient >
    );
}



function Home({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.question}> GPS, Button, Camera, input end location </Text></View>
            <View style={styles.arrow}><Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Start')} />
            </View >
        </LinearGradient >
    );
}


const size1 = 500
const size2 = 300
const Circle = () => {
    return (
        <LinearGradient colors={['#631e15', '#ff0060']} style={{
            width: size1,
            height: size1,
            borderRadius: size1 / 2,
            position: 'absolute',
            margin: 0,
            bottom: 580,
        }}>
        </LinearGradient >
    );
};
const Circle2 = () => {
    return (
        <LinearGradient colors={['#631e15', '#ff0060']} style={{
            width: size2,
            height: size2,
            borderRadius: size2 / 2,
            position: 'absolute',
            margin: 0,
            bottom: 500,
            left: 250,
        }}>
        </LinearGradient >
    );
};

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Start"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
            <Stack.Screen
                name="Start"
                component={Start}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const styles = {
    arrow: {
        backgroundColor: '#CB826A',
        padding: 15,
        width: "12%",
        marginBottom: 0,
        marginTop: 0,
        borderRadius: 90,
        position: 'absolute',
        margin: 0,
        right: 20,
        bottom: 20,
    },
    question: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        margin: 0,
        marginBottom: 600,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "75%",
        borderRadius: 10,
        marginBottom: 200,
    },
};

