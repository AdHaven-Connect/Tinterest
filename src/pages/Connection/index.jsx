import Header from "@/components/Header"
import Aside from "@/components/Aside"
import RightSide from "@/components/RighMenu";

import { useState, useEffect } from "react";

import Following from "@/components/Following";
import Follower from "@/components/Follower";

import {API_BASE_URL} from '/src/constants.js';


const Connection = () => {

    const [tabName, setTabName] = useState('following');
    const [userConnections, setUserConnections] = useState(null);

    const load_user_connections = async () => {
        const req = await fetch(API_BASE_URL + "/api/connections/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setUserConnections(res);
        }else{
            alert("ERROR!!!");
        }

    }

    useEffect(() => {
        load_user_connections();
    }, [])

    return (
        <>
            <Header/>
            <Aside/>
            <main className="container mt-6">
                <hr className="mt-7"/> 

                <section id="categories" className="flex space-x-8 justify-center my-5">
                    <section>
                        <button onClick={() => setTabName('following')} className="w-30 h-9 px-2 rounded-lg"
                            style={(tabName === 'following' ? {color : 'rgb(255, 58, 98)'} : {color : "black"})}
                        >
                            <span style={{fontSize : '22px'}} className="font-inter text-xl">Following</span>
                        </button>
                    </section>

                    <section>
                        <button onClick={() => setTabName('follower')} className="w-30 h-9 px-2 rounded-lg"
                            style={(tabName === 'following' ? {color : 'black'} : {color : "rgb(255, 58, 98)"})}
                        >
                            <span style={{fontSize : '22px'}} className="font-inter text-xl">Followers</span>
                        </button>
                    </section>
                </section>
                <div className='flex flex-col items-center justify-center min-h-screen p-16 bg-slate-100'>
                    { (userConnections) && (tabName === 'following' ? <Following followings={userConnections.following} /> : <Follower followers={userConnections.followers}/>)}
                </div>
            </main>


            

            <RightSide/>
        </>
    )
}

export default Connection;