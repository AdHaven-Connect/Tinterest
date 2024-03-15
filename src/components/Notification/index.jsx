import {API_BASE_URL} from "/src/constants.js"
import { useEffect, useState } from "react";
const Notification = () => {

    const [notifications, setNotifications] = useState([]);

    const load_notifications = async () => {
        const req = await fetch(API_BASE_URL + "/api/notification/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json"
            }
        });
        if(req.ok && req.status === 200){
            const res = await req.json();
            setNotifications(res);
        }else{
            alert("Error loading notifications")
        }
    }

    useEffect(() => {
        load_notifications();
    }, [])


    return (

        <div className="absolute bg-yellow-100 right-[180px] rounded-md shadow-lg  overflow-scroll border h-[400px] z-20 w-[20rem]">
            <hr /><hr /><hr /><p className="font-semibold pl-2 my-2">Уведомления</p><hr /><hr /><hr />
            {notifications.map((notification, index) => 
                <div className="py-2 border-b-[1px] border-yellow-300" key={index}>
                    <p className="text-dark font-inter text-sm mx-2">
                        {notification.content}
                    </p>
                </div>
            )}
        </div>
    )

};

export default Notification;