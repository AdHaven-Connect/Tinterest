import Header from "../../components/Header"
import Aside from "../../components/Aside"
import PostCard from "../../components/PostCard"
import TopPinBar from "../../components/TopPinBar"
import RightSide from "../../components/RighMenu";
import { useState, useEffect } from "react";

import {API_BASE_URL} from "/src/constants.js";

const Home = () => {

    const [feedPosts, setFeedPosts] = useState([]);
     

    useEffect(() => {

        if(localStorage.getItem('token') == undefined || localStorage.getItem("profile_id") == undefined){
            window.location.href = "/login";
            return;
        }


        if(localStorage.getItem('token') == "" || localStorage.getItem("profile_id") == ""){
            window.location.href = "/login";
            return;
        }

        if(localStorage.getItem('token') == null || localStorage.getItem("profile_id") == null){
            window.location.href = "/login";
            return;
        }

        load_user_feed_posts();
    }, [])


    const load_user_feed_posts = async () => {
        const req = await fetch(API_BASE_URL + "/api/feed/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setFeedPosts(res);
        }else{
            alert("ERROR!!!");
        }

    }

    return (
        <>
            <Header/>
            <Aside/>
            <main className="container mt-6">
                <TopPinBar/>
                <hr className="mt-7"/>
                
                {feedPosts.map((post, index) => <PostCard key={index} post={post.post} />)}
            </main>

            <RightSide/>
        </>
    )
}

export default Home;