import instance from "./instance"


const getPost = async () => {
    try {
        console.log('fetching posts')
        const response = await instance.productedInstance.get('/posts/getpost')
        if (response.data.posts) {
            return response.data.posts
        }
        return null

    } catch (error) {
        console.log('fetching error', error);
    }
}

// const createPost = async () => {
//     try {
//         console.log('post created')
//         const response = await instance.productedInstance.post('/posts')
//         if (response.data.post) {
//             return response.data.post
//         }
//         return null
//     } catch (error) {
//         console.log('faild invalid post', error);
//     }
// }





export default getPost
    
