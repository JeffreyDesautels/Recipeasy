import { Text, Button, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Field } from '../components/Components.js';
import { styles } from '../style/Style.js';
import UserCredentials from '../models/UserCredentials.js';

export default function LogIn({ navigation }) {
    const [credentials, setCredentials] = useState(new UserCredentials({ username: '', password: '' }))

    async function handleLogIn() {
        // navigation.replace('RecipeList');
        // const success = await auth.logIn(credentials);

        // console.log({ success, user: auth.currentUser });
        
        console.log(credentials);
    }

    function handleSignUp() {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.logInContainers}>
            <View style={styles.credentialsContainer}>
                <Field
                    label="Username"
                    onChangeText={text => setCredentials(new UserCredentials({ ...credentials, username: text }))}
                />
                <Field
                    label="Password"
                    secureTextEntry={true}
                    onChangeText={text => setCredentials(new UserCredentials({ ...credentials, password: text }))}
                />
                <Button color="#f2a93b" title="Login" onPress={handleLogIn} />
                <Text style={{ color: '#3d337d', fontWeight: 'bold', alignSelf: 'center' }} onPress={handleSignUp}>Sign up!</Text>
            </View>
        </View>
    );
}