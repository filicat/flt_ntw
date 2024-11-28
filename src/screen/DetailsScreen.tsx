import { Text, View } from "react-native"
import { DetailsScreenProps } from "../route/RootStackRoute"

export const DetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <View className="bg-slate-500 w-32 h-32">
                <Text>DetailsScreen</Text>
            </View>
        </View>
    )
}