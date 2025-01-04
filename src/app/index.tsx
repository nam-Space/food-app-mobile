import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { APP_COLOR } from "@/utils/constant";
import ShareButton from "@/components/button/share.button";
import bg from '@/assets/auth/welcome-background.png';
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';
import { LinearGradient } from 'expo-linear-gradient';
import TextBetweenLine from "@/components/button/text.between.line";
import { Link, Redirect, router } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    welcomeText: {
        flex: 0.6,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 30
    },
    heading: {
        fontSize: 40,
        fontWeight: "600"
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10
    },
    footer: {
    },
})

const WelcomePage = () => {
    if (true) {
        return (
            <Redirect href={"/(tabs)"} />
        )
    }

    return (
        <ImageBackground style={{ flex: 1 }} source={bg}>
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.8]}
            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>Welcome to</Text>
                        <Text style={styles.body}>@hoidanit - Food</Text>
                        <Text style={styles.footer}>Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam</Text>
                    </View>
                    <View style={styles.welcomeBtn}>
                        <TextBetweenLine title="Đăng nhập với" />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 30
                        }}>
                            <ShareButton
                                title="facebook"
                                onPress={() => alert('me')}
                                textStyle={{ textTransform: 'uppercase' }}
                                btnStyle={{
                                    justifyContent: 'center',
                                    borderRadius: 30,
                                    backgroundColor: "#fff"
                                }}
                                icons={
                                    <Image source={fbLogo} />
                                }
                            />
                            <ShareButton
                                title="google"
                                onPress={() => { alert("me") }}
                                textStyle={{ textTransform: "uppercase" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    paddingHorizontal: 20,
                                    backgroundColor: "#fff"
                                }}
                                icons={
                                    <Image source={ggLogo} />
                                }
                            />
                        </View>
                        <View>
                            <ShareButton
                                title="Đăng nhập với email"
                                onPress={() => { router.navigate("/(auth)/login") }}
                                textStyle={{ color: "#fff", paddingVertical: 5 }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    marginHorizontal: 50,
                                    paddingVertical: 10,
                                    backgroundColor: "#2c2c2c",
                                    borderColor: "#505050",
                                    borderWidth: 1
                                }}
                                pressStyle={{ alignSelf: "stretch" }}
                            />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                color: "white",
                            }}>
                                Chưa có tài khoản?
                            </Text>
                            <Link href={'/(auth)/signup'}>
                                <Text style={{ color: "white", textDecorationLine: 'underline' }}>
                                    Đăng ký.
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default WelcomePage