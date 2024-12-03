import {
  FlatList,
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useContext, useEffect, useRef, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Movie} from '../types/Movie';
import { Button } from 'react-native-paper';


interface MovieInexStandardProps {
  movies: Movie[];
  title: string;
  // filter: 
}

export const MovieIndexStandard: React.FC<MovieInexStandardProps> = ({
  movies,
  title,
}) => {
  const layout = useWindowDimensions();
  const [x, setX] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const renderMovie = ({item}: {item: Movie}) => {
    return (
      <View
        key={item.id}
        className="w-40 h-40 mx-1 flex-col justify-center items-center bg-rose-300">
        <View className="w-full">
          <Image
            source={{
              uri: 'https://gd1.alicdn.com/imgextra/i3/1942844848/O1CN018Dx3Yn1lgQoJZXDck_!!1942844848.jpg',
            }}
            style={{width: '100%', aspectRatio: 800 / 540}}
            resizeMode="cover"
          />
        </View>
        <View className="w-full">
          <Text className="text-sm text-black line-clamp-1">{item.title}</Text>
        </View>
      </View>
    );
  };
  const Movies = movies.map(movie => renderMovie({item: movie}));

  useEffect(() => {
    console.log('MovieIndexStandard movies', x);

    scrollViewRef.current?.scrollTo({animated: false, x: x, y: 0});
  }, [x]);

  return (
    <View className='flex p-1 border-2 border-emerald-700 rounded-xl my-1'>
      <View className="w-full h-12 flex-row justify-between items-center">
        <Text className="text-lg text-black bold">{title}</Text>
        <Button mode='text' icon={'eye'} onPress={() => {}} >查看全部</Button>
      </View>
      <View className="w-full h-40 flex-row justify-center items-center">
        {movies.length > 0 ? (
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            scrollEnabled>
            {Movies}
          </ScrollView>
        ) : (
          <Text>暂无数据</Text>
        )}
      </View>
    </View>
  );
};
