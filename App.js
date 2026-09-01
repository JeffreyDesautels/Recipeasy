import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';

function Field(props) {
	return (
		<View style={props.style}>
			{/* <Text style={{color: 'white'}}>{props.label}</Text> */}
			<TextInput
				style={[{ borderColor: 'white', borderWidth: 1, color: 'white', padding: 10 }, props.style]}
				placeholder={props.label}
				secureTextEntry={props.secureTextEntry}
				multiline={props.multiline}
			/>
		</View>
	)
}

function handleClick(message) {
	alert(message + " pressed!");
}

export default function App() {
	// const fields = [
	// 	'Username',
	// 	'Password',
	// ]

	// Premiere page
	// return (
	// 	<View style={styles.container}>
	// 		<View style={styles.idContainer}>
	//			<Field label="Username" />
	// 			<Field label="Password" secureTextEntry={true} />
	// 			<Button color="#f2a93b" title="Login" onPress={() => handleClick("Login")}/>
	// 			<Text style={{ color: '#3d337d', fontWeight: 'bold' }}>Sign up!</Text>
	// 		</View>
	// 	</View>
	// );


	// Deuxieme page
	// return (
	// 	<View style={styles.container}>
	// 		<View style={styles.idContainer}>
	// 			<Field label="Username" />
	// 			<Field label="Password" secureTextEntry={true} />
	// 			<Field label="Password confirmation" secureTextEntry={true} />
	// 			<Button color="#f2a93b" title="Create my account" onPress={() => handleClick("Create my account")}/>
	// 		</View>
	// 	</View>
	// );


	// Troisieme page
	const options = [
		{
			id: '1',
			label: 'Breakfast',
			value: '1',
			color: '#FFFFFF',
			labelStyle: {color: '#FFFFFF'}
		},
		{
			id: '2',
			label: 'Lunch',
			value: '2',
			color: '#FFFFFF',
			labelStyle: {color: '#FFFFFF'}
		},
		{
			id: '3',
			label: 'Dinner',
			value: '3',
			color: '#FFFFFF',
			labelStyle: {color: '#FFFFFF'}
		}
	];

	return (
		<View style={styles.container}>
			<View style={{ flex: 1, flexDirection: 'column', width: '90%' }}>
				<RadioGroup layout="row" radioButtons={options} />
			</View>
			<View style={{ flex: 1, flexDirection: 'column', width: '90%' }}>
				<Field label="Name" />
			</View>
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', columnGap: 10, width: '90%' }}>
				<Text style={{ color: '#FFFFFF' }}>Duration</Text>

				<Picker style={{ color: '#FFFFFF', backgroundColor: '#377e7f', borderWidth: 0, width: '30%' }}>
					<Picker.Item label="0 h" value="1" />
					<Picker.Item label="1 h" value="2" />
				</Picker>

				<Text style={{ color: '#FFFFFF' }}>:</Text>

				<Picker style={{ color: '#FFFFFF', backgroundColor: '#377e7f', borderWidth: 0, width: '30%' }}>
					<Picker.Item label="0 mins" value="1" />
					<Picker.Item label="1 mins" value="2" />
				</Picker>
			</View>
			<View style={{ flex: 8, flexDirection: 'column', width: '90%' }}>
				<Field style={{ height: '100%' }} label="Description" multiline={true} />
			</View>
			<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%' }}>
				<Button color="#f2a93b" title="Save" onPress={() => handleClick("Save")}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#377e7f',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10, // surement remplacer ceci, penser au Safe Area
	},

	idContainer: {
		flexDirection: 'column',
		rowGap: 20,
		borderWidth: 1,
		borderColor: 'red',
		height: '50%',
		width: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
