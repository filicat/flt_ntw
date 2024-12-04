import { ScrollView, Text, View } from "react-native"
import useWebSocket from "../hook/useWebSocket";
import { DetailsScreenProps } from "../route/RouteParams";
import { HScollViewComponent } from "../components/HScrollViewComponent";
import { TorrentComponent } from "../components/TorrentComponent";

export const DetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
    const { isConnected, messages, connect } = useWebSocket();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <ScrollView className="flex">
            <View className="bg-slate-500 w-32 h-32">
                <Text>DetailsScreen</Text>
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
            <TorrentComponent />
            </ScrollView>
        </View>
    )
}