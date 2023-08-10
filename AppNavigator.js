// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import AlertScreen from './screens/AlertScreen';
import AboutScreen from './screens/AboutScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'blue', // Set your desired primary color here
	},
};

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: 'white',
				// tabBarLabel: () => null,
				tabBarStyle: {
					backgroundColor: '#211c37', // Change this to your desired tab background color
					paddingTop: 10
				},
			}}
			initialRouteName='Portfolio'
		>
			<Tab.Screen
				name='Dashboard'
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons name='md-home' color={color} size={size} />
						) : (
							<Ionicons name='md-home-outline' color={color} size={size} />
						),
				}}
			/>
			<Tab.Screen
				name='Portfolio'
				component={PortfolioScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons name='pie-chart' color={color} size={size} />
						) : (
							<Ionicons name='pie-chart-outline' color={color} size={size} />
						),
				}}
			/>
			<Tab.Screen
				name='Alerts'
				component={AlertScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<MaterialCommunityIcons
								name='bell-ring'
								color={color}
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								name='bell-ring-outline'
								color={color}
								size={size}
							/>
						),
				}}
			/>
			{/* <Tab.Screen
				name='News'
				component={AlertScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) =>
						focused ? (
							<Ionicons name='md-newspaper' color={color} size={size} />
						) : (
							<Ionicons name='md-newspaper-outline' color={color} size={size} />
						),
				}}
			/> */}
		</Tab.Navigator>
	);
};

const App = () => {
	return (
		<PaperProvider theme={theme}>
			<StatusBar barStyle='light-content' />
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Home'>
					<Drawer.Screen
						name='Home'
						component={TabNavigator}
						options={{
							headerTitle: '',
							headerTransparent: true,
							headerTintColor: 'white',
							headerStyle: {
								backgroundColor: '#3f434f',
							},
						}}
					/>
					<Drawer.Screen
						name='About'
						component={AboutScreen}
						options={{
							// headerTitle: '',
							// headerTransparent: true,
							headerTintColor: 'white',
							headerStyle: {
								backgroundColor: '#1a152a', 
							},
						}}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;
