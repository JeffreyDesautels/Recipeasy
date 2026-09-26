import { useState } from 'react';
import { Text, Button, View, Pressable } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function RecipeList({ navigation }) {
    const [recipes, setRecipes] = useState({});

    console.log(recipes);

    function handleNewRecipe() {
        navigation.navigate('RecipeForm');
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text>Allo</Text>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', borderRadius: 10000 }}>
                <Pressable style={styles.newRecipeButton} onPress={handleNewRecipe}>
                    <Text style={{ color: 'white', fontSize: 28 }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}