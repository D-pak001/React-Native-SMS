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
    studentDetails: {
        flex: 3,
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

                <View style={{ flex: 1.7, backgroundColor: '#00a3e4' }}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>

                        <Image source={require("../image/login/tiger.jpeg")} style={{ width: 110, height: 110, borderRadius: 100 }} />

                        <Text style={{ color: 'black', marginTop: 7, fontSize: 22 }}>Student Name</Text>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Information Technology
                        </Text>
                    </View>
                </View>
                
                        <View style={styles.studentDetails} >
                    <ScrollView style={{flex:1}}>
                          <View style={{flex:1,padding:30,flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <MyText>Name</MyText>
                                <MyText>College</MyText>
                                <MyText>Roll No.</MyText>
                                <MyText>Program</MyText>
                                <MyText>Stream</MyText>
                                <MyText>Enrollment Year</MyText>
                                <MyText>Backlogs</MyText>
                                <MyText>Current Percentage</MyText>
                                <MyText>Email</MyText>
                                <MyText>Phone No.</MyText>
                                <MyText>Sex</MyText>
                                <MyText>D.O.B</MyText>
                                <MyText>Nationality</MyText>
                                <MyText>Current Address</MyText>
                                <Text style={{marginTop:37,color:'black',fontWeight:'bold'}}>Permanent Address</Text>

                            </View>
                            <View style={{flex:1, marginLeft: 15, marginRight: 10 }}>
                                <VText>Narendra arya </VText>
                                <VText>MIT</VText>
                                <VText>12345</VText>
                                <VText> Bachelor</VText>
                                <VText>IT</VText>
                                <VText> 2014 </VText>
                                <VText>0</VText>
                                <VText>69.3</VText>
                                <VText>rasdfa@gmail.com</VText>
                                <VText>55557978515</VText>
                                <VText>Male</VText>
                                <VText>02-12-1999</VText>
                                <VText>Indian</VText>
                                <VText>
                                    Champlin Club,port south Dakota,South Africa,57043-5689
                                </VText>
                                <VText>
                                    Champlin Club,port south Dakota,South Africa,57043-5689
                                </VText>
                            </View>
                            </View>
                    </ScrollView>
                        </View>
                </View>
           
        );
    }
}