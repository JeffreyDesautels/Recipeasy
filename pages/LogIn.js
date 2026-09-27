import { Text, Button, View } from 'react-native';
import { Field } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function LogIn({ navigation }) {
    function handleLogIn() {
        navigation.replace('RecipeList');
    }

    function handleSignUp() {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.logInContainers}>
            <View style={styles.credentialsContainer}>
                <Field label="Username" />
                <Field label="Password" secureTextEntry={true} />
                <Button color="#f2a93b" title="Login" onPress={handleLogIn} />
                <Text style={{ color: '#3d337d', fontWeight: 'bold', alignSelf: 'center' }} onPress={handleSignUp}>Sign up!</Text>
            </View>
        </View>
    );
}