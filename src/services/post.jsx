import instance from "./instance"


const getPost = async () => {
    try {
        console.log('fetching posts')
        const response = await instance.productedInstance.get('/posts')
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



const createPost = async () => {
    try {
        console.log('post created successfully')
        const response = await instance.productedInstance.post('/posts/create')
        console.log( response.data)
        if (response.data) {
            
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.log('error creating the data', error)
    }
}

export default {
    getPost,
    createPost
}