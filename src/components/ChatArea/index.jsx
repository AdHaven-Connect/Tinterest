import MessageArea from "@/components/MessageArea";
import InputArea from "@/components/InputArea";

import {API_BASE_URL} from "/src/constants.js"
import { useState, useEffect } from "react";


const ChatArea = ({match_id, ws}) => {

    const [chatMessages, setChatMessages] = useState([]);

    const load_chat_profile_and_messages = async () => {
        const req = await fetch(API_BASE_URL + '/chat/' + match_id + '/', {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem('token'),
                "Content-Type" : "applciation/json"
            }
        });

        if(req.ok && req.status === 200) {
            const res = await req.json();
            setChatMessages(res.messages.reverse());
        }
    }


    useEffect(() => {
        load_chat_profile_and_messages();
    }, []);

    // useEffect (() => {
    //     if (ws && ws != null) ws.onmessage = (event) => {
    //       const temp_message = JSON.parse(event.data).data;
    //       const new_message = {
    //         self_sender : temp_message.sender == localStorage.getItem("profile_id").toString().replaceAll("-", "") ? true : false,
    //         message : temp_message.message,
    //         image: temp_message.image
    //       };
    //       console.log(new_message)
    //       setChatMessages([...chatMessages, new_message]);
    //       window.scrollTo(0, document.getElementById("msg_area").scrollHeight);
    //       return;
    //     }
    // }, [ ws.onmessage ])

    if(ws && ws != null) ws.onmessage = (event) => {
        const temp_message = JSON.parse(event.data).data;
        const new_message = {
          self_sender : temp_message.sender == localStorage.getItem("profile_id").toString().replaceAll("-", "") ? true : false,
          message : temp_message.message,
          image: temp_message.image
        };
        setChatMessages([...chatMessages, new_message]);
        return;
      }

    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 bg-opacity-[0.7] rounded-2xl bg-yellow-100 h-full p-4">   
                <MessageArea messages={chatMessages}/>
                <InputArea match_id={match_id} websocket={ws}/>
            </div>
        </div>
    )
}

export default ChatArea;