import React, {useState, useEffect} from 'react';

function Post(props) {

    useEffect( () => {
        fetchData()
    }, [] )

    const [post, setPost] = useState([])

    const fetchData = async () => {
        const id = props.match.params.id
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await data.json()

        setPost(post)
    }

  return (
    <div className="App">
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>       
    </div>
  );
}

export default Post;