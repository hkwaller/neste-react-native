import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

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
  1: { name:"greenbus", value: false},
  2: { name:"bus", value: false},
  3: { name:"", value: false},
  4: { name:"airport", value: false},
  5: { name:"", value: false},
  6: { name:"train", value: false},
  7: { name:"tram", value: false},
  8: { name:"sub", value: false},
  9: { name:"", value: false}
};

function renderLines(lines) {
    let servedBy = [];

    lines.map(line => {
        if (servedBy.indexOf(line.Transportation) === -1) {
            servedBy.push(line.Transportation);
        }
    })

    let parsed = [];
    servedBy.forEach(transportation => {
        switch (transportation) {
            case 1:
                parsed.push(<Image style={styles.image} source={require(`../images/greenbus.png`)} key={`${Math.random(10) * 3.12}${transportation}`} />);
                return;
            case 2:
                parsed.push(<Image style={styles.image} source={require(`../images/bus.png`)} key={`${Math.random(10) * 3.12}${transportation}`} />);
                return;
            case 6:
                parsed.push(<Image style={styles.image} source={require(`../images/train.png`)} key={`${Math.random(10) * 3.12}${transportation}`} />);
                return;
            case 7:
                parsed.push(<Image style={styles.image} source={require(`../images/tram.png`)} key={`${Math.random(10) * 3.12}${transportation}`} />);
                return;
            case 8:
                parsed.push(<Image style={styles.image} source={require(`../images/underground.png`)} key={`${Math.random(10) * 3.12}${transportation}`} />);
                return;
            default:
                return;
        } 
    })
    return parsed;
}

const Station = (station) => {
    return (
        <TouchableHighlight onPress={() => {}}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Text>{station.Name}</Text>
                    {renderLines(station.Lines)}
                </View>
                <View style={styles.distanceContainer}>
                    <Text style={styles.distance}>{station.Distance}</Text>
                    <Text style={styles.meters}>m</Text>
                </View>
            </View>
        </TouchableHighlight>
        
    )
}

export default Station;