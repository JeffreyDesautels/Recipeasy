import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field } from '../components/Components.js';
import { styles } from '../style/Style.js';
import { Toast } from 'toastify-react-native';

export default function RecipeForm({ navigation, route }) {
	const { mode, recipe } = route.params;

	const [recipeInfos, setRecipeInfos] = useState({
		category: undefined,
		name: '',
		durationHours: 0,
		durationMinutes: 0,
		description: '',
		...recipe
	});

	const radioGroupLabels = ['Breakfast', 'Lunch', 'Dinner'];
	const options = radioGroupLabels.map((labels, index) => ({
		id: index + 1,
		label: labels,
		color: '#FFFFFF',
		labelStyle: { color: '#FFFFFF' }
	}));

	function handleSaveRecipe() {
		let errorLog = [];

		if (recipeInfos.category == undefined) {
			errorLog.push("Aucune catégorie choisie!");
		}
		if (!recipeInfos.name.trim()) {
			errorLog.push("Aucun nom choisit!");
		}
		if (recipeInfos.durationHours == 0 && recipeInfos.durationMinutes == 0) {
			errorLog.push("Durée invalide!");
		}

		if (errorLog.length == 0) {
			Toast.success("Valid recipe added!");
			navigation.popTo('RecipeList', { newRecipe: recipeInfos });
		} else {
			Toast.error(errorLog.join("\n"));
		}
	}

	function handleDeleteRecipe() {
		navigation.popTo('RecipeList');
	}

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', }}>
				<RadioGroup layout="row" radioButtons={options} selectedId={recipeInfos.category} onPress={(value) => setRecipeInfos({ ...recipeInfos, category: value })} />
			</View>

			<Field label="Name" value={recipeInfos.name} onChangeText={(text) => setRecipeInfos({ ...recipeInfos, name: text })} />

			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', columnGap: 10 }}>
				<Text style={{ color: '#FFFFFF' }}>Duration</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'} selectedValue={recipeInfos.durationHours} onValueChange={(value) => setRecipeInfos({ ...recipeInfos, durationHours: value })} > {
					Array.from({ length: 13 }, (v, i) => {
						return <Picker.Item label={`${i} h`} value={i} key={i}></Picker.Item>
					})
				}
				</Picker>

				<Text style={{ color: '#FFFFFF' }}>:</Text>

				<Picker style={styles.pickerStyle} dropdownIconColor={'white'} selectedValue={recipeInfos.durationMinutes} onValueChange={(value) => setRecipeInfos({ ...recipeInfos, durationMinutes: value })} > {
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
				<Pressable style={{ backgroundColor: mode === 'newRecipe' ? "#f2a93b" : "white", padding: 10, borderRadius: 5 }}  onPress={mode === 'newRecipe' ? handleSaveRecipe : handleDeleteRecipe}>
					<Text style={{ color: mode === 'newRecipe' ? "white" : "red" }}>{mode === 'newRecipe' ? "Save" : "Delete"}</Text>
				</Pressable>
			</View>
		</View>
	);
}