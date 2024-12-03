import { Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { TabScreenProps } from "../route/RouteParams";
import { useState } from "react";
import FavTab from "./tabs/FavTab";
const FirstRoute = () => (
    <View style={[{ backgroundColor: '#ff4081', width: 100, height: 100 }]} />
);
const SecondRoute = () => (
    <View style={[{ backgroundColor: '#673ab7', width: 100, height: 100 }]} />
);

const renderScene = SceneMap({
    first: FavTab,
    second: SecondRoute,
});

const routes = [
    { key: 'first', title: 'Favourite' },
    { key: 'second', title: 'Collect List' },
];

const TabScreen: React.FC<TabScreenProps> = ({ navigation }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    return (
        <View className="flex flex-1">
            {/* 顶部导航Tab */}
            <View className="flex h-8 w-full bg-blue-300 flex-row justify-around items-center">
                {routes.map((route, i) => {
                    return (
                        <View className="p-0 m-1" key={route.key}>
                            <TouchableOpacity
                                key={route.key}
                                onPress={() => setIndex(i)}
                            // style={i === index ? styles.activeTab : styles.inactiveTab}
                            >
                                <Text className={`text-center ${i === index ? 'text-white' : 'text-black'}`}>{route.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
            <TabView
                // swipeEnabled={false}
                className="flex"
                navigationState={{ index, routes }}
                renderScene={renderScene}
                // <TabBar {...props} style={styles.tabBar} />
                renderTabBar={props => null}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );

}

export default TabScreen;