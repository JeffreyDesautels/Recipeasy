import { Text, Button, View, Pressable } from 'react-native';
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function RecipeForm({ navigation, route }) {
	// TODO adapter pour recevoir une recette si d'un view
	const { mode, recipe } = route.params;

	console.log(route.params);

	const radioGroupLabels = ['Breakfast', 'Lunch', 'Diner'];
	const options = radioGroupLabels.map((labels, index) => ({
		id: index,
		label: labels,
		color: '#FFFFFF',
		labelStyle: { color: '#FFFFFF' }
	}));

	const [selectedId, setSelectedId] = useState();

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', }}>
				<RadioGroup layout="row" radioButtons={options} onPress={setSelectedId} selectedId={selectedId} />
			</View>

			<Field label="Name" value={{recipe: 'name'}} />

			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 10 }}>
				<Text style={{ color: '#FFFFFF' }}>Duration</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'} selectedValue={{recipe: 'durationHours'}}> {
					Array.from({ length: 13 }, (v, i) => {
						return <Picker.Item label={`${i} h`} value={i} key={i}></Picker.Item>
					})
				}
				</Picker>

				<Text style={{ color: '#FFFFFF' }}>:</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'}> {
					Array.from({ length: 60 }, (v, i) => {
						return <Picker.Item label={`${i} mins`} value={i} key={i}></Picker.Item>
					})
				}
				</Picker>
			</View>

			<View style={{ flex: 8 }}>
				<Field style={{ height: '100%' }} label="Description" multiline={true} />
			</View>

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				{/* <Button color="#f2a93b" title="Save" onPress={() => handleClick("Save")} /> */}
				<Pressable style={{ backgroundColor: mode === 'newRecipe' ? "#f2a93b" : "white", padding: 10, borderRadius: 5 }}>
					<Text style={{ color: mode === 'newRecipe' ? "white" : "red" }}>{mode === 'newRecipe' ? "Save" : "Delete"}</Text>
				</Pressable>
			</View>
		</View>
	);
}