import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    View, 
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    RefreshControl,
    Image,
    StatusBar
} from 'react-native';
import Station from '../components/station';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

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
    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    }
    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View
                key={`${sectionID}`}
                style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderTitle}>Alle</Text>
            </View>
        )
    }
    _pressRow(rowID) {
        console.log("presusuu")
    }
    render() {
        return (
            <Image source={require('../images/background.png')} style={styles.backgroundImage}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={styles.container}>
                    <ListView
                        enableEmptySections={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.searching}
                                onRefresh={() => this.getStationsFromLocation()}
                            />
                            }
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={station => {
                            return (
                                <Station press={this._pressRow} {...station} />
                            )
                        }}
                        renderSeparator={this._renderSeparator}
                        renderSectionHeader={this._renderSectionHeader}
                    />
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  searching: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
  },
  sectionHeader: {
    height: 30,
    backgroundColor: 'rgb(245,245,245)',
    paddingLeft: 10,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC'
  },
  sectionHeaderTitle: {
    color: 'rgb(88,89,93)'
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        stations: state.stations
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
