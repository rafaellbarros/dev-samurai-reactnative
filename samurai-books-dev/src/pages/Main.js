import React, {useEffect, useState} from 'react'
import {AsyncStorage, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = ({navigation}) => {
	const [books, setBooks] = useState()

	useEffect(() => {
		AsyncStorage.getItem('books').then(data => {
			const book = JSON.parse(data)
			setBooks([book])
		})
	}, [])

	const onNewEbook = () => {
		navigation.navigate('Book')
	}

	return (
		<View style={styles.container}>
			<View style={styles.toolBox}>
				<Text style={styles.title}>Lista de Leitura</Text>
				<TouchableOpacity style={styles.tollboxButton} onPress={onNewEbook}>
					<Icon name='add' size={22} color='#fff' />
				</TouchableOpacity>
			</View>
			<FlatList
				data={books}
				keyExtractor={item => item.id}
				renderItem={({item}) => (
					<TouchableOpacity style={styles.itemButton}>
						<Text style={styles.itemText}>{item.title}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		padding: 10,
	},
	toolBox: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	title: {
		flex: 1,
		fontSize: 22,
		color: '#3498db',
	},
	tollboxButton: {
		backgroundColor: '#3498db',
		borderRadius: 50,
		width: 22,
		height: 22,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemButton: {},
	itemText: {
		fontSize: 20,
		color: '#000',
	},
})

export default Main
