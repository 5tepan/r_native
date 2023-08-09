import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "./Home"
import FullPost from "./FullPost"
import {NavigationContainer} from "@react-navigation/native"

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Новости'}}
                />
                <Stack.Screen
                    name="FullPost"
                    component={FullPost}
                    options={{title: 'Статья'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation