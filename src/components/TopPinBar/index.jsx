import TopPin from "../TopPin";
import { useState, useEffect } from "react";

import { API_BASE_URL } from "/src/constants";

const TopPinBar = () => {
    
    const [followedTopics, setFollowedTopics] = useState([]);
     



    const load_user_followd_topics = async () => {
        const req = await fetch(API_BASE_URL + "/api/topics/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setFollowedTopics(res);
        }else{
            alert("ERROR!!!");
        }

    }

    useEffect(() => {
        load_user_followd_topics();
    }, [])



    return (
        <section id="categories" className="flex space-x-5 justify-center" style={{overflow : 'scroll', scrollbarColor : 'yellow' , paddingBottom : '15px', overflowY : 'hidden'}}>
            { followedTopics.map((topic, index) => <TopPin key={index} topic={topic.topic}/>) }
        </section>
    )
}

export default TopPinBar;