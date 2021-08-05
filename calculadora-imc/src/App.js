import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class App extends Component {
	digaOla = () => {
		alert('Olá tudo bem Rafael?')
	}

	render() {
		return (
			<View style={sytles.container}>
				<Button mode='contained' onPress={this.digaOla} title='Diga Olá para o Rafael.' />
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
