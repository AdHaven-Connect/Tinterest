import Header from "@/components/Header"
import Aside from "@/components/Aside"
import PeopleCard from "@/components/PeopleCard";

import { useState, useEffect } from "react";
import {API_BASE_URL} from "/src/constants.js";


const People = () => {
    const [people, setPeople] = useState([]);

    const load_people_recommendation = async () => {
        const req = await fetch(API_BASE_URL + "/api/recommend/people/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setPeople(res.recommendations);
        }else{
            alert("ERROR!!!");
        }

    }
    useEffect(() => {load_people_recommendation()}, []);
    
    return (
        <>
            <Header />
            <Aside />
            <main className="container mt-6">
                <div className="grid grid-cols-12 max-w-screen-xl mx-auto mt-6 ml-12">
                    <div className="col-span-6 max-w-xl place-self-center flex flex-col space-y-5 self-center justify-center">
                            {people.map((person, index) => (
                                <PeopleCard key={index} person={person}/>
                            ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default People;