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
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<NavigationContainer style={styles.container}>
					<Stack.Navigator initialRouteName="LogIn">
						<Stack.Screen
							name="LogIn"
							component={LogIn}
							options={{ title: 'Le login' }}
						/>

						<Stack.Screen name="RecipeList" component={RecipeList} />
					</Stack.Navigator>
				</NavigationContainer>
				{/* <LogIn /> */}
				{/* <SignUp /> */}
				{/* <RecipeList /> */}
				{/* <RecipeForm /> */}
			</SafeAreaView>
		</SafeAreaProvider>
	)
}