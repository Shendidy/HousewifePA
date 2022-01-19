import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default AddStore = ({ navigation, route }) => (
        <View style={styles.container}>
            <Header navigation={navigation} screenToShow={'AddStoreScreen'} />

            <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 5}}
            >
                <Text style={styles.header}>Add New Store...</Text>

                <View style={styles.inputFields}>
                    <Text style={styles.inputFieldsTextRequired}>*Store name:</Text>

                    <TextInput
                        style={styles.input}
                    />

                    <Text></Text>

                    <Text style={styles.inputFieldsText}>URL:</Text>

                    <TextInput
                        style={styles.input}
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonsText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.buttonsText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Footer navigation={navigation} screenToShow={'AddStoreScreen'} />
        </View>
    )

const styles = StyleSheet.create({
    buttonsContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    buttons: {
        width: 100,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5
    },
    buttonsText: {
        color: 'black',
        fontSize: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    container: {
        flex: 1
    },
    searchLogo: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    smallContainer: {
        margin: 10,
        height: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'red',
        padding: 15,
        backgroundColor: 'rgba(255,255,255,1)',
        alignItems: 'center'
    },
    input: {
        width: '95%',
        height: 35,
        fontSize: 20,
        paddingLeft: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: -4,
    },
    inputFieldsText: {
        color: 'white',
        fontSize: 20
    },
    inputFieldsTextRequired: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    header: {
        fontWeight: '900',
        color: 'white',
        fontSize: 25,
        marginBottom: 25,
        marginTop: 15,
        textAlign: 'center'
    },
})
