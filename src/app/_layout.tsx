import { Slot } from "expo-router";
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        <View style={{ padding: 50 }}>
            <Text>header</Text>

            <Text>footer</Text>
            <Slot />
        </View>
    )
}

export default RootLayout;