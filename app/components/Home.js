import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, FlatList, Image } from 'react-native';
import bg02 from '../assets/images/bghome.png';
import kambing from '../assets/images/kambing.jpg';
import sapi from '../assets/images/sapi.jpg';
import ayam from '../assets/images/ayam.jpg';
import katak from '../assets/images/katak.jpg';
import bebek from '../assets/images/bebek.jpg';
import kuda from '../assets/images/kuda.jpg';
import kucing from '../assets/images/kucing.jpg';
import burung from '../assets/images/burung.jpg';
import ular from '../assets/images/ular.jpg';
import kelinci from '../assets/images/kelinci.jpg';
import anjing from '../assets/images/anjing.jpg';
import kupu from '../assets/images/kupu.jpg';
import gajah from '../assets/images/gajah.jpg';
import monyet from '../assets/images/monyet.jpg';
import singa from '../assets/images/singa.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../ext/Store';

const DATA = [
    {
        id: '1',
        title: 'Kambing',
        sound: 'kambing.mp3',
        image: kambing,
        info: 'Goat'
    },
    {
        id: '2',
        title: 'Sapi',
        sound: 'sapi.mp3',
        image: sapi,
        info: 'Cow'
    },
    {
        id: '3',
        title: 'Ayam',
        sound: 'ayam.mp3',
        image: ayam,
        info: 'Chicken'
    },
    {
        id: '4',
        title: 'Katak',
        sound: 'katak.mp3',
        image: katak,
        info: 'Frog'
    },
    {
        id: '5',
        title: 'Bebek',
        sound: 'bebek.mp3',
        image: bebek,
        info: 'Duck'
    },
    {
        id: '6',
        title: 'Kuda',
        sound: 'kuda.mp3',
        image: kuda,
        info: 'Horse'
    },
    {
        id: '7',
        title: 'Kucing',
        sound: 'kucing.mp3',
        image: kucing,
        info: 'Cat'
    },
    {
        id: '8',
        title: 'Burung',
        sound: 'burung.mp3',
        image: burung,
        info: 'Bird'
    },
    {
        id: '9',
        title: 'Ular',
        sound: 'ular.mp3',
        image: ular,
        info: 'Snake'
    },
    {
        id: '10',
        title: 'Kelinci',
        sound: 'kelinci.mp3',
        image: kelinci,
        info: 'Rabbit'
    },
    {
        id: '11',
        title: 'Anjing',
        sound: 'anjing.mp3',
        image: anjing,
        info: 'Dog'
    },
    {
        id: '12',
        title: 'Kupu - kupu',
        sound: 'kupu.mp3',
        image: kupu,
        info: 'Butterflies'
    },
    {
        id: '13',
        title: 'Gajah',
        sound: 'gajah.mp3',
        image: gajah,
        info: 'Elephant'
    },
    {
        id: '14',
        title: 'Monyet',
        sound: 'monyet.mp3',
        image: monyet,
        info: 'Monkey'
    },
    {
        id: '15',
        title: 'Singa',
        sound: 'singa.mp3',
        image: singa,
        info: 'Lion'
    },
];

const Item = ({ title, image }) => (
    <View style={styles.item}>
        <ImageBackground source={image ? image : kambing} style={{ width: '100%', height: '100%' }} />
    </View>
);

const Home = ({ navigation }) => {
    //const [count, setCount] = useState(0);
    const [state, dispatch] = useContext(Context);

    const hewan = async (item) => {
        await dispatch({ type: 'SET_HEWAN', payload: item });
        await navigation.replace('Hewan')
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => hewan(item)}>
            <Item title={item.title} image={item.image} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={bg02} style={{ width: '100%', height: '100%' }}>
                <View style={{ height: '20%', justifyContent: 'center' }}>
                    <Text style={styles.welcome}>HEWAN</Text>
                    <Text style={styles.instructions}>Hewan disekitar kita</Text>
                </View>
                <FlatList
                    data={DATA}
                    numColumns={3}
                    horizontal={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ width: '100%', alignItems: 'center', paddingBottom: 30 }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
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
    item: {
        backgroundColor: '#f0e9e9',
        //padding: 10,
        borderRadius: 5,
        height: 100,
        width: 100,
        margin: 5
    },
    title: {
        fontSize: 20,
    },
});

export default Home;