import React from 'react'
import {StyleSheet, Text} from 'react-native'

const Logo = () => {
	return <Text style={styles.logo}>InstaCat</Text>
}

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		marginVertical: 20,
	},
})

export default Logo
