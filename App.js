import React from 'react';
import AppNavigator from './AppNavigator'; // Adjust the path as needed
import { View, StatusBar } from 'react-native';
import GlobalContext from './context/GlobalContext';
const App = () => {
	return (
		<GlobalContext>
			<View style={{ backgroundColor: 'red', flex: 1 }}>
				<StatusBar barStyle='light-content' />
				<AppNavigator />
			</View>
		</GlobalContext>
	);
};

export default App;
