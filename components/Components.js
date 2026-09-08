import { TextInput, View } from 'react-native';

export function Field(props) {
    return (
        <View style={props.style}>
            <TextInput
                style={[{ borderColor: 'white', borderWidth: 1, color: 'white', padding: 10 }, props.style]}
                placeholder={props.label}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
            />
        </View>
    )
}

export const handleClick = (message) => {
    alert(message + " pressed!");
}