import Header from "../../components/Header"
import Aside from "../../components/Aside"
import PostCard from "../../components/PostCard"
import TopPinBar from "../../components/TopPinBar"
import RightSide from "../../components/RighMenu";
import { useState, useEffect } from "react";

// import API_BASE_URL from "../../constants";

const Home = () => {

    const [feedPosts, setFeedPosts] = useState([]);
     

    useEffect(() => {
        load_user_feed_posts();
    }, [])


    const load_user_feed_posts = async () => {
        const req = await fetch("http://api.tinterest.ru" + "/feed/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
                "redirect" : "follow"
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setFeedPosts(res);
            console.log(feedPosts)
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
                <PostCard/>
                <PostCard/>
            </main>

            <RightSide/>
        </>
    )
}

export default Home;