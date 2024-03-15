import { useState, useEffect } from "react";
import {API_BASE_URL} from '/src/constants.js';
import ChatContact from "@/components/ChatContact";

const ContactArea = ({select_chat_profile_area}) => {

    const [chatProfiles, setChatProfiles] = useState([]);

    const load_chat_profiles = async () => {
        const req = await fetch(API_BASE_URL + "/chat/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setChatProfiles(res);
        }else{
            alert("ERROR!!!");
        }

    }

    useEffect(() => {
        load_chat_profiles();
    }, [])


    return (
        <div className="flex flex-col pb-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 mt-2">
            <div className="flex flex-col mt-8">

                <div className="flex flex-row items-center justify-between text-xs">
                    <span className="font-bold">Разговоры</span>
                </div>

                <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    { chatProfiles.map((chat_profile, index) => <ChatContact key={index} select_chat_profile_area={select_chat_profile_area} chat_profile={chat_profile}/>) } 
                </div>

            </div>
        </div>
    )
}


export default ContactArea;