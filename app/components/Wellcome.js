import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import bg01 from '../assets/images/bgwellcome.png';

const Wellcome = ({ navigation }) => {
    //const [count, setCount] = useState(0);
    const home = () => {
        navigation.replace('Home')
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bg01} style={{ width: '100%', height: '100%' }}>
                <View style={{ height: '80%', justifyContent: 'center' }}>
                    <Text style={styles.welcome}>HEWAN</Text>
                    <Text style={styles.instructions}>Hewan disekitar kita</Text>
                </View>
                <View style={{ alignItems: 'center', height: '15%' }}>
                    <TouchableOpacity style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, borderColor: 'red', borderWidth: 2, backgroundColor: '#f0e9e9' }} onPress={() => home()} >
                        <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, }}>
                            <Text style={{ color: 'red' }}>Mulai</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                    <Text>© 2020 TK Al-Muhtadi II Semerek</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default Wellcome;