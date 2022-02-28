import * as React from 'react';
import { View, Button, Text, Animated, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

//Dylan Welcome screen
function Start({ navigation }) {
    return (
        
        <LinearGradient colors={['#8F0D32']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FABD27'}}>
          
          <Text style={{
            // to change this we have to reupload the photo online and then get a link but besides that it's not too bad
             width: "120%",
             height: "120%",
             Align: 'center',
            // marginRight: "50%", this looks good for an app style
            // marginLeft: "100%",
            marginLeft: "80%", // this looks good on the web build
            }}><img src="https://i.pinimg.com/564x/2f/f0/ee/2ff0eeb4536e3ba1f9f2a1f9be3328b6.jpg"/></Text>

            <Text style={{
                //Title text items
                fontSize: 64,
                fontFamily: 'Cambria Math',
                textAlign: 'center',
                margin: 10,
                marginBottom: 0,
                color: 'black',
            }}> Guardian Angel Saftey Alerting System </Text>
            
        

            <View style={{
                //Button styleing title screen
                backgroundColor: '#091638',
                padding: 0,
                width: "50%",
                marginBottom: 0,
                marginTop: 40,
                borderRadius: 50,
            }}><Text style={{
                // text style for button.
                fontSize: 18,
                textAlign: 'center',
                fontFamily: 'Cambria Math',
                margin: 15,
                color: 'white',
            }} onPress={()=> navigation.navigate('Setup1')}>Start Protecting</Text></View>
        </LinearGradient >
    );
}

//Sets up parent info
function Setup1({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.registerTitle}>Parent's Info</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Email Address" />
            <TextInput style={styles.input}
                maxLength={10}
                keyboardType='numeric'
                placeholder="Phone Number" />
            <Text>Add an image input here with text under that says "This will help emergancy care ensure you are really the parent/guardian"</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup2')} /></View>
        </LinearGradient >
    );
}

//Sets up child Info
function Setup2({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.registerTitle}>Childs's Info</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name" />
            <TextInput style={styles.input}
                maxLength={25}
                keyboardType='numeric'
                placeholder="Date of Birth" />
            <TextInput style={styles.input}
                maxLength={1000}
                multiline={true}
                placeholder="Allergies" />
            <TextInput style={styles.input}
                maxLength={25} // THIS SHOULD LIKELY BE LONGER
                multiline={true}
                placeholder="Additional info to tell emergancy services about this child" />
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup3')} /></View>
        </LinearGradient >
    );
}

//Sets up Car info
function Setup3({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.registerTitle}>Vehicle Info</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Model" />
            <TextInput style={styles.input}
                maxLength={4}
                keyboardType='numeric'
                placeholder="Year" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Color" />
            <TextInput style={styles.input}
                maxLength={6}
                keyboardType='numeric'
                placeholder="Plate Number" />
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} /></View>
        </LinearGradient >
    );
}

function Home({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Child info, parent info, car info </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Account')} />
                <Icon name="arrowright" size={20} color="black" type="antdesign"/>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </LinearGradient >
    );
}

function Account({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> GPS, Button, Camera, input end location </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={20} color="black" type="antdesign" />
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Home')}/>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </LinearGradient >
    );
}

//Dylan Charity and statistics screen
function Info({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Charity info and Statistics </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Account')}m/>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} />
                <Icon name="arrowright" size={20} color="black" type="antdesign" />
            </View>
        </LinearGradient >
    );
}


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
                name="Setup1"
                component={Setup1}
            />
            <Stack.Screen
                name="Setup2"
                component={Setup2}
            />
            <Stack.Screen
                name="Setup3"
                component={Setup3}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Account"
                component={Account}
            />
            <Stack.Screen
                name="Info"
                component={Info}
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
    text: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        fontFamily: 'Cambria Math',
        margin: 0,
        marginBottom: 400,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "75%",
        fontFamily: 'Cambria Math',
        borderRadius: 10,
        marginBottom: 0,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'green',
        padding: 10,
        width: "100%",
        position: 'absolute',
        margin: 0,
        bottom: 0,
    },
    registerTitle: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        fontFamily: 'Cambria Math',
        margin: 5,
        marginTop: 50,
    },
};
