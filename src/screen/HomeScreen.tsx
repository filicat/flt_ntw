import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
import { WebSocketState, setSocket, disconnect } from "../redux/websocketFavSlice";
import  useWebSocket  from "../hook/useWebSocket";
import { HomeScreenProps } from "../route/RouteParams";
import notifee from '@notifee/react-native';
import { HScollViewComponent } from "../components/HScrollViewComponent";
import { ScrollView } from "react-native-gesture-handler";
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


      async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
            channelId,
            // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // // pressAction is needed if you want the notification to open the app when pressed
            // pressAction: {
            //   id: 'default',
            // },
          },
        });
      }

      
      const handleSendLocalNotification = () => onDisplayNotification();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Text>{userInfo?`Welcome ${userInfo.realname} ${userInfo.createTime.getFullYear()}`:'未登录'}</Text>
            {userInfo ?
            <>
                <Button title="Logout" onPress={handleLogout} />
            </>
            :   <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            }
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            <Button title="SendLocalNotification" onPress={handleSendLocalNotification} />
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
            <HScollViewComponent />
        </View>
    )
}