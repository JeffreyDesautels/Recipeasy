import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RecipeForm from './pages/RecipeForm.js';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';
import { styles } from './style/Style.js';

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				{/* <LogIn /> */}
				{/* <SignUp /> */}
				<RecipeForm />
			</SafeAreaView>
		</SafeAreaProvider>
	)
}