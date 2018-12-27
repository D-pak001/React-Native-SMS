import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements'


function MyText(props) {
    return (
        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 5 }}>
            {props.children}
        </Text>
    );
}
function VText(props) {
    return (
        <Text style={{ marginTop: 5 }}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Roboto'
    },

    header: {
        flex: 0.5,
        backgroundColor: '#1c1f26',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    attendanceGraph: {
        flex: 2,
        backgroundColor: 'white',
        marginTop:20
        // flexDirection: 'row',

    },

});

export default class login extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <Icon
                        name='angle-left'
                        type='font-awesome'
                        size={37}
                        iconStyle={{ marginLeft: 20, color: 'white' }}
                        onPress={() => console.log('goBackSimon')}
                    />
                    <Text style={{ color: 'white', fontSize: 20, flex: 1, marginLeft: 25 }}>Profile</Text>
                    <Icon
                        name='navicon'
                        type='font-awesome'
                        size={28}
                        iconStyle={{ marginRight: 20, color: 'white' }}
                        onPress={() => console.log('menu')}
                    />
                </View>
                <View style={{ flex: 4, backgroundColor: '#d4d8d6',padding:20 }}>

                    <View style={{ flex: 0.4, alignItems: 'center',flexDirection:'row'}}>
                        <View style={{flex:1,backgroundColor:'green',height:45}}>
                            <Text>1 Holiday</Text>
                        </View>
                        <View style={{flex:1,backgroundColor:'blue',marginLeft:5,height:45}}>
                            <Text>2 Events</Text>
                        </View>
                    </View>

                    <View style={{ flex: 2, backgroundColor: '#00a3e4',marginTop:20 }}>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>
                                calender
                        </Text>
                        </View>
                    </View>

                    <View style={styles.attendanceGraph} >
                        <Text style={{ color: 'black', fontSize: 18 }}>
                            attendanceGraph
                        </Text>
                    </View>
                </View>
            </View>

        );
    }
}