import { Alert, Button, Text, View } from "react-native"
import { DetailsScreenProps, LoginScreenProps } from "../route/RootStackRoute"
import { LoginApi } from "../apis/LoginApis"
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export const LoginScreen = ({ route, navigation }: LoginScreenProps) => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        LoginApi("admin", "123456").then(res => {
            dispatch(login(res.result));
            navigation.navigate("Home");
        }).catch(e => {
            Alert.alert("登录失败", e.message, [{ text: "确定" }]);
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <View className="bg-slate-500 w-32 h-32 mb-4">
                <Text>LoginScreen</Text>
            </View>
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}