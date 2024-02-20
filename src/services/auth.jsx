import instance from "./instance";


const authService = {
    signup: async (user) => {
        try {
            const res = await instance.authInstance.post('/user/signup', user)
            if (res.data) {
                console.log('user register successfully')
                return res.data
            } else {
                console.log('error registering user')
                return res.data
            }
        } catch (error) {
            console.log('error registering user')
            // return error.res.data
            console.log(error);
        }
    },

    signin: async (user) => {
        try {

            const res = await instance.authInstance.post('/user/signin', user)
            if (res.data) {
                console.log('user authoticated successfullt')
            
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('user', JSON.stringify({
                    username: res.data.username, name: res.data.name
                }))
                return res.data
            } else {
                console.log('error authoticated user')
                return res.data
            }
        } catch (error) {
            return error.res.data
            // console.log(error)
        }
    }
}


export default authService