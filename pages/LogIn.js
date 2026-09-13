import { Text, Button, View } from 'react-native';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function SignIn() {
    // Premiere page
    return (
        <View style={styles.logInContainers}>
            <View style={styles.idContainer}>
                <Field label="Username" />
                <Field label="Password" secureTextEntry={true} />
                <Button color="#f2a93b" title="Login" onPress={() => handleClick("Login")} />
                <Text style={{ color: '#3d337d', fontWeight: 'bold', alignSelf: 'center' }}>Sign up!</Text>
            </View>
        </View>
    );
}