import ChatArea from "@/components/ChatArea";
import ContactArea from "@/components/ContactArea";
import ChatProfileArea from "@/components/ChatProfileArea";

import {API_BASE_URL, CHAT_WS_URL} from "/src/constants.js"
import { useState, useEffect } from "react";

const Messenger = () => {

    const [selectedChat, setSelectedChat] = useState('');
    const [webSocketConnection, setWebSocketConnection] = useState(null)

    const select_chat_profile_area = (match_id) => {
        setSelectedChat(match_id); // this is the match id basically
    }


    useEffect(() => {
            if(selectedChat !== ''){const WebSocketURL = CHAT_WS_URL + "/ws/chat/" + selectedChat + "/?token=" + localStorage.getItem('token');
            const webSocket = new WebSocket(WebSocketURL);
            setWebSocketConnection(webSocket);}
    }, [selectedChat]);

    return (
        <div className="flex h-[90%] antialiased text-gray-800 fixed bg-gray-100 rounded pl-8 border-l-[6px] border-yellow-200"
        >
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <ContactArea select_chat_profile_area={select_chat_profile_area} />
                {
                    (selectedChat !== '') ? <>
                        <ChatArea ws={webSocketConnection} match_id={selectedChat}/>
                        <ChatProfileArea match_id={selectedChat}/>
                    </> : 
                    <>
                        <div className="flex flex-col flex-auto h-full p-6">
                            <div className="flex flex-col flex-auto flex-shrink-0 bg-opacity-[0.7] rounded-2xl bg-yellow-100 h-full p-4">
                                <div className="flex flex-col flex-auto h-full p-6">
                                    <div className="flex flex-col flex-auto flex-shrink-0 bg-opacity-[0.7] rounded-2xl bg-yellow-100 h-full p-4">   
                                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                                            <div className="flex flex-col h-full">
                                                <div className="grid grid-cols-12 gap-y-2">
                                                    Выберите чат, чтобы начать общение
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pb-8 pl-1 pr-2 w-80 bg-white flex-shrink-0 mt-2">
                            <div className="flex flex-col mt-8"> </div>
                        </div>
                    </>  
                }

            </div>
        </div>
    )
}


export default Messenger;