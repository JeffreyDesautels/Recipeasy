import { Text, Button, View } from 'react-native';
import { useState } from 'react';
import { Field } from '../components/Components.js';
import { styles } from '../style/Style.js';
import UserCredentials from '../models/UserCredentials.js';
import auth from '../services/AuthService.js';
import { Toast } from 'toastify-react-native';

export default function LogIn({ navigation }) {
    const [credentials, setCredentials] = useState(new UserCredentials({ username: '', password: '' }));

    async function handleLogIn() {
        // console.log(credentials);

        const success = await auth.logIn(credentials);

        // console.log({ success, user: auth.currentUser });

        if (success) {
			Toast.success(`Welcome ${credentials.username}!`);
            navigation.replace('RecipeList');
        } else {
			Toast.error("Invalid credentials!");
        }
    }

    function handleSignUp() {
        navigation.navigate('SignUp');
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
                <Button color="#f2a93b" title="Login" onPress={handleLogIn} />
                <Text style={{ color: '#3d337d', fontWeight: 'bold', alignSelf: 'center' }} onPress={handleSignUp}>Sign up!</Text>
            </View>
        </View>
    );
}