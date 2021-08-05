import * as React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'

import logo from '../assets/logo.png'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.findMyIp = this.findMyIp.bind(this)

		this.state = {
			data: '',
		}
	}

	async findMyIp() {
		this.setState({
			data: 'descobrindo IP...',
		})

		const ip = await fetch('http://httpbin.org/ip')
		const data = await ip.json()
		this.setState({
			data: data.origin,
		})
	}

	render() {
		return (
			<View style={sytles.container}>
				<View style={sytles.body}>
					<Image style={sytles.logo} source={logo} />
					<Text style={sytles.ip}>{this.state.data}</Text>
					<Button title='Descobrir meu IP!' onPress={this.findMyIp}></Button>
				</View>
				<View style={sytles.footer}>
					<Text style={sytles.made}>Feito com s2 por Rafael Barros</Text>
				</View>
			</View>
		)
	}
}

const sytles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2F2336',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ip: {
		color: 'white',
		paddingTop: 20,
		paddingBottom: 20,
	},
	footer: {
		paddingTop: 10,
		paddingBottom: 10,
	},
	made: {
		color: 'white',
		textAlign: 'center',
	},
	logo: {},
})
