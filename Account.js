import * as React from 'react';
import { useState } from "react";
import { View, Button, Text, Animated, TextInput, Image } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

export function Account({ navigation }) {
    const [editParent, setEditParent] = useState(false);
    const [editChild, setEditChild] = useState(false);
    const [editVehicle, setEditVehicle] = useState(false);

    const route = useRoute();

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
                editable={editParent} />

            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name"
                editable={editParent} />

            <Text style={styles.fieldTitle}>Email Address</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Email Address"
                editable={editParent} />

            <Text style={styles.fieldTitle}>Phone Number</Text>
            <TextInput style={styles.input}
                maxLength={10}
                keyboardType='numeric'
                placeholder="Phone Number"
                editable={editParent} />

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
                placeholder={route.params.Fname}
                editable={editChild} />

            <Text style={styles.fieldTitle}>Last Name</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder={route.params.Lname}
                editable={editChild} />

            <Text style={styles.fieldTitle}>Date of Birth</Text>
            <TextInput style={styles.input}
                maxLength={25}
                keyboardType='numeric'
                placeholder={route.params.DOB}
                editable={editChild} />

            <Text style={styles.fieldTitle}>Allergies</Text>
            <TextInput style={styles.input}
                maxLength={1000}
                multiline={true}
                placeholder="Allergies"
                editable={editChild} />

            <Text style={styles.fieldTitle}>Additional Info</Text>
            <TextInput style={styles.input}
                maxLength={25} // THIS SHOULD MATCH SETUP PAGE
                multiline={true}
                placeholder="Additional info to tell emergency services about this child"
                editable={editChild} />

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
                editable={editVehicle} />

            <Text style={styles.fieldTitle}>Year</Text>
            <TextInput style={styles.input}
                maxLength={4}
                keyboardType='numeric'
                placeholder="Year"
                editable={editVehicle} />

            <Text style={styles.fieldTitle}>Color</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Color"
                editable={editVehicle} />

            <Text style={styles.fieldTitle}>Plate Number</Text>
            <TextInput style={styles.input}
                maxLength={6}
                keyboardType='numeric'
                placeholder="Plate Number"
                editable={editVehicle} />

            <View style={styles.navBar}>
                <Icon name="arrowright" size={25} color="white" type="antdesign" />
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Home')} />
                <Icon name="arrowright" size={25} color="#FABD27" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </View >
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