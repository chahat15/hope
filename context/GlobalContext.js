import React, { createContext, useContext } from 'react';

export const InfoContext = createContext();
export const useGlobalContext = () => useContext(InfoContext);

export const dashData = [
	{
		id: 1,
		companyName: 'Apple',
		shares: '235.5443',
		time: '11:43:21',
		location: 'Paris',
		diff: '+0.73',
		diffPercent: '+0.52%',
	},
	{
		id: 2,
		companyName: 'Microsoft',
		shares: '548.23',
		time: '02:54:09',
		location: 'U.S',
		diff: '-0.92',
		diffPercent: '-0.23%',
	},
	{
		id: 3,
		companyName: 'ICICI Bank',
		shares: '548.23',
		time: '02:54:09',
		location: 'India',
		diff: '-0.92',
		diffPercent: '-0.23%',
	},
	{
		id: 4,
		companyName: 'Redmi',
		shares: '548.23',
		time: '02:54:09',
		location: 'China',
		diff: '+0.43',
		diffPercent: '+0.56%',
	},
	{
		id: 5,
		companyName: 'Adani Group',
		shares: '548.23',
		time: '02:54:09',
		location: 'India',
		diff: '+0.54',
		diffPercent: '+0.23%',
	},
	{
		id: 6,
		companyName: 'Tesla',
		shares: '548.23',
		time: '02:54:09',
		location: 'U.S',
		diff: '+0.12',
		diffPercent: '+0.90%',
	},
	{
		id: 7,
		companyName: 'Tata',
		shares: '548.23',
		time: '02:54:09',
		location: 'India',
		diff: '-0.92',
		diffPercent: '+0.23%',
	},
	{
		id: 8,
		companyName: 'Hyundai',
		shares: '548.23',
		time: '02:54:09',
		location: 'Vietnam',
		diff: '-0.92',
		diffPercent: '+0.23%',
	},
	{
		id: 9,
		companyName: 'Samsung',
		shares: '548.23',
		time: '02:54:09',
		location: 'Korea',
		diff: '-0.92',
		diffPercent: '+0.23%',
	},
	{
		id: 10,
		companyName: 'HDFC Bank',
		shares: '548.23',
		time: '02:54:09',
		location: 'India',
		diff: '+0.55',
		diffPercent: '+0.87%',
	},
	{
		id: 11,
		companyName: 'AU Bank',
		shares: '548.23',
		time: '02:54:09',
		location: 'India',
		diff: '-0.92',
		diffPercent: '+0.23%',
	},
];

export const alerts = [
	{
		id: 1,
		heading: 'Bitcoin',
		content: 'More than $65,234',
		logo: require('../assets/bitcoin.png'),
	},
	{
		id: 2,
		heading: 'Binance',
		content: 'More than $65,234',
		logo: require('../assets/binance.png'),
	},
	{
		id: 3,
		heading: 'ByteCoin',
		content: 'More than $65,234',
		logo: require('../assets/bytecoin.png'),
	},
	{
		id: 4,
		heading: 'Ripple',
		content: 'More than $65,234',
		logo: require('../assets/ripple.png'),
	},
];

export default function FormContext({ children }) {
	return (
		<InfoContext.Provider value={{ dashData, alerts }}>{children}</InfoContext.Provider>
	);
}
