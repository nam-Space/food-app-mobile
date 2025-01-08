import { APP_COLOR } from "@/utils/constant";
import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { router } from "expo-router";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        gap: 5,
        flexDirection: "row",
        margin: 5,
        paddingHorizontal: 3,
        paddingVertical: 7,
        borderRadius: 3
    }
})
const SearchHome = () => {
    return (
        <Pressable
            onPress={() => router.navigate("/(auth)/search")}
            style={styles.container}>

            <Feather name="search" size={20}
                color="black" />
            <Text style={{
                color: "#707070"
            }}>Deal Hot Hôm Nay Từ 0đ...</Text>
        </Pressable>
    )
}
export default SearchHome;