import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
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

let productOptions = {
  air: false,
  train: false,
  bus: false,
  tram: false,
  underground: false,
  exp_boat: false,
  ship: false,
  ferry: false
};

function parseTrafficBitmask(int){
    return ["air", "train", "bus", "tram", "underground", "exp_boat", "ship", "ferry"].reduce(function(mem,kind,n){
        if (int & (1 << n)){
            mem[kind] = true;
        }
        return mem;
    },{})
}

function renderProducts(products) {
    const p = parseTrafficBitmask(products);
    let parsed = [];

    for (let product in p) {
        switch (product) {
            case "train":
                parsed.push(<Image style={styles.image} source={require(`../images/train.png`)} key={`${Math.random(10) * 3.12}${product}`} />);
                continue; 
            case "bus":
                parsed.push(<Image style={styles.image} source={require(`../images/bus.png`)} key={`${Math.random(10) * 3.12}${product}`} />);
                continue; 
            case "tram":
                parsed.push(<Image style={styles.image} source={require(`../images/tram.png`)} key={`${Math.random(10) * 3.12}${product}`} />);
                continue; 
            case "underground":
                parsed.push(<Image style={styles.image} source={require(`../images/underground.png`)} key={`${Math.random(10) * 3.12}${product}`} />);
                continue; 
            default:
                continue;
        } 
    }

    return parsed;
}

const Station = (station) => {
    return (
        <TouchableHighlight onPress={() => press()}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text>{station.name}</Text>
                    {renderProducts(station.products)}
                </View>
                <View style={styles.distanceContainer}>
                    <Text style={styles.distance}>{station.dist}</Text>
                    <Text style={styles.meters}>m</Text>
                </View>
            </View>
        </TouchableHighlight>
        
    )
}

export default Station;