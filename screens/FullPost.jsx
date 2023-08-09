import React, {useEffect, useState} from 'react'
import styled from "styled-components/native"
import {Alert, View} from "react-native"
import axios from "axios";
import Loader from "../components/Loader"

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

const FullPost = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(false)
    const {id, title} = route.params

    useEffect(() => {
        navigation.setOptions({
            title
        })
        axios.get('https://64d3d5fa67b2662bf3dcc8c6.mockapi.io/items/' + id)
            .then(({data}) => {
                setData(data)
            }).catch(err => {
            console.log(err)
            Alert.alert('Ошибка', 'Чет не вышло получить статью :(')
        }).finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <View style={{padding: 20}}>
            <PostImage source={{uri: data.imageUrl}}/>
            <PostText>
                {data.text}
            </PostText>
        </View>
    )
}

export default FullPost