import { useState } from "react";
import {API_BASE_URL} from "/src/constants.js";



const Topic = ({topic}) => {

    const [btnText, setBtnText] = useState("Join");

    const join_a_topic = async (topic_id) => {
        const req = await fetch(API_BASE_URL + "/topics/join/" + topic_id + "/" , {
            method : "POST",
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();

            if(res.detail == "added") {
                setBtnText("Leave");
            }else{
                setBtnText("Join");
            }
        }
    }


    return (
        <section className="mx-4">
            <div className=" font-inter text-xl font-semibold">{topic.topic_name}</div>
            <p className="mt-4 font-inter text-base w-[486px]">{topic.about}</p>
            <section className="flex justify-between mt-5">
                <div className="flex items-center">
                    <img src={topic.topic_photo} className="w-6 h-6 rounded-full mr-2" />

                </div>
                <section className="flex space-x-3">
                    <button className="bg-yellow-300 text-white px-2 py-1 font-semibold rounded" onClick={() => join_a_topic(topic.id)}>+ {btnText}</button>
                </section>
            </section>
        </section>
    )
}

export default Topic;