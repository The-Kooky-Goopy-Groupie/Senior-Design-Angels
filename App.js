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
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FABD27'}}>

            <Image
                style={{
                    // to change this we have to reupload the photo online and then get a link but besides that it's not too bad
                    width: "80%",
                    height: "80%",
                    // marginRight: "50%", this looks good for an app style
                    // marginLeft: "100%",
                    //marginLeft: "80%", // this looks good on the web build
                }}
                source={{ uri: 'https://i.pinimg.com/564x/2f/f0/ee/2ff0eeb4536e3ba1f9f2a1f9be3328b6.jpg' }}
            />

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
                margin: 15,
                color: 'white',
            }} onPress={() => navigation.navigate('Setup1')}>Start Protecting</Text></View>
        </View >
    );
}

//Sets up parent info
function Setup1({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <Text style={styles.registerTitle}>Parent's Info</Text>
            <Text style={styles.fieldTitle}>First Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name" />
            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name" />
            <Text style={styles.fieldTitle}>Email Address</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Email Address" />
            <Text style={styles.fieldTitle}>Phone Number</Text>
            <TextInput style={styles.input}
                maxLength={10}
                keyboardType='numeric'
                placeholder="Phone Number" />
            <Text style={styles.fieldTitle}>Picture of Parent Gaurdian</Text>
            <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo"/></View>
            <Text style={{}}>This will help emergancy care verify you as the parent/guardian</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup2')} /></View>
        </View >
    );
}

//Sets up child Info
function Setup2({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <Text style={styles.registerTitle}>Childs's Info</Text>
            <Text style={styles.fieldTitle}>First Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name" />
            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name" />
            <Text style={styles.fieldTitle}>Date of Birth</Text>
            <TextInput style={styles.input}
                maxLength={25}
                keyboardType='numeric'
                placeholder="Date of Birth" />
            <Text style={styles.fieldTitle}>Allergies</Text>
            <TextInput style={styles.input}
                maxLength={1000}
                multiline={true}
                placeholder="Allergies" />
            <Text style={styles.fieldTitle}>Additional Info</Text>
            <TextInput style={styles.input}
                maxLength={25} // THIS SHOULD LIKELY BE LONGER
                multiline={true}
                placeholder="Additional info to tell emergancy services about this child" />
            <Text style={styles.fieldTitle}>Picture of Child</Text>
            <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
            <Text>This will help emergancy identify your child</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup3')} /></View>
        </View >
    );
}

//Sets up Car info
function Setup3({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <Text style={styles.registerTitle}>Vehicle Info</Text>
            <Text style={styles.fieldTitle}>Model</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Model" />
            <Text style={styles.fieldTitle}>Year</Text>
            <TextInput style={styles.input}
                maxLength={4}
                keyboardType='numeric'
                placeholder="Year" />
            <Text style={styles.fieldTitle}>Color</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Color" />
            <Text style={styles.fieldTitle}>Plate Number</Text>
            <TextInput style={styles.input}
                maxLength={6}
                keyboardType='numeric'
                placeholder="Plate Number" />
            <Text style={styles.fieldTitle}>Picture of Vehicle</Text>
            <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
            <Text>This will help emergancy care identify your car</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} /></View>
        </View >
    );
}

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Child info, parent info, car info </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="white" type="antdesign" onPress={() => navigation.navigate('Account')} />
                <Icon name="arrowright" size={25} color="yellow" type="antdesign"/>
                <Icon name="arrowright" size={25} color="white" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </View >
    );
}

function Account({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> GPS, Button, Camera, input end location </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="yellow" type="antdesign" />
                <Icon name="arrowright" size={25} color="white" type="antdesign" onPress={() => navigation.navigate('Home')}/>
                <Icon name="arrowright" size={25} color="white" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </View >
    );
}

//Dylan Charity and statistics screen
function Info({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Charity info and Statistics </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="white" type="antdesign" onPress={() => navigation.navigate('Account')}m/>
                <Icon name="arrowright" size={25} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} />
                <Icon name="arrowright" size={25} color="yellow" type="antdesign" />
            </View>
        </View >
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
        backgroundColor: '#091638',
        padding: 15,
        width: "15%",
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
        marginTop: 100,
        marginBottom: 200,
    },
    input: {
        height: 50,
        left: '12.5%',
        margin: 2,
        borderWidth: 1,
        padding: 10,
        width: "75%",
        borderRadius: 10,
        marginBottom: 0,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#091638',
        padding: 20,
        width: "100%",
        position: 'absolute',
        margin: 0,
        bottom: 0,
    },
    registerTitle: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        margin: 5,
        marginTop: 100,
        marginBottom: 20,
    },
    fieldTitle: {
        fontSize: 13,
        color: "black",
        textAlign: 'left',
        margin: 5,
        marginTop: 20,
        marginBottom: 0,
        left: '12.5%',
    },
    imgInpt: {
        backgroundColor: '#FABD27',
        height: 110,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: "30%",
        borderRadius: 12,
        left: '11%',
    },
};
