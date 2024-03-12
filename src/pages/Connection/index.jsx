import Header from "@/components/Header"
import Aside from "@/components/Aside"
import RightSide from "@/components/RighMenu";

import { useState } from "react";

import Following from "@/components/Following";
import Follower from "@/components/Follower";




const Connection = () => {

    const [tabName, setTabName] = useState('following');

    return (
        <>
            <Header/>
            <Aside/>
            <main className="container mt-6">
                <hr className="mt-7"/> 

                <section id="categories" className="flex space-x-8 justify-center my-5">
                    <section>
                        <button onClick={() => setTabName('following')} className="w-30 h-9 px-2 rounded-lg"
                            style={(tabName === 'following' ? {color : 'red'} : {color : "black"})}
                        >
                            <span style={{fontSize : '22px'}} className="font-inter text-xl">Following</span>
                        </button>
                    </section>

                    <section>
                        <button onClick={() => setTabName('follower')} className="w-30 h-9 px-2 rounded-lg"
                            style={(tabName === 'following' ? {color : 'black'} : {color : "red"})}
                        >
                            <span style={{fontSize : '22px'}} className="font-inter text-xl">Followers</span>
                        </button>
                    </section>
                </section>
                {
                    (tabName === 'following' ? <Following/> : <Follower/>)
                }


            </main>

            <RightSide/>
        </>
    )
}

export default Connection;