import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import {
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useGlobalContext } from '../context/GlobalContext';

export default function HomeScreen() {
	const insets = useSafeAreaInsets();
	const { dashData } = useGlobalContext();
	return (
		<View style={[styles.container, { paddingTop: insets.top + 40 }]}>
			<StatusBar barStyle='light-content' />
			<FlatList
				showsVerticalScrollIndicator={false}
				data={dashData}
				renderItem={({ item, index }) => (
					<>
						{index !== 0 && <View style={styles.line} />}
						<View style={{ marginBottom: 10 }}>
							<View style={[styles.statRow, { marginBottom: 6 }]}>
								<Text style={styles.companyName}>{item.companyName}</Text>
								<Text style={styles.shares}>
									{parseFloat(item.shares).toFixed(2)}
								</Text>
							</View>
							<View style={styles.statRow}>
								<View style={styles.infoContainer}>
									<MaterialCommunityIcons
										name='clock-time-four'
										size={20}
										color={item.diff > 0 ? '#00d3b8' : '#ed3f40'}
									/>
									<Text style={styles.infoText}>
										{item.time} | {item.location}
									</Text>
								</View>
								<View style={styles.infoContainer}>
									<Text
										style={{
											color: item.diff > 0 ? '#00d3b8' : '#ed3f40',
											fontWeight: '600',
											fontSize: 14,
										}}
									>
										{`${item.diff} (${item.diffPercent})`}
									</Text>
								</View>
							</View>
						</View>
					</>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1a152a',
		paddingHorizontal: 16,
	},
	statRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line: {
		borderBottomColor: '#999',
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	companyName: { color: '#fff', fontWeight: '600', fontSize: 19 },
	shares: { color: '#fff', fontWeight: '700', fontSize: 16 },
	infoContainer: { flexDirection: 'row', alignItems: 'center', gap: 6},
	infoText: { color: '#999', fontWeight: '600', fontSize: 14 }
});
