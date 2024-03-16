import Header from "@/components/Header"
import Aside from "@/components/Aside"

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {API_BASE_URL} from "/src/constants.js";

const Profile = () => {


    const {profile_id} = useParams();

    const [profileData, setProfileData] = useState(null);
    const [bText, setBText] = useState("Следовать");

    const load_profile_data = async () => {
        const req = await fetch(API_BASE_URL + "/api/people/" + profile_id + "/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setProfileData(res);
        }else{
            alert("ERROR!!!");
        }

    }


    const start_a_new_chat = async () => {
        const req = await fetch(API_BASE_URL + "/chat/new/" + profile_id + "/", {
            method : 'POST',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            const match_id = res.chat_id;
            window.location.href = "/chat";
        }else{
            alert("ERROR!!!");
        }

    }


    const follow_unfollow_person = async () => {
        const req = await fetch(API_BASE_URL + "/api/follow/" + profile_id + "/", {
            method : 'POST',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            if(res.detail === "added") {
                setBText("Отписаться");
            }else{
                setBText("Следовать");
            }
        }else{
            alert("ERROR!!!");
        }

    }





    useEffect(() => {
        load_profile_data();
    }, [])


    return (
        <>
            <Header />
            <Aside />
            <main className="container mt-6">
                <div className=" mx-auto my-5 p-5">
                    {   (profileData) &&
                        <div className="flex wrap md:-mx-2 ">
                            <div className="w-4/12 md:mx-2">
                                <div className="bg-white p-3 border-t-4 border-yellow-300">
                                    <div className="image overflow-hidden">
                                        <img className="w-64 mx-auto"
                                            src={profileData.profile_picture}
                                            alt=""/>
                                    </div>
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{profileData.name}</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6">{profileData.title.position_title}, {profileData.department.department_name}</h3>
                                    <ul
                                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">

                                        <li className="flex items-center py-3">
                                            <button onClick={() => start_a_new_chat()} className="bg-blue-600 px-3 py-1 rounded-3xl w-full font-semibold text-white">Сообщение</button>
                                        </li>
                                        <li className="flex items-center py-3">
                                            <button onClick={() => follow_unfollow_person()} className="bg-yellow-300 px-3 py-1 rounded-3xl w-full font-semibold text-dark">{bText}</button>
                                        </li>
                                        <li className="flex items-center py-3">
                                            <span>Опыт</span>
                                            <span className="ml-auto"><span
                                                    className="py-1 px-2 rounded text-dark text-sm">{profileData.yoe} год</span></span>
                                        </li>
                                        <li className="flex items-center py-3">
                                            <span>День рождения</span>
                                            <span className="ml-auto">{profileData.birthday}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="my-4"></div>
                                <div className="bg-white p-3 hover:shadow">
                                    <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                        <span className="text-gray-600">
                                            <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </span>
                                        <span>Хобби</span>
                                    </div>
                                    <div className="flex flex-row flex-wrap">
                                        { profileData.hobbies.map((hobby, index) => 
                                            <div className="text-center mx-1 flex justify-center items-center border-[2px] px-1 my-1 border-gray-800 rounded-3xl" key={index}>
                                                <img className="h-5 w-5 mr-2 inline rounded-full"
                                                    src={hobby.hobby_icon}
                                                    alt=""/>
                                                <span className="text-main-color">{hobby.hobby_name}</span>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-8/12 mx-2 h-64">
                                <div className="bg-white p-3 shadow-sm rounded-sm">
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">О нем/ней</span>
                                    </div>
                                    <div className="text-gray-700">
                                        <div className="grid md:grid-cols-2 text-sm">
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Пол</div>
                                                <div className="px-4 py-2">{profileData.gender}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Город</div>
                                                <div className="px-4 py-2">{profileData.city}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Возраст</div>
                                                <div className="px-4 py-2">{profileData.age}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-4"></div>

                                <div className="bg-white p-3 shadow-sm rounded-sm">

                                    <div className="grid grid-cols-2">
                                        <div>
                                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span clas="text-green-500">
                                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </span>
                                                <span className="tracking-wide">Интересы</span>
                                            </div>
                                            <ul className="list-inside space-y-2">

                                                {
                                                    (profileData.interest.fav_film) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_film}</div>
                                                        <div className="text-gray-500 text-xs">Фильмы</div>
                                                    </li>
                                                }

                                                {
                                                    (profileData.interest.fav_song) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_song}</div>
                                                        <div className="text-gray-500 text-xs">Песни</div>
                                                    </li>
                                                }

                                                {
                                                    (profileData.interest.fav_singer) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_singer}</div>
                                                        <div className="text-gray-500 text-xs">Певцы, Группы</div>
                                                    </li>
                                                }
                                                {
                                                    (profileData.interest.fav_book) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_book}</div>
                                                        <div className="text-gray-500 text-xs">Книги</div>
                                                    </li>
                                                }
                                                {
                                                    (profileData.interest.fav_writer) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_writer}</div>
                                                        <div className="text-gray-500 text-xs">Писатели</div>
                                                    </li>
                                                }
                                                {
                                                    (profileData.interest.fav_place) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_place}</div>
                                                        <div className="text-gray-500 text-xs">Места</div>
                                                    </li>
                                                }
                                                {
                                                    (profileData.interest.fav_food) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_food}</div>
                                                        <div className="text-gray-500 text-xs">Продукты питания</div>
                                                    </li>
                                                }
                                                {
                                                    (profileData.interest.fav_actor) && 
                                                    <li>
                                                        <div className="text-teal-600">{profileData.interest.fav_actor}</div>
                                                        <div className="text-gray-500 text-xs">Актеры</div>
                                                    </li>
                                                }
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span clas="text-green-500">
                                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path fill="#fff"
                                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                    </svg>
                                                </span>
                                                <span className="tracking-wide">Навыки</span>
                                            </div>
                                            <ul className="list-inside space-y-2">

                                                {
                                                    profileData.skills.map((skill, index) =>
                                                        <li key={index}>
                                                            <div className="text-yellow-700">{skill.skill_name}</div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </main>
        </>
    )
}

export default Profile;