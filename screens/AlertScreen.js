import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	FlatList,
	Image,
	Pressable,
} from 'react-native';
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../context/GlobalContext';

export default function AlertScreen() {
	const insets = useSafeAreaInsets();
	const navigation = useNavigation();
	const { alerts } = useGlobalContext();

	return (
		<View style={[styles.container, { paddingTop: insets.top + 50 }]}>
			<StatusBar barStyle='light-content' />
			{/* <Text>Home Screen</Text> */}
			<FlatList
				showsVerticalScrollIndicator={false}
				data={alerts}
				renderItem={({ item, index }) => (
					<>
						{index !== 0 && <View style={styles.line} />}
						<Pressable
							onPress={() => navigation.navigate('Dashboard')}
							style={{
								marginBottom: 10,
								flexDirection: 'row',
								gap: 10,
								alignItems: 'center',
							}}
						>
							<View>
								<Image
									source={item.logo}
									style={{ width: 35, height: 35 }}
									resizeMethod='auto'
									resizeMode='contain'
								/>
							</View>
							<View style={{ flex: 1 }}>
								<View style={{ marginBottom: 6 }}>
									<Text style={styles.companyName}>{item.heading}</Text>
								</View>
								<View>
									<View>
										<Text style={styles.infoText}>{item.content}</Text>
									</View>
								</View>
							</View>
							<View>
								<MaterialIcons
									name='keyboard-arrow-right'
									size={24}
									color='#999'
								/>
							</View>
						</Pressable>
					</>
				)}
				keyExtractor={(item)=>item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1a152a',
		paddingHorizontal: 16,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	line: {
		borderBottomColor: '#999',
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	companyName: { color: '#fff', fontWeight: '600', fontSize: 19 },
	shares: { color: '#fff', fontWeight: '700', fontSize: 16 },
	infoText: { color: '#999', fontWeight: '600', fontSize: 14 },
});
