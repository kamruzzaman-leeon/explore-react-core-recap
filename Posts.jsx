import { useEffect, useState } from "react"
import Post from "./post";

export default function Posts(){
const [posts, setPosts]=useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>setPosts(data))
},[])

return(
    <div>
        <h3>Posts: {posts.length}</h3>
        {
            posts.map(po => <Post post={po}></Post>)
        }
    </div>
)
}
/**
 * 1. Create a state to store the data
 * 2. create use effect with no dependencies
 * 3. use fetch to load data
 * 4. 
 */