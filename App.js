import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainPage from './pages/MainPage.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import { styles } from './style/Style.js';

export default function App() {
	return (
		// faire marcher le safearea comme faut, revoir les styles 90% peut etre par du padding a la place
		// peut etre remplacer toutes les views pour juste le field dans les pages principales
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<MainPage/>
				{/* <SignIn/> */}
				{/* <SignUp/> */}
			</SafeAreaView>
		</SafeAreaProvider>
	)
}