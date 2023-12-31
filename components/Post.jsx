import styled from "styled-components/native"

const PostView = styled.View`
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
    flex-direction: row;
`
const PostImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 12px;
    margin-right: 12px;
`
const PostTitle = styled.Text`
    font-size: 17px;
    font-weight: 700;
`

const PostDetails = styled.View`
    flex: 1;
    justify-content: center;
`

const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 2px;
`

export const Post = ({title, imageUrl, createdAt}) => {
    const cutTitle = (str) => {
        if (str.length >= 50) {
            return str.substring(0, 50) + '...'
        }
        return str
    }

    return (
        <PostView>
            <PostImage source={{uri: imageUrl}}/>
            <PostDetails>
                <PostTitle>
                    {cutTitle(title)}
                </PostTitle>
                <PostDate>
                    {new Date(createdAt).toLocaleDateString()}
                </PostDate>
            </PostDetails>
        </PostView>
    )
}