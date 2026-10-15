import { Button, View } from 'react-native';
import { useState } from 'react';
import { Field } from '../components/Components.js';
import { styles } from '../style/Style.js';
import UserCredentials from '../models/UserCredentials.js';
import auth from '../services/AuthService.js';
import { Toast } from 'toastify-react-native';

export default function SignUp({ navigation }) {
	const [credentials, setCredentials] = useState(new UserCredentials({ username: '', password: '' }));
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	async function handleCreateAccount() {
		const success = await auth.signUp(credentials);

		if (success && credentials.password === passwordConfirmation) {
			Toast.success(`Welcome ${credentials.username}!`);
			navigation.popToTop();
			navigation.replace('RecipeList');
		} else {
			Toast.error("Invalid credentials!");
		}
	}

	return (
		<View style={styles.logInContainers}>
			<View style={styles.credentialsContainer}>
				<Field
					label="Username"
					value={credentials.username}
					onChangeText={text => setCredentials(new UserCredentials({ ...credentials, username: text }))}
				/>
				<Field
					label="Password"
					value={credentials.password}
					secureTextEntry={true}
					onChangeText={text => setCredentials(new UserCredentials({ ...credentials, password: text }))}
				/>
				<Field
					label="Password confirmation"
					value={passwordConfirmation}
					secureTextEntry={true}
					onChangeText={text => setPasswordConfirmation(text)}
				/>
				<Button color="#f2a93b" title="Create my account" onPress={handleCreateAccount} />
			</View>
		</View>
	);
}