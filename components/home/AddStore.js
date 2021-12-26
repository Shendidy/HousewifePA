import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const AddStore = () => {
    var name, url, logo;

    return (
        <View style={styles.container}>
            <View>
                <Text style={{color: 'white', fontSize: 20}}>Store name:</Text>
                <TextInput
                    style={styles.storeInput}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity>
                    <Text style={styles.buttons}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttons}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttons: {
        color: 'white',
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
    storeInput: {
        width: '95%',
        height: 35,
        fontSize: 20,
        paddingLeft: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: -4,
    }
})

export default AddStore
