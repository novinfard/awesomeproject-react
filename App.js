import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Container, Content, Form, Item, Input, Label, Button, Text, Image, TextInput} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Image
            style={styles.logo}
            source={{uri: 'https://www.ourpath.co.uk/img/logo/logo-blue-side.png'}}
            />
            <Text style={styles.head1}>Hello, my name is {this.state.text}</Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop: 50}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
            </View>
        );
    }

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        margin: 100,
        width: 200,
        height: 52,
    },
    head1: {
        fontSize: 25,
    }
});
