import useGetUsers from "../hooks/useGetUsers";
import useGetUserPosts from "../hooks/useGetUserPosts";
import UserDetails from "./UserDetails";
import '../components/Directories.css'
import {useState,useEffect} from "react";
import {Routes,Route,Link,useNavigate} from "react-router-dom";
import React from "react";

const Directories = () =>{
    const [perUserPosts , setPerUserPosts] = useState([]);
    // const [clickDirectory , setClickDirectory] = useState(false);

    const[users]=useGetUsers();
    const [posts]=useGetUserPosts();
    const navigate = useNavigate();
    console.log(users)
    console.log(perUserPosts);
    // console.log(clickDirectory)

   useEffect(()=>{
    const getPostsForUser = (name,id)=>{
        const postsForThisUser = posts.filter((post)=>{
          return  post.userId === id;
        })
        return {id:id,name:name,numberOfPosts:postsForThisUser.length,isClicked:false,posts:postsForThisUser};
     }
    const getPosts = ()=>{
     const arrayWithNameAndPostsOfTheUser=[]
    users.map((user)=>{
      const obj =  getPostsForUser(user.name,user.id);
      return arrayWithNameAndPostsOfTheUser.push(obj);
     })
    setPerUserPosts(arrayWithNameAndPostsOfTheUser)
   }
   getPosts();
   },[posts,users])

   const handleDirectoryClick = (id)=>{
    console.log(id)
    const afterClickperUserPosts = perUserPosts.map((user)=>{
        if(user.id===id) {
            const status = user.isClicked;
            user.isClicked=!status;
        }
        return user;
    })
    setPerUserPosts(afterClickperUserPosts);
    navigate(`${id}`)
   }

return (

<>
 <h1>Directory</h1>
    {
     
       
        perUserPosts.map((user)=>{
            return (
  
            
                <Link to={`${user.id}`} key={user.id}>
                <div className="container" onClick={()=>handleDirectoryClick(user.id)}>
                    <h3 className="name">Name: {user.name}</h3>
                    <h3 className="posts">Posts: {user.numberOfPosts}</h3>
                </div>
                </Link>
            )
           
        })
    }
    <Routes>
        {perUserPosts.map((user)=>{
            return (
                <React.Fragment key={user.id}>
                    {user.isClicked ? <Route path={`/${user.id}`} element={<UserDetails user={user} users={users}/>} /> : ("")}
                </React.Fragment>
            )            
        })}
    </Routes>
</>
)}

export default Directories