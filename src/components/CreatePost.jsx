import { useDispatch, useSelector } from 'react-redux'
import postService from '../services/post'
import React, { useState } from 'react'



function CreatePost() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handlePosts = (event) => {
        event.preventDefault();

        const content = {
            title,
            description
        }
        console.log(content)

        postService.createPost()
            .then(posts => {
                if (posts) {
                    console.log(posts)

                    const postObject = {
                        title: posts.title,
                        description: posts.description
                    }

                    dispatch({
                        type: 'SET_TITLE',
                        payload: postObject
                    })
                } else {
                    console.log('post not created')
                }
            })
    }


   const post = useSelector(state => state.posts)

  return (
      <div>
          {
              <div>
               
                  <h3>create new posts</h3>

                  <form onSubmit={handlePosts}>
                      <div>
                          <input
                              type='title'
                              placeholder='title...'
                              value={title}
                              onChange={(event) => setTitle(event.target.value)}
                          />
                      </div>
                      <div>
                          <input
                              type='description'
                              placeholder='description...'
                              value={description}
                              onChange={(event) => setDescription(event.target.value)}
                          />
                      </div>
                      <button type='submit'>create posts</button>
                  </form>
            </div>
          }
    </div>
  )
}

export default CreatePost