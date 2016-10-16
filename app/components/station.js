import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { getTransportImage } from '../lib/helpers';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    image: {
        width: 10,
        height: 10,
        marginLeft: 5
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    distanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    meters: {
        color: 'darkgray',
        fontSize: 10
    }
})

function renderProducts(products) {
    return products.map((product, index) => {
        const n = Number(product);
        switch(n) {
            case 1:
                return <Image style={styles.image} source={require('../images/buss.png')} key={index} />;
            case 2:
                return <Image style={styles.image} source={require('../images/trikk.png')} key={index} />;
            case 3:
                return <Image style={styles.image} source={require('../images/sub.png')} key={index} />;
            case 4:
                return <Image style={styles.image} source={require('../images/greenbus.png')} key={index} />;
            default:
                return <Image style={styles.image} source={require('../images/trikk.png')} key={index} />;
        }
    });
}

const Station = (station) => {
    const products = station.products.toString().split('');
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text>{station.name}</Text>
                {renderProducts(products)}
            </View>
            <View style={styles.distanceContainer}>
                <Text style={styles.distance}>{station.dist}</Text>
                <Text style={styles.meters}>m</Text>
            </View>
        </View>
    )
}

export default Station;