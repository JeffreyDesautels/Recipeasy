import { useState, useEffect } from 'react';
import { Text, View, Pressable, FlatList } from 'react-native';
import { styles } from '../style/Style.js';

export default function RecipeList({ navigation, route }) {

    const [recipes, setRecipes] = useState([
        {
            category: 1,
            name: 'Zebre',
            durationHours: 0,
            durationMinutes: 1,
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

    useEffect(() => {
        if (route.params?.newRecipe) {
            const newRecipe = route.params.newRecipe;
            setRecipes([...recipes, newRecipe]);
        }
    }, [route.params?.newRecipe]);

    const sortedRecipes = [...recipes].sort((a, b) => {
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
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', borderRadius: 10000 }}>
                <Pressable style={[styles.newRecipeButton, { backgroundColor: 'blue' }]} onPress={handleViewRecipe}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>View</Text>
                </Pressable>
            </View>

            {/* <Text style={{ color: 'white' }}>{JSON.stringify(sortedRecipes)}</Text> */}
            {/* <Text style={{ color: 'white' }}>{sortedRecipes.length == 0 ? "No recipes yet..." : JSON.stringify(sortedRecipes)}</Text> */}
            <FlatList
                data={sortedRecipes}
                renderItem={({ item }) => {
                    return (
                        <Text
                            style={{
                                padding: 16,
                                textAlign: 'center',
                                color: 'white'
                            }}
                        >
                            {item.name}
                        </Text>
                    )
                }}
            />

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', borderRadius: 10000 }}>
                <Pressable style={styles.newRecipeButton} onPress={handleNewRecipe}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}