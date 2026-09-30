import { TextInput } from 'react-native';

export function Field(props) {
    return (
        <TextInput
            style={[{ borderColor: 'white', borderWidth: 1, color: 'white', padding: 10 }, props.style]}
            placeholder={props.label}
            placeholderTextColor="#ffffff"
            textAlignVertical="top"
            secureTextEntry={props.secureTextEntry}
            multiline={props.multiline}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    )
}

export const handleClick = (message) => {
    alert(message + " pressed!");
}