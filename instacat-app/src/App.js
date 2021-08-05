import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const App = () => {
	const [like, setLike] = useState(0)

	const increment = () => {
		setLike(like + 1)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{like}</Text>
			<TouchableOpacity onPress={increment}>
				<Text>Like</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 22,
		color: '#00FF00',
	},
})

export default App
