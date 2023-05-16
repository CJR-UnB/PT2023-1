import { post } from './post.js'

export const feed = (rootElement = document.querySelector(".feed")) => {
  var state = {
    posts: []
  }

  let setPosts = (postList) => {
    state.posts = postList
    render()
  }

  let render = () => {
    while(rootElement.firstChild)
      rootElement.removeChild(rootElement.lastChild)

    for(let i = state.posts.length - 1; i >= 0; i--) {
      let newPost = post(state.posts[i], state.posts[i].user) 

      rootElement.appendChild(newPost)
    }
  }

  return { 
    render,
    setPosts
  }
}
