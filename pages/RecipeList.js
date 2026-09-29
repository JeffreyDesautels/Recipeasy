import { useState } from 'react';
import { Text, Button, View, Pressable } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function RecipeList({ navigation }) {
    // TODO envisager une liste d'elements JSON?
    const [recipes, setRecipes] = useState([
        {
            category: 1,
            name: 'Zebre',
            durationHours: 0,
            durationMinutes: 0,
            description: 'jsp'
        },
        {
            category: 2,
            name: 'Allo',
            durationHours: 5,
            durationMinutes: 15,
            description: 'lol'
        },
        {
            category: 3,
            name: 'Test',
            durationHours: 10,
            durationMinutes: 30,
            description: 'hmmm'
        },
    ]);

    // TODO faire une copie, destructuring
    recipes.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
    });

    function getRandomRecipe() {
        return recipes[Math.floor(Math.random() * recipes.length)];
    }

    function handleViewRecipe() {
        navigation.navigate('RecipeForm', { mode: 'viewRecipe', recipe: getRandomRecipe() });
    }

    function handleNewRecipe() {
        navigation.navigate('RecipeForm', { mode: 'newRecipe' });
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* TODO travailler sur le bouton view (envoyer une recette random) */}
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', borderRadius: 10000 }}>
                <Pressable style={[styles.newRecipeButton, { backgroundColor: 'blue' }]} onPress={handleViewRecipe}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>View</Text>
                </Pressable>
            </View>

            <Text style={{ color: 'white' }}>{JSON.stringify(recipes, null, 4)}</Text>

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', borderRadius: 10000 }}>
                <Pressable style={styles.newRecipeButton} onPress={handleNewRecipe}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}