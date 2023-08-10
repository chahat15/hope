import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const data = {
	netAmount: '98,454.43',
	diff: '+0.73',
	diffPercent: '+03.76%',
	note: '13/6 - Delayed Currency in FRC',
};

export default function PortfolioScreen() {
	const insets = useSafeAreaInsets();
	return (
		<View style={[styles.container, { paddingTop: insets.top + 40 }]}>
			<StatusBar barStyle='light-content' />
			<View
				style={{
					backgroundColor: '#0f0b1a',
					flexDirection: 'row',
					padding: 16,
					gap: 6,
					marginBottom: 16,
				}}
			>
				<View>
					<Entypo
						name={data.diff > 0 ? 'arrow-long-up' : 'arrow-long-down'}
						size={20}
						color={data.diff > 0 ? '#00d3b8' : '#ed3f40'}
						style={{ position: 'relative', top: 6 }}
					/>
				</View>
				<View>
					<View
						style={{
							flexDirection: 'row',
							gap: 14,
							alignItems: 'flex-end',
							marginBottom: 8,
						}}
					>
						<Text style={{ color: '#fff', fontWeight: '600', fontSize: 26 }}>
							{data.netAmount}
						</Text>
						<Text
							style={{
								color: data.diff > 0 ? '#00d3b8' : '#ed3f40',
								fontWeight: '400',
								fontSize: 13,
								position: 'relative',
								bottom: 3,
							}}
						>
							{`${data.diff}(${data.diffPercent})`}
						</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
						<MaterialCommunityIcons
							name='clock-time-four'
							size={13}
							color={data.diff > 0 ? '#00d3b8' : '#ed3f40'}
						/>
						<Text style={{ color: '#999', fontWeight: '400', fontSize: 13 }}>
							13/6 - Delayed Currency in FRC
						</Text>
					</View>
				</View>
			</View>
			<View style={{ marginBottom: 24 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingHorizontal: 16,
						// marginVertical: 10,
						marginBottom: 8,
					}}
				>
					<View>
						<Text style={{ color: '#fff', fontWeight: '600', fontSize: 18 }}>
							Moving Averages
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginRight: -6,
						}}
					>
						<Text
							style={{
								color: '#ed3f40',
								fontWeight: '600',
								fontSize: 14,
								marginRight: -6,
							}}
						>
							Strong Sell
						</Text>
						<Entypo name='dot-single' size={36} color='#ed3f40' />
					</View>
				</View>
				<View style={{ paddingHorizontal: 16, flexDirection: 'row', gap: 10 }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 10,
							borderWidth: 1,
							borderColor: '#999',
							borderRadius: 10,
							alignItems: 'center',
							flex: 1,
						}}
					>
						<View
							style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
						>
							<Entypo
								name={data.diff > 0 ? 'arrow-down' : 'arrow-long-down'}
								size={22}
								color={data.diff > 0 ? '#00d3b8' : '#ed3f40'}
							/>
							<Text style={{ color: '#fff', fontWeight: '400', fontSize: 18 }}>
								Buy
							</Text>
						</View>
						<View>
							<Text style={{ color: '#fff', fontWeight: '600', fontSize: 25 }}>
								2
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 10,
							borderWidth: 1,
							borderColor: '#999',
							borderRadius: 10,
							alignItems: 'center',
							flex: 1,
						}}
					>
						<View
							style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
						>
							<Entypo
								name={data.diff > 0 ? 'arrow-up' : 'arrow-long-down'}
								size={22}
								color={'#ed3f40'}
							/>
							<Text style={{ color: '#fff', fontWeight: '400', fontSize: 18 }}>
								Sell
							</Text>
						</View>
						<View>
							<Text style={{ color: '#fff', fontWeight: '600', fontSize: 26 }}>
								10
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={{ marginBottom: 24 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingHorizontal: 16,
						marginBottom: 8,
					}}
				>
					<View>
						<Text style={{ color: '#fff', fontWeight: '600', fontSize: 18 }}>
							Technical Indicator
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginRight: -6,
						}}
					>
						<Text
							style={{
								color: '#ed3f40',
								fontWeight: '600',
								fontSize: 14,
								marginRight: -6,
							}}
						>
							Strong Sell
						</Text>
						<Entypo name='dot-single' size={36} color='#ed3f40' />
					</View>
				</View>
				<View style={{ paddingHorizontal: 16, flexDirection: 'row', gap: 10 }}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 10,
							borderWidth: 1,
							borderColor: '#999',
							borderRadius: 10,
							alignItems: 'center',
							flex: 1,
						}}
					>
						<View
							style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
						>
							<Entypo
								name={data.diff > 0 ? 'arrow-down' : 'arrow-long-down'}
								size={22}
								color={data.diff > 0 ? '#00d3b8' : '#ed3f40'}
							/>
							<Text style={{ color: '#fff', fontWeight: '400', fontSize: 18 }}>
								Buy
							</Text>
						</View>
						<View>
							<Text style={{ color: '#fff', fontWeight: '600', fontSize: 25 }}>
								1
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 10,
							borderWidth: 1,
							borderColor: '#999',
							borderRadius: 10,
							alignItems: 'center',
							flex: 1,
						}}
					>
						<View
							style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
						>
							<Entypo
								name={data.diff > 0 ? 'arrow-up' : 'arrow-long-down'}
								size={22}
								color={'#ed3f40'}
							/>
							<Text style={{ color: '#fff', fontWeight: '400', fontSize: 18 }}>
								Sell
							</Text>
						</View>
						<View>
							<Text style={{ color: '#fff', fontWeight: '600', fontSize: 26 }}>
								8
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1a152a',
	},
});
