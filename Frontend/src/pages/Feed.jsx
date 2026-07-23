import React,{useState, useEffect} from 'react'
import axios from "axios";

function Feed() {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image: "https://images.unsplash.com/photo-1780323241787-ca13a4ed23a0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
            caption: "Beautiful Scenery",
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((res) => {
            setPosts(res.data.posts)
        })
    },[])

    return (
    <section className="feed-section" >
        {
            posts.length > 0 ? (
                posts.map( (post) => (
                    <div key={post._id} className='post-card' >
                        <img src={post.image} alt={post.caption} />
                        <p> {post.caption} </p>
                    </div>
                ))

            ) : (
                <h1> No posts Available</h1>
            )
        }
    </section>
  )
}

export default Feed