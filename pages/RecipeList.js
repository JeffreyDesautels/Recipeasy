import { useState } from 'react';
import { Text, Button, View, Pressable } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function RecipeList({ navigation }) {
    // envisager une liste d'elements JSON?
    const [recipes, setRecipes] = useState([
        {
            category: 1,
            name: 'Test',
            durationHours: 0,
            durationMinutes: 0,
            description: 'jsp'
        },
    ]);

    console.log(recipes);

    function handleNewRecipe() {
        navigation.navigate('RecipeForm');
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', borderRadius: 10000 }}>
                <Pressable style={[styles.newRecipeButton, {backgroundColor: 'blue'}]} onPress={() => alert('View')}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>View</Text>
                </Pressable>
            </View>

            <Text>{JSON.stringify(recipes)}</Text>

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', borderRadius: 10000 }}>
                <Pressable style={styles.newRecipeButton} onPress={handleNewRecipe}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}