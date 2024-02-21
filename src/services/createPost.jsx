import instance from "./instance"


const createPost = async (payload) => {
    try {
        console.log('post created successfully')
        const response = await instance.productedInstance.post('/posts/create', payload)
        console.log(response.data)
        if (response.data) {

            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.log('error creating the data', error)
    }
}

export default createPost