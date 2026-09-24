import { Text, Button, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { Field, handleClick } from '../components/Components.js';
import { styles } from '../style/Style.js';

export default function RecipeList({ navigation }) {
    function handlePressed() {
        // if (display.name.trim() == '') {

        // } else {
            navigation.navigate('LogIn');
        // }
    }

	return (
		<View style={{ flex: 1 }}>
            <Text>Allo</Text>
            <Button color="#f2a93b" title="Login" onPress={() => handlePressed()} />
		</View>
	);
}