import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Topic from "@/components/Topic";

import { useState, useEffect } from "react";
import {API_BASE_URL} from "/src/constants.js";

const Topics = () => {

    const [topics, setTopics] = useState([]);

    const load_all_topics = async () => {
        const req = await fetch(API_BASE_URL + "/api/topics/all/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setTopics(res);
        }else{
            alert("ERROR!!!");
        }

    }
    useEffect(() => {load_all_topics()}, []);
    
    return (
        <>
            <Header />
            <Aside />
            <main className="container mt-6">
                <div className="grid grid-cols-12 max-w-screen-xl mx-auto mt-6 ml-10">
                    <div className="col-span-6 max-w-xl place-self-center flex flex-col space-y-5 self-center justify-center">
                        {/* <div className="w-full flex flex-col space-y-8"> */}
                            {topics.map((topic, index) => (
                                <Topic key={index} topic={topic}/>
                            ))}
                        {/* </div> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Topics;