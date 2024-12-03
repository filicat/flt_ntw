
// type HScrollViewComponentProps = {
//   children: React.ReactNode;
// };

import { ScrollView, Text, View } from "react-native";

export const  HScollViewComponent = () => {

    return (
    <View className="w-full h-40 bg-slate-100 flex-row justify-center items-center">
        <ScrollView horizontal
                    showsHorizontalScrollIndicator={true}
                    scrollEnabled className="h-full">
          <View className="w-32 h-full flex-col justify-center items-center bg-blue-500 mx-2">
            <Text className="text-lg">横向滚动项 1</Text>
          </View>
          <View className="w-32 h-full flex-col justify-center items-center bg-blue-500 mx-2">
            <Text className="text-lg">横向滚动项 2</Text>
          </View>
          <View className="w-32 h-full flex-col justify-center items-center bg-blue-500 mx-2">
            <Text className="text-lg">横向滚动项 3</Text>
          </View>
          <View className="w-32 h-full flex-col justify-center items-center bg-blue-500 mx-2">
            <Text className="text-lg">横向滚动项 4</Text>
          </View>
          <View className="w-32 h-full flex-col justify-center items-center bg-blue-500 mx-2">
            <Text className="text-lg">横向滚动项 5</Text>
          </View>
        </ScrollView>
      </View>
    );
}; 