import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import bg01 from '../assets/images/bgwellcome.png';
import kambing from '../assets/images/kambing.jpg';
import { Context } from '../ext/Store';

const Hewan = ({ navigation }) => {
    const [suara, setSuara] = useState('');
    const [state, dispatch] = useContext(Context);

    const sound = new Sound(state.hewan.sound, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            // do something
            alert('Mohon maaf suara belum tersedia')
        }
    });

    const home = async () => {
        await sound.stop()
        await navigation.replace('Home')
    };

    const play = () => {
        //await setSuara(hewan);
        sound.play();
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bg01} style={{ width: '100%', height: '100%' }}>
                <View style={{ height: '20%', justifyContent: 'center' }}>
                    <Text style={styles.welcome}>{state.hewan.title}</Text>
                    <Text style={styles.instructions}>{state.hewan.info}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.item}>
                        <ImageBackground source={state.hewan.image ? state.hewan.image : kambing} style={{ width: '100%', height: '100%' }} />
                    </View>
                    <TouchableOpacity style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, borderColor: 'green', borderWidth: 2, backgroundColor: '#f0e9e9' }} onPress={() => play()} >
                        <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, }}>
                            <Text>Suara {state.hewan.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                    <TouchableOpacity style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, borderColor: 'black', borderWidth: 2, backgroundColor: '#f0e9e9' }} onPress={() => home()} >
                        <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, }}>
                            <Text>back Home</Text>
                        </View>
                    </TouchableOpacity>
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
        marginBottom: 5,
        fontSize: 20,
        fontStyle: 'italic'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    item: {
        backgroundColor: '#f0e9e9',
        //padding: 10,
        borderRadius: 5,
        height: 250,
        width: 250,
        margin: 5,
    },
});

export default Hewan;