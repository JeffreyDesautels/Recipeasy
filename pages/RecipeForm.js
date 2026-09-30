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

	const [recipeInfos, setRecipeInfos] = useState({
		category: undefined,
		name: '',
		durationHours: 0,
		durationMinutes: 0,
		description: '',
		...recipe
	});

	console.log(recipeInfos);

	const radioGroupLabels = ['Breakfast', 'Lunch', 'Diner'];
	const options = radioGroupLabels.map((labels, index) => ({
		id: index,
		label: labels,
		color: '#f2a93b',
		labelStyle: { color: '#FFFFFF' }
	}));

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', }}>
				{/*onPress={setSelectedId}*/}
				<RadioGroup layout="row" radioButtons={options} selectedId={recipeInfos.category - 1} onPress={(value) => setRecipeInfos({ ...recipeInfos, category: value + 1})} />
			</View>

			<Field label="Name" value={recipeInfos.name} onChangeText={(text) => setRecipeInfos({ ...recipeInfos, name: text })} />

			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 10 }}>
				<Text style={{ color: '#FFFFFF' }}>Duration</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'} selectedValue={recipeInfos.durationHours} onValueChange={(value) => setRecipeInfos({ ...recipeInfos, durationHours: value})} > {
					Array.from({ length: 13 }, (v, i) => {
						return <Picker.Item label={`${i} h`} value={i} key={i}></Picker.Item>
					})
				}
				</Picker>

				<Text style={{ color: '#FFFFFF' }}>:</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'} selectedValue={recipeInfos.durationMinutes} onValueChange={(value) => setRecipeInfos({ ...recipeInfos, durationMinutes: value})} > {
					Array.from({ length: 60 }, (v, i) => {
						return <Picker.Item label={`${i} mins`} value={i} key={i}></Picker.Item>
					})
				}
				</Picker>
			</View>

			<View style={{ flex: 8 }}>
				<Field style={{ height: '100%' }} label="Description" multiline={true} value={recipeInfos.description} onChangeText={(text) => setRecipeInfos({ ...recipeInfos, description: text })} />
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