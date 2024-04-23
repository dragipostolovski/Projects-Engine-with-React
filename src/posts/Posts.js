import { useState, useEffect } from "react";
import { Search } from "../Search";
import { Post } from "./Post";


const API_URL = "https://projectsengine.com/wp-json/wp/v2/posts/";

export function Posts() {
    const [ find, setFind ] = useState("");
    const [ posts, setPosts ] = useState([]);

    const getPosts = async () => {
        try {
            const res = await fetch(API_URL);
            const response = await res.json();

            setPosts(response);

            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }


    useEffect( () => {
        getPosts()
    })

    return (
        <div className="c-grid">
            <div className="c-search container">
                <Search find={find} setFind={setFind} label="Find post" />
            </div>

            <div className="c-grid__inner container">
                {posts.filter( (post) => 
                    post.title.rendered.toLowerCase().includes(find.toLowerCase())
                ).map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}