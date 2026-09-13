import { Button, View } from 'react-native';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function SignUp() {
	// Deuxieme page
	return (
		<View style={styles.logInContainers}>
			<View style={styles.idContainer}>
				<Field label="Username" />
				<Field label="Password" secureTextEntry={true} />
				<Field label="Password confirmation" secureTextEntry={true} />
				<Button color="#f2a93b" title="Create my account" onPress={() => handleClick("Create my account")}/>
			</View>
		</View>
	);
}