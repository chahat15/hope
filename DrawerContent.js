// DrawerContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrawerContent = () => (
	<View style={styles.container}>
		<Text>Drawer Content</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
});

export default DrawerContent;
