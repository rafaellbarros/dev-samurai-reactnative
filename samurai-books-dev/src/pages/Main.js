import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = () => {
	const data = [
		{
			id: '1',
			title: 'Código Limpo',
			anotations: 'Livro muito bom',
			read: false,
			photo: null,
		},
		{
			id: '2',
			title: 'C Completo e Total',
			anotations: 'Livro muito bom',
			read: false,
			photo: null,
		},
		{
			id: '3',
			title: 'A bíblia do PHP',
			anotations: 'Livro muito bom',
			read: false,
			photo: null,
		},
	]

	return (
		<View style={styles.container}>
			<View style={styles.toolBox}>
				<Text style={styles.title}>Lista de Leitura</Text>
				<TouchableOpacity style={styles.tollboxButton}>
					<Icon name='add' size={22} color='#fff' />
				</TouchableOpacity>
			</View>
			<FlatList
				data={data}
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
