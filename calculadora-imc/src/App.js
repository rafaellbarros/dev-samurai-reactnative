import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class App extends Component {
	render() {
		return (
			<View style={sytles.container}>
				<Text>Hello!</Text>
			</View>
		)
	}
}

const sytles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
