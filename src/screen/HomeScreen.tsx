import { Button, Text, View } from "react-native"
import { HomeScreenProps } from "../route/RootStackRoute"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
import { WebSocketState, setSocket, disconnect } from "../redux/websocketSlice";
import  useWebSocket  from "../hook/useWebSocket";
export function HomeScreen({ route, navigation }: HomeScreenProps) {
    const dispatch = useDispatch();
    const { token, userInfo } = useSelector((state: RootState) => state.auth);
    const { isConnected, messages, connect } = useWebSocket();
    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Login');
      };
      const handleDisConnect = () => {
        dispatch(disconnect());
      };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Text>{userInfo?`Welcome ${userInfo.realname} ${userInfo.createTime.getFullYear()}`:'未登录'}</Text>
            {userInfo ?
            <>
                <Button title="Logout" onPress={handleLogout} />
                <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            </>
            :   <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            }
            <Button title="Connect to WebSocket" onPress={connect} />
            <Button title="Disconnect WebSocket" onPress={handleDisConnect} />
            <Text>WebSocket Status: {isConnected ? 'Connected' : 'Disconnected'}</Text>
            <Text>Message Queue Status: {messages.length}</Text>
            <View>
            <Text>Messages in Other Screen:</Text>
            {messages.map((message, index) => (
                <View key={index} className="bg-slate-500 w-40 h-16 mb-2">
                    <Text className="text-black">{new Date(message.timestamp||0).toLocaleString()} {message.msgId} {message.cmd} {message.msgTxt}</Text>
                </View>
            ))}
            </View>
        </View>
    )
}