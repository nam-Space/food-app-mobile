import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
    inputGroup: {
        padding: 5,
        gap: 10
    },
    text: {
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    eye: {
        position: 'absolute',
        right: 10,
        top: 18
    }
})

interface IProps {
    title?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value: any;
    setValue?: (v: any) => void;
    onChangeText?: any;
    onBlur?: any;
    error?: any;
}

const ShareInput = (props: IProps) => {
    const { title,
        keyboardType,
        secureTextEntry = false,
        value,
        setValue,
        onChangeText,
        onBlur,
        error } = props;
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isFocus, setIsFocus] = useState(false)

    return (

        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <View>
                <TextInput
                    style={[styles.input, { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }]}
                    keyboardType={keyboardType}
                    onFocus={() => setIsFocus(true)}
                    onBlur={(e) => { if (onBlur) onBlur(e); setIsFocus(false); }}
                    secureTextEntry={!isShowPassword && secureTextEntry}
                    value={value}
                    onChangeText={onChangeText}
                />
                {secureTextEntry && <FontAwesome5
                    style={styles.eye}
                    name={isShowPassword ? 'eye' : 'eye-slash'}
                    size={15}
                    color="black"
                    onPress={() => setIsShowPassword(!isShowPassword)}
                />}
                {error && <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>}
            </View>
        </View>

    )
}

export default ShareInput