import {
  Button,
  Text, View
} from 'react-native';

import { NavigationContainer, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function HomeScreen(props: any) {
    const navigation = props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("hoidanit")}
            title='Go to Detail' />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("hoidanit",
              { userId: 1, name: "Eric" }
            )}
            title='Go user id = 1' />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("hoidanit", {
              userId: 2, name: "Hỏi Dân IT"
            })}
            title='Go user id = 2' />
        </View>

      </View>
    );
  }

  function DetailsScreen() {
    const route: any = useRoute();
    const navigation: any = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = {route?.params?.userId} </Text>
        <Button
          onPress={() => navigation.goBack()}
          title='Go back Home' />

      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <Stack.Screen
          name="hoidanit"
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}`,
          })}
        />
      </Stack.Navigator> */}
      {/* <Drawer.Navigator initialRouteName='hoidanit'>
        <Drawer.Screen name="Article" component={DetailsScreen} />

        <Drawer.Screen
          options={{
            drawerLabel: "Trang chủ",
            headerTitle: "Trang chủ"
          }}
          name="hoidanit"
          component={HomeScreen}

        />
      </Drawer.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'american-football'
                : 'american-football-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'aperture' : 'aperture-outline';
            }

            // You can return any component that you like here!
            return <Ionicons
              name={iconName as any}
              size={size} color={color}
            />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

