import instance from "./instance"



const getUser = async () => {
    try {
        console.log('fetching user...')
        const response = await instance.productedInstance.get('/user/getuser')
        if (response.data.user) {
            return response.data.user
        } else {
            return null
        }
    } catch (error) {
        console.log('error fetching user', error)
    }
}

export default {
    getUser
}