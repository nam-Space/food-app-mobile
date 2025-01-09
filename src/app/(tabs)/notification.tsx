import { APP_COLOR } from "@/utils/constant";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#333',
    },
    notificationCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
    },
    icon: {
        width: 48,
        height: 48,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
    },
    notificationContent: {
        fontSize: 14,
        color: '#666',
    },
});

const NotificationPage = () => {
    const notifications = [
        {
            id: '1',
            title: 'Khuyến mãi đặc biệt',
            content: 'Nhận ngay 50% giảm giá khi đặt hàng hôm nay!',
            icon: 'https://img.icons8.com/color/48/sale--v1.png',
        },
        {
            id: '2',
            title: 'Cập nhật đơn hàng',
            content: 'Đơn hàng #1234 của bạn đã được giao thành công.',
            icon: 'https://img.icons8.com/color/48/delivery.png',
        },
        {
            id: '3',
            title: 'Thông báo hệ thống',
            content: 'Dịch vụ sẽ bảo trì từ 12:00 đến 14:00 hôm nay.',
            icon: 'https://img.icons8.com/?size=100&id=nBbbJcNcC7nK&format=png&color=000000',
        },
        {
            id: '4',
            title: 'Chúc mừng năm mới',
            content: 'Chúc bạn và gia đình năm mới an khang thịnh vượng!',
            icon: 'https://img.icons8.com/color/48/christmas-star.png',
        },
        {
            id: '5',
            title: 'Nhận quà miễn phí',
            content: 'Quà tặng đã được thêm vào tài khoản của bạn.',
            icon: 'https://img.icons8.com/color/48/gift.png',
        },
        {
            id: '6',
            title: 'Cảnh báo bảo mật',
            content: 'Phát hiện hoạt động bất thường trên tài khoản của bạn.',
            icon: 'https://img.icons8.com/color/48/shield.png',
        },
    ];

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.notificationCard}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationContent}>{item.content}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{
                borderBottomColor: "#eee",
                borderBottomWidth: 1,
                paddingHorizontal: 10,
                paddingBottom: 5
            }}>
                <Text style={{ color: APP_COLOR.ORANGE }}>Thông báo</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={notifications}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}
export default NotificationPage;