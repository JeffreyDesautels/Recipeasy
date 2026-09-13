import { Text, Button, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function RecipeList() {
	// Troisieme page
	const options = [
		{
			id: '1',
			label: 'Breakfast',
			value: '1',
			color: '#FFFFFF',
			labelStyle: { color: '#FFFFFF' }
		},
		{
			id: '2',
			label: 'Lunch',
			value: '2',
			color: '#FFFFFF',
			labelStyle: { color: '#FFFFFF' }
		},
		{
			id: '3',
			label: 'Dinner',
			value: '3',
			color: '#FFFFFF',
			labelStyle: { color: '#FFFFFF' }
		}
	];

	return (
		<View style={{ flex: 1, }}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', }}>
				<RadioGroup layout="row" radioButtons={options} />
			</View>

			<Field label="Name" />

			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 10 }}>
				<Text style={{ color: '#FFFFFF' }}>Duration</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'}>
					<Picker.Item label="0 h" value="1" />
					<Picker.Item label="1 h" value="2" />
				</Picker>

				<Text style={{ color: '#FFFFFF' }}>:</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'}>
					<Picker.Item label="0 mins" value="1" />
					<Picker.Item label="1 mins" value="2" />
				</Picker>
			</View>

			<View style={{ flex: 8 }}>
				<Field style={{ height: '100%' }} label="Description" multiline={true} />
			</View>

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button color="#f2a93b" title="Save" onPress={() => handleClick("Save")} />
			</View>
		</View>
	);
}