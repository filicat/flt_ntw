import { ScrollView, View } from "react-native";
import { HScollViewComponent } from "../../components/HScrollViewComponent";
import { useEffect, useState } from "react";
import { Movie } from "../../types/Movie";
import { MovieIndexStandard } from "../../components/MovieIndexStandard";


const FavTab = () => {
    const initMovies = [
        { id: '1', title: 'Movie 1' },
        { id: '2', title: 'Movie 2' },
        { id: '3', title: 'Movie 3' },
        { id: '4', title: 'Movie 4' },
        { id: '5', title: 'Movie 5' },
        { id:'6', title: 'Movie 6' },
    ];

    const [movies, setMovies] = useState<Movie[]>(initMovies);

    return (
        <View className="flex "> 
            <ScrollView className="flex">
                <HScollViewComponent />
                <MovieIndexStandard movies={movies} title="最近下载完成" />
            </ScrollView>
        </View>
    )
};

export default FavTab;