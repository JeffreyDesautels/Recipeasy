import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../style/Style.js';
import auth from '../services/AuthService.js'
import recipeService from '../services/RecipeService.js'

export default function RecipeList({ navigation, route }) {

    const loadRecipes = async () => {
        setRecipes(await recipeService.selectRecipes(auth.currentUser.id));
    };

    useFocusEffect(
        useCallback(() => {
            loadRecipes();
        }, [])
    );



    function RecipeIcon({ category }) {
        if (category == 1) return <Ionicons name="cafe" size={28} color={'#f2a93b'} />
        if (category == 2) return <Ionicons name="fast-food" size={28} color={'#03ff00'} />
        if (category == 3) return <Ionicons name="restaurant" size={28} color={'#00008b'} />
    }

    function RecipeItem({ recipe }) {
        return (
            <TouchableOpacity
                onPress={() => handleViewRecipe(recipe)}
            >
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 15, paddingBottom: 15 }}>
                    <View style={{ flex: 1 }}>
                        <RecipeIcon category={recipe.category} />
                        <Text style={{ color: 'lightgray', fontSize: 14, fontWeight: 'bold' }}>{`${recipe.durationHours}h${recipe.durationMinutes < 10 ? '0' : ''}${recipe.durationMinutes}`}</Text>
                    </View>

                    <View style={{ flex: 6 }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white'
                            }}
                        >
                            {`${recipe.name}`}
                        </Text>
                        <Text numberOfLines={1} style={{ color: 'lightgray' }}>{`${recipe.description}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const [recipes, setRecipes] = useState([]);

    // considerer supprimer ceci
    // useEffect(() => {
    //     if (route.params?.newRecipe) {
    //         const newRecipe = route.params.newRecipe;
    //         setRecipes([...recipes, newRecipe]);
    //     }
    // }, [route.params?.newRecipe]);
    // considerer supprimer ceci


    const sortedRecipes = [...recipes].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
    });

    function handleViewRecipe(recipe) {
        navigation.navigate('RecipeForm', { mode: 'viewRecipe', recipe: recipe });
    }

    function handleNewRecipe() {
        navigation.navigate('RecipeForm', { mode: 'newRecipe' });
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={sortedRecipes}
                ListEmptyComponent={<Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold', alignSelf: 'center' }}>No recipes yet...</Text>}
                renderItem={({ item }) => <RecipeItem recipe={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'white' }} />}
            />

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', borderRadius: 10000 }}>
                <Pressable style={styles.newRecipeButton} onPress={handleNewRecipe}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}