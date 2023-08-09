import {Alert, FlatList, RefreshControl, TouchableOpacity, View} from 'react-native'
import {useEffect, useState} from "react"
import axios from "axios"
import {Post} from "../components/Post"
import Loader from "../components/Loader"



export default function Home({navigation}) {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get('https://64d3d5fa67b2662bf3dcc8c6.mockapi.io/items')
            .then(({data}) => {
                setItems(data)
            }).catch(err => {
            console.log(err)
            Alert.alert('Ошибка', 'Чет не вышло получить статьи :(')
        }).finally(() => setIsLoading(false))
    }

    useEffect(fetchPosts, [])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl
                    refreshing={isLoading}
                    onRefresh={fetchPosts}
                />}
                data={items}
                renderItem={({item}) =>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('FullPost', {id: item.id, title: item.title})
                    }>
                        <Post
                            title={item.title}
                            createdAt={item.createdAt}
                            imageUrl={item.imageUrl}
                        />
                    </TouchableOpacity>
                }
            />
        </View>
    )
}
