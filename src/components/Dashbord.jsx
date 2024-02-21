import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import userService from '../services/user'
import CreatePost from './CreatePost';
import getPost from '../services/getPost';
// import createPost from '../services/createPost';
// import getUser from '../services/user'

function Dashbord() {
  const user = useSelector(state => state.user)
  const posts = useSelector(state => state.posts)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [viewpost, setViewpost] = useState([])
  // console.log(viewpost)

  useEffect(() => {

    // const userData = sessionStorage.getItem('user')
    userService.getUser()
      .then(user => {
        console.log(user)

        const userObject = {
          username: user.username,
          name: user.name
        }

        dispatch({
          type: 'SET_USER',
          payload: userObject
        })
      })


    // createPost.getPost()
    //   .then(posts => {
    //     console.log(posts)

    //     dispatch({
    //       type: 'SET_POSTS',
    //       payload: posts
    //     })
    //   })

  }, [])

  useEffect(() => {
    getPost()
      .then(posts => {
        // console.log(posts)
        setViewpost(posts)
      })
  }, [])


  // console.log(user)

  const handleLogout = () => {
    sessionStorage.removeItem('user')

    dispatch({
      type: 'UNSET_USER'
    })

    sessionStorage.removeItem('token')

    navigate('/signin')
  }

  return (
    <div>
      {
        <div>
          <h1>welcome to the application</h1>
          <p>user has signedin! <button onClick={handleLogout}>logout</button></p>
          <h3>feed your post</h3>
          <ul>
            {
              // posts.posts && posts.posts.map(post => {
              //   return <li key={post._id}>{post.title}</li>
              // })
              viewpost && viewpost.map((post) => {
                console.log(post);
              })
            }
          </ul>

          <CreatePost />
        </div>
      }
    </div>

  )
}

export default Dashbord