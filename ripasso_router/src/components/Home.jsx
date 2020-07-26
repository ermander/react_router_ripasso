import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"

function Home() {

    useEffect( () => {
        fetchData()
    }, [] )

    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await data.json()
        const posts = response.slice(0, 10)

        setPosts(posts)
    }

  return (
    <div className="App">
        <h1>Home</h1>  
        {posts.map( post => (
            <Link to={`/${post.id}`}>
                <h4 key={post.id}>{post.title}</h4>
            </Link>
        ))}   
    </div>
  );
}

export default Home;