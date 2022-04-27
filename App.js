import * as React from 'react';
import {useState} from "react";
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
            }} onPress={() =>navigation.navigate('Setup1')}>Start Protecting</Text></View>
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
            <View style={styles.cameraBar}>
                <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
                <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
            </View>
            <Text style={{fontSize: 10, left: '12.5%'}}>This will help emergency care verify you as the parent/guardian</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup2')} /></View>
        </View >
    );
}

//Sets up child Info
function Setup2({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <Text style={styles.registerTitle}>Child's Info</Text>
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
            <View style={styles.cameraBar}>
                <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
                <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
            </View>
            <Text style={{ fontSize: 10, left: '25%' }}>This will help emergency identify your child</Text>
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
            <View style={styles.cameraBar}>
                <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
                <View style={styles.imgInpt}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
            </View>
            <Text style={{ fontSize: 10, left: '23%' }}>This will help emergency care identify your car</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup4')} /></View>
        </View >
    );
}

//Sets up Other contacts info
export function Setup4({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <Text style={styles.registerTitle}>Other Contacts</Text>
            <Text style={styles.fieldTitle}>Contact 1</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Phone Number" />
            <Text style={styles.fieldTitle}>Contact 2</Text>
            <TextInput style={styles.input}
                maxLength={4}
                keyboardType='Phone Number'
                placeholder="Phone Number" />
            <Text style={styles.fieldTitle}>Contact 3</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Phone Number" />
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} /></View>
        </View >
    );
}

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>

            <Text style={styles.homeTitle}> Home </Text>
            <Text style={styles.homeText}>Option 1) Enter your destination address and start driving</Text>
            <TextInput style={{
                height: 50,
                margin: 2,
                left: 25,
                borderWidth: 1,
                padding: 10,
                width: "85%",
                borderRadius: 10,
                marginBottom: 25,}}
                maxLength={50}
                placeholder="Enter Destination Address here" />
            <Text style={styles.homeText}>Option 2) GPS will sense speed and know when phone is in a moving car. It will send child/pet reminder when it senses car has stopped for a period of time</Text>
            <View style={{ left: "25%", width: '50%' }}><Button title='On'></Button></View>
            <Text style={styles.homeText}>Option 3) Camera and motion sensor will detect if there is a person/pet in a hot car without supervision</Text>
            <View style={{
                backgroundColor: '#FABD27',
                height: 110,
                margin: 10,
                borderWidth: 1,
                padding: 10,
                width: "30%",
                borderRadius: 12,
                left: '32%',}}><Icon iconStyle={{ marginTop: 10 }} name="camera" size={62} color="#5e6472" type="entypo" /></View>
            <View style={{ left: "15%", width: '70%' }}><Button title='Dangerous heat levels Input'></Button></View>

            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Account')} />
                <Icon name="arrowright" size={25} color="white" type="antdesign"/>
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </View >
    );
}

function Account({ navigation }) {
    const [editParent, setEditParent] = useState(false);
    const [editChild, setEditChild] = useState(false);
    const [editVehicle, setEditVehicle] = useState(false);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FABD27' }}>
            <Text style={styles.registerTitle}> Account </Text>

            <Text style={styles.registerTitle}>Parent's Info</Text>

            <View style={{
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
            }} onPress={() => setEditParent(previousState => !previousState)}>Edit Parent's Info</Text></View>

            <Text style={styles.fieldTitle}>First Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name"
                editable = {editParent} />

            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name"
                editable = {editParent} />

            <Text style={styles.fieldTitle}>Email Address</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Email Address"
                editable = {editParent} />

            <Text style={styles.fieldTitle}>Phone Number</Text>
            <TextInput style={styles.input}
                maxLength={10}
                keyboardType='numeric'
                placeholder="Phone Number"
                editable = {editParent} />

            <Text style={styles.registerTitle}>Child's Info</Text>

            <View style={{
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
            }} onPress={() => setEditChild(previousState => !previousState)}>Edit Child's Info</Text></View>

            <Text style={styles.fieldTitle}>First Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name"
                editable = {editChild} />

            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name"
                editable = {editChild} />

            <Text style={styles.fieldTitle}>Date of Birth</Text>
            <TextInput style={styles.input}
                maxLength={25}
                keyboardType='numeric'
                placeholder="Date of Birth"
                editable = {editChild} />

            <Text style={styles.fieldTitle}>Allergies</Text>
            <TextInput style={styles.input}
                maxLength={1000}
                multiline={true}
                placeholder="Allergies"
                editable = {editChild} />

            <Text style={styles.fieldTitle}>Additional Info</Text>
            <TextInput style={styles.input}
                maxLength={25} // THIS SHOULD MATCH SETUP PAGE
                multiline={true}
                placeholder="Additional info to tell emergency services about this child"
                editable = {editChild} />

            <Text style={styles.registerTitle}>Vehicle Info</Text>

            <View style={{
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
            }} onPress={() => setEditVehicle(previousState => !previousState)}>Edit Vehicle's Info</Text></View>

            <Text style={styles.fieldTitle}>Model</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Model"
                editable = {editVehicle} />

            <Text style={styles.fieldTitle}>Year</Text>
            <TextInput style={styles.input}
                maxLength={4}
                keyboardType='numeric'
                placeholder="Year"
                editable = {editVehicle} />

            <Text style={styles.fieldTitle}>Color</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Color"
                editable = {editVehicle} />

            <Text style={styles.fieldTitle}>Plate Number</Text>
            <TextInput style={styles.input}
                maxLength={6}
                keyboardType='numeric'
                placeholder="Plate Number"
                editable = {editVehicle} />

            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="white" type="antdesign" />
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Home')}/>
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </View >
    );
}

//Dylan Charity and statistics screen
function Info({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#FABD27' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Charity info and Statistics </Text></View>

            <View style={{ marginBottom: 185 }}></View>
            <Text style={{fontSize: 20, margin: 10}}>Statistics</Text>
            <Text style={{ margin: 10 }}> With our help you should be able to keep your child safe from harm from vehicle overheat, But what about other children. Every year, up to 50 children lose their life to this fully preventable occurrence. That’s a single child for every single state, every year. Who knows where and when another child will be trapped with no way of escape. With your help however we can lower and even perhaps remove that statistic from existence. If you would like to help other kids, please consider donating to any of the following charities below to help us protect the future of the world. </Text>
            <Text style={{ fontSize: 15, margin: 10 }}>Charities</Text>
           
            <Text style={{margin: 12 }}>Help Support Us!</Text>
            <View style={styles.arrowChar}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => window.location ='https://www.paypal.com/donate/?hosted_button_id=X37652D4UWLNA&source=qr'} /></View>
            <Text style={{ margin: 12 }}>KidsandCars.org</Text>
            <View style={styles.arrowChar}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => window.location ='https://www.kidsandcars.org/'} /></View>
            <Text style={{ margin: 12 }}>babysav.org</Text>
            <View style={styles.arrowChar}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => window.location ='https://babysav.org/'} /></View>
            <Text style={{ margin: 12 }}>nhtsa.gov</Text>
            <View style={styles.arrowChar}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => window.location ='https://www.nhtsa.gov/'} /></View>
            

            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Account')}m/>
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Home')} />
                <Icon name="arrowright" size={25} color="white" type="antdesign"/>
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
                name="Setup4"
                component={Setup4}
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

    arrowChar: {
        backgroundColor: '#091638',
        padding: 10,
        width: "15%",
        borderRadius: 90,
        right: 10,
        bottom: 10,
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
    cameraBar: {
        flexDirection: 'row',
        left: '7%',
    },
    registerTitle: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        margin: 5,
        marginTop: 80,
        marginBottom: 15,
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
    },
    homeTitle: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 30,
    },
    homeText: {
        fontSize: 12,
        color: "black",
        textAlign: 'left',
        margin: 15,
    },
};
