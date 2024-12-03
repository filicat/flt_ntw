import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootBotTabParamList } from './RouteParams';
import { HomeScreen } from '../screen/HomeScreen';
import { ProfileScreen } from '../screen/ProfileScreen';
import useWebSocket from '../hook/useWebSocket';
import TabScreen from '../screen/TabScreen';

// 定义一个类型来表示图标名称
type IconName = 'home' | 'home-outline' | 'list' | 'list-outline' | 'heart' | 'heart-outline' | 'time' | 'time-outline' | 'person' | 'person-outline';

// 定义一个映射来根据路由名称获取图标名称
const getIconName = (routeName: string, focused: boolean): IconName => {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Index':
      return focused ? 'list' : 'list-outline';
    case 'Collect':
      return focused ? 'heart' : 'heart-outline';
    case 'History':
      return focused ? 'time' : 'time-outline';
    case 'Profile':
      return focused ? 'person' : 'person-outline';
    default:
      return 'home-outline';
  }
};

const Tab = createBottomTabNavigator<RootBotTabParamList>();
const RootBotTabs: React.FC = () => {
  
  const { isConnected, messages, connect } = useWebSocket();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: { padding: 5 },
        // 全局设置标题栏高度
        headerStyle: {
          height: 50, // 设置标题栏高度
        },
        headerTitleStyle: {
          fontSize: 20, // 可选：设置标题字体大小
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarBadge: messages.length}} />
      <Tab.Screen name='Tab' component={TabScreen} />
    </Tab.Navigator>
  )
}

export default RootBotTabs;