import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
import { WebSocketState, setSocket, disconnect, Message, removeMessage } from "../redux/websocketFavSlice";
import  useWebSocket  from "../hook/useWebSocket";
import { ProfileScreenProps } from "../route/RouteParams";
export function ProfileScreen({ route, navigation }: ProfileScreenProps) {
    const dispatch = useDispatch();
    const { token, userInfo } = useSelector((state: RootState) => state.auth);
    const { isConnected, connect } = useWebSocket();
    const { socket, messages } = useSelector((state: { websocketFav: WebSocketState }) => state.websocketFav);
    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Login');
      };
      const handleDisConnect = () => {
        dispatch(disconnect());
      };

      const handleRemoveMessage = (message: Message) => {
            dispatch(removeMessage(message));
      }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <View className="bg-slate-500 w-32 h-16 mb-4 flex-col justify-center items-center">
                <Text className="text-black">Profile Screen</Text>
                <Text className="text-black">{messages.length}</Text>
            </View>
            <View>
            <Text>Messages in Other Screen:</Text>
            {messages.map((message, index) => (
                <View key={index} className="bg-slate-500 w-40 h-16 mb-2">
                    <Text className="text-black">{new Date(message.timestamp||0).toLocaleString()} {message.msgId} {message.cmd} {message.msgTxt}</Text>
                    <Button title="Remove" onPress={() => handleRemoveMessage(message)} />
                </View>
            ))}
            </View>
        </View>
    )
}