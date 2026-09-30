import { Text, Button, Pressable, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';
import RecipeList from './pages/RecipeList.js';
import RecipeForm from './pages/RecipeForm.js';
import { styles } from './style/Style.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	function LogOutBtn({ navigation }) {
		return (
			<Pressable style={{ paddingRight: 10 }} onPress={() => navigation.replace('LogIn')}>
				<Text style={{ color: 'white' }}>Log out</Text>
			</Pressable>
		)
	}

	return (
		<SafeAreaProvider>
			{/* peut etre mettre dans les pages a la place, a voir. Demander a James la meilleure maniere de proceder. */}
			<SafeAreaView style={styles.container}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="LogIn"
						screenOptions={{
							contentStyle: {
								backgroundColor: '#377e7f'
							},
							headerStyle: {
								backgroundColor: '#44087d'
							},
							headerTintColor: 'white',
						}}
					>
						<Stack.Screen name="LogIn" component={LogIn} />
						<Stack.Screen name="SignUp" component={SignUp} />
						<Stack.Screen
							name="RecipeList"
							component={RecipeList}
							// demander a james comment faire pour ajouter de la navigation depuis l'app header
							options={({ navigation }) => ({
								headerRight: () => (
									<LogOutBtn navigation={navigation} />
								),
								headerBackVisible: false
							})}
						/>
						<Stack.Screen name="RecipeForm" component={RecipeForm}
						// options={({ navigation }) => ({
						// 	headerRight: () => (
						// 		<LogOutBtn navigation={navigation} />
						// 	)
						// })}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}