import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';

const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_COLOR.GREY,
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
        <View style={styles.container}>
            <Feather name="search" size={20}
                color="black" />
            <Text style={{
                color: "#707070"
            }}>Deal Hot Hôm Nay Từ 0đ...</Text>
        </View>
    )
}
export default SearchHome;