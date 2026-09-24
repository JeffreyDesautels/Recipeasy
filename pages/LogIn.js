import { Text, Button, View } from 'react-native';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function LogIn({ navigation }) {
    function handlePressed() {
        // if (display.name.trim() == '') {

        // } else {
            navigation.navigate('RecipeList');
        // }
    }
    
    return (
        <View style={styles.logInContainers}>
            <View style={styles.credentialsContainer}>
                <Field label="Username" />
                <Field label="Password" secureTextEntry={true} />
                <Button color="#f2a93b" title="Login" onPress={() => handlePressed()} />
                <Text style={{ color: '#3d337d', fontWeight: 'bold', alignSelf: 'center' }}>Sign up!</Text>
            </View>
        </View>
    );
}