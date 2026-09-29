import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		backgroundColor: '#377e7f',
	},

	credentialsContainer: {
		flexDirection: 'column',
		rowGap: 20,
		maxWidth: 200,
		width: '100%',
	},

	logInContainers: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	pickerStyle: {
		color: '#FFFFFF',
		backgroundColor: '#377e7f',
		borderWidth: 0,
		width: '30%'
	},
	newRecipeButton: {
		backgroundColor: '#f2a93b',
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10000,
	},
});