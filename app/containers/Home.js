import React, {Component} from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
    View, 
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    RefreshControl,
    Image
} from 'react-native';
import Station from '../components/station';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  searching: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  }
});

class Home extends Component {
    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            searching: true,
            dataSource: ds.cloneWithRows(this.stations())
        };
    }

    componentDidMount() {
       this.getStationsFromLocation();
    }

    stations() {
        return Object.keys(this.props.stations).map(key => this.props.stations[key])
    }

    refresh() {
        this.getStationsFromLocation();
    }
    
    getStationsFromLocation() {
        this.setState({
            searching: true
        });

        navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.props.getStations(position.coords.latitude, position.coords.longitude).then(res => {
                        this.setState({
                            searching: false,
                            dataSource: this.state.dataSource.cloneWithRows(this.stations())
                        });
                    });
                },
                (error) => alert(JSON.stringify(error)),
                    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
                );
    }
    render() {
        return (
            <Image source={require('../images/background.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <ListView
                        enableEmptySections={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.searching}
                                onRefresh={() => this.refresh()}
                            />
                            }
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={station => <Station {...station} />}
                    />
                    <Spinner visible={this.state.searching} />
                </View>
            </Image>
        );
    }
}

function mapStateToProps(state) {
    return {
        stations: state.stations
    }
}

export default connect(mapStateToProps)(Home);