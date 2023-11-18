import {useState,useEffect} from "react";
import { USER_POSTS_URL } from "../constants";

const useGetUserPosts = ()=>{
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const getUserPosts = ()=>{
            fetch(USER_POSTS_URL)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setPosts(data);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        getUserPosts();
    },[])
    return [posts,setPosts];
}

export default useGetUserPosts;