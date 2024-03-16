import Header from "@/components/Header";
import Aside from "@/components/Aside";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "/src/constants.js";
import { Link } from "react-router-dom";

const Account = () => {


    const [showInterestModal, setShowInterestModal] = useState(false);
    const [showSkillModal, setShowSkillModal] = useState(false);
    const [showHobbyModal, setShowHobbyModal] = useState(false);
    const [showProfileModal, setShowProfilemodal] = useState(false);


    const [profileData, setProfileData] = useState(null);

    const [hobbies, setHobbies] = useState([]);
    const [skills, setSkills] = useState([]);


    const [availableSkills, setAvailableSkills] = useState([]);
    const [availableHobbies, setAvailableHobbies] = useState([]);
    const [availableDepartments, setAvailableDepartments] = useState([]);
    const [availableTitles, setAvailableTitles] = useState([]);


    const set_available_fields = async () => {
        const sreq = await fetch(API_BASE_URL + "/api/profile/skills/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json" 
            }
        });
        const hreq = await fetch(API_BASE_URL + "/api/profile/hobbies/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json" 
            }
        });
        const dreq = await fetch(API_BASE_URL + "/api/profile/departments/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json" 
            }
        });

        const treq = await fetch(API_BASE_URL + "/api/profile/titles/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json" 
            }
        });


        if(sreq.ok && sreq.status === 200){
            const sres = await sreq.json();
            setAvailableSkills(sres);
        }

        if(hreq.ok && hreq.status === 200){
            const hres = await hreq.json();
            setAvailableHobbies(hres);
        }

        if(dreq.ok && dreq.status === 200){
            const dres = await dreq.json();
            setAvailableDepartments(dres);
        }

        if(treq.ok && treq.status === 200){
            const sres = await treq.json();
            setAvailableTitles(sres);
        }

    }

    const [isLoading, setIsLoading] = useState(false);

    const load_profile_data = async () => {
        const req = await fetch(API_BASE_URL + "/account/profile/", {
            method: 'GET',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
                "Content-Type": "application/json",
            }
        });

        if (req.ok && req.status === 200) {
            const res = await req.json();
            setProfileData(res);
        } else {
            alert("ERROR!!!");
        }

    }



    const update_profile_account = async () => {

        setIsLoading(true);
        const name = document.getElementById("name").value;
        const city = document.getElementById("city").value;
        const gender = document.getElementById("gender").value;
        const age = document.getElementById("age").value;
        const birthday = document.getElementById("birthday").value;
        const yoe = document.getElementById("yoe").value;

        const req = await fetch(API_BASE_URL + "/account/profile/", {
            method: 'POST',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "city": city,
                "gender": gender,
                "age": age,
                "birthday": birthday,
                "yoe": yoe,
            })
        });

        if (req.ok && req.status === 200) {
            load_profile_data();
            alert("Успешно обновлено");
        } else {
            alert("ERROR!!");
        }
        setIsLoading(false);
    }


    const update_profile_interest = async () => {

        setIsLoading(true);

        const fav_film = document.getElementById("fav_film").value;
        const fav_song = document.getElementById("fav_song").value;
        const fav_singer = document.getElementById("fav_singer").value;
        const fav_book = document.getElementById("fav_book").value;
        const fav_writer = document.getElementById("fav_writer").value;
        const fav_place = document.getElementById("fav_place").value;
        const fav_food = document.getElementById("fav_food").value;
        const fav_actor = document.getElementById("fav_actor").value;


        const req = await fetch(API_BASE_URL + "/account/interest/", {
            method: 'PUT',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "fav_film": fav_film,
                "fav_song": fav_song,
                "fav_singer": fav_singer,
                "fav_book": fav_book,
                "fav_writer": fav_writer,
                "fav_place": fav_place,
                "fav_food": fav_food,
                "fav_actor": fav_actor
            })
        });

        if (req.ok && req.status === 200) {
            load_profile_data();
            alert("Успешно обновлено");
        } else {
            alert("ERROR!!");
        }

        setIsLoading(false);
    }


    const update_profile_skills = async () => {
        setIsLoading(true);
        const req = await fetch(API_BASE_URL + "/account/profile/", {
            method: 'POST',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "skills": skills
            })
        });

        if (req.ok && req.status === 200) {
            load_profile_data();
            alert("Успешно обновлено");
        } else {
            alert("ERROR!!");
        }
        setIsLoading(false);
    }


    const update_profile_hobbies = async () => {
        setIsLoading(true);
        const req = await fetch(API_BASE_URL + "/account/profile/", {
            method: 'POST',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "hobbies": hobbies
            })
        });

        if (req.ok && req.status === 200) {
            load_profile_data();
            alert("Успешно обновлено");
        } else {
            alert("ERROR!!");
        }
        setIsLoading(false);
    }

    const update_profile_organization = async () => {
        setIsLoading(true)
        const title_id = document.getElementById("title_id").value;
        const department_id = document.getElementById("department_id").value;

        const req = await fetch(API_BASE_URL + "/account/organization/", {
            method: 'POST',
            headers: {
                "Authorization": "Token " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title_id": title_id,
                "department_id": department_id
            })
        });

        if (req.ok && req.status === 200) {
            load_profile_data();
            alert("Успешно обновлено");
        } else {
            alert("ERROR!!");
        }
        setIsLoading(false);
    }


    useEffect(() => {
        load_profile_data();
        set_available_fields();
    }, [])


    const hobby_clicked = (hobby_id) => {
        if(hobbies.indexOf(hobby_id) == -1){
            setHobbies([...hobbies, hobby_id]);
        }else{
            const arr_index = hobbies.indexOf(hobby_id);
            const newH = hobbies;
            newH.splice(arr_index, 1);
            setHobbies(newH);
        }
    }

    const skill_clicked = (skill_id) => {
        if(hobbies.indexOf(skill_id) == -1){
            setSkills([...skills, skill_id]);
        }else{i
            const arr_index = skills.indexOf(skill_id);
            const newS = skills;
            newS.splice(arr_index, 2);
            setSkills(newS);
        }
    }

    return (
        <>
            <Header />
            <Aside />
            <main className="container mt-6">
                <div className=" mx-auto my-5 p-5">
                    {(profileData) &&
                        <div className="flex wrap md:-mx-2 ">
                            <div className="w-4/12 md:mx-2">
                                <div className="bg-white p-3 border-t-4 border-yellow-300">
                                    <div className="image overflow-hidden">
                                        <img className="w-64 mx-auto"
                                            src={profileData.profile_picture}
                                            alt="" />
                                    </div>
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{profileData.name}</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6">{profileData.title && profileData.title.position_title}, {profileData.department && profileData.department.department_name}</h3>
                                    <ul
                                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">

                                        <li className="flex items-center py-3">
                                            <button onClick={() => setShowProfilemodal(true)} className="bg-yellow-300 px-3 py-1 rounded-3xl w-full font-semibold text-dark">Обновить профиль</button>
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
                                        <span className="font-semibold ml-2 text-xl hover:text-yellow-600 text-yellow-700 cursor-pointer" onClick={() => setShowHobbyModal(true)}>edit</span>
                                    </div>
                                    <div className="flex flex-row flex-wrap">
                                        {profileData.hobbies.map((hobby, index) =>
                                            <div className="text-center mx-1 flex justify-center items-center border-[2px] px-1 my-1 border-gray-800 rounded-3xl" key={index}>
                                                <img className="h-5 w-5 mr-2 inline rounded-full"
                                                    src={hobby.hobby_icon}
                                                    alt="" />
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
                                                <span className="font-semibold ml-2 text-xl hover:text-yellow-600 text-yellow-700 cursor-pointer" onClick={() => setShowInterestModal(true)}>edit</span>
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
                                                <span className="font-semibold ml-2 text-xl hover:text-yellow-600 text-yellow-700 cursor-pointer" onClick={() => setShowSkillModal(true)}>edit</span>
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

            {showProfileModal &&
                <dialog id="dialog_for_message" open
                    className="space-y-4 flex top-8 flex-col self-center justify-between p-5 rounded-2xl border w-[500px] border-yellow-300"
                >
                    <input id="name" name="name" type="text" placeholder="Ф.И.О."
                        className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                    <select id="gender" name="gender"
                        className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1">
                            <option>Выберите пол</option>
                            <option value="Мужской">Мужской</option>
                            <option value="Женский">Женский</option>
                    </select>
                    
                    <input id="age" name="age" type="number" placeholder="Возраст"
                        className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />
                    
                    <input id="birthday" name="birthday" type="date" placeholder="День рождения"
                        className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                    <input id="city" name="city" type="text" placeholder="Город"
                        className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                    <input id="yoe" name="yoe" type="number" placeholder="Опыт"
                        className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />
                    
                    
                    <button onClick={() => update_profile_account()} type="button"
                        className="bg-yellow-300 text-dark font-semibold rounded-3xl px-6 py-2"
                    >{isLoading ? 'Загрузка...' : 'Обновлять'}</button>

                    <button className="bg-gray-300 text-dark font-semibold rounded-3xl px-6 py-2" type="button" onClick={() => setShowProfilemodal(false)}>Close</button>
                </dialog>
            }

            {showSkillModal &&
                <dialog id="dialog_for_message" open
                    className="space-y-4 flex top-8 flex-col self-center justify-between p-5 rounded-2xl border w-[500px] border-yellow-300"
                >
                <div className="flex flex-row flex-wrap">
                    {availableSkills.map((skill, index) => {
                        return(
                            <div onClick={() => skill_clicked(skill.id)} style={{backgroundColor : (skills.indexOf(skill.id) == -1) ? "#d1d5db" : "yellow"}} className=" text-center cursor-pointer mx-1 flex justify-center items-center border-[2px] px-2 my-1 border-gray-800 rounded-3xl" key={index}>
                                <span className="text-main-color">{skill.skill_name}</span>
                            </div>
                        )
                    })}

                </div>
                <button onClick={() => update_profile_skills()} type="button"
                    className="bg-yellow-300 text-dark font-semibold rounded-3xl px-6 py-2"
                >{isLoading ? 'Загрузка...' : 'Обновлять'}</button>

                <button className="bg-gray-300 text-dark font-semibold rounded-3xl px-6 py-2" type="button" onClick={() => setShowSkillModal(false)}>Close</button>
            </dialog>
            }


            {showHobbyModal &&
                <dialog id="dialog_for_message" open
                    className="space-y-4 flex top-8 flex-col self-center justify-between p-5 rounded-2xl border w-[500px] border-yellow-300"
                >
                    <div className="flex flex-row flex-wrap">
                        {availableHobbies.map((hobby, index) => {
                            return(
                                <div onClick={() => hobby_clicked(hobby.id)} style={{backgroundColor : (hobbies.indexOf(hobby.id) == -1) ? "#d1d5db" : "yellow"}} className=" text-center cursor-pointer mx-1 flex justify-center items-center border-[2px] px-2 my-1 border-gray-800 rounded-3xl" key={index}>
                                    <img className="h-5 w-5 mr-2 inline rounded-full"
                                        src={hobby.hobby_icon}
                                        alt="" />
                                    <span className="text-main-color">{hobby.hobby_name}</span>
                                </div>
                            )
                        })}

                    </div>
                    <button onClick={() => update_profile_hobbies()} type="button"
                        className="bg-yellow-300 text-dark font-semibold rounded-3xl px-6 py-2"
                    >{isLoading ? 'Загрузка...' : 'Обновлять'}</button>

                    <button className="bg-gray-300 text-dark font-semibold rounded-3xl px-6 py-2" type="button" onClick={() => setShowHobbyModal(false)}>Close</button>
                </dialog>
            }
            {showInterestModal &&
                <dialog id="dialog_for_message" open
                className="space-y-4 flex top-8 flex-col self-center justify-between p-5 rounded-2xl border w-[500px] border-yellow-300"
            >
                <input id="fav_film" name="fav_film" type="text" placeholder="Фильмы, которые тебе нравятся"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_song" name="fav_song" type="text" placeholder="Песни, которые тебе нравятся"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_singer" name="fav_singer" type="text" placeholder="Группы, которые вам нравятся"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_book" name="fav_book" type="text" placeholder="Книги, которые вам нравятся"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_writer" name="fav_writer" type="text" placeholder="Писатель, который тебе нравится"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_place" name="fav_place" type="text" placeholder="Места, которые вам нравятся"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_food" name="fav_food" type="text" placeholder="Еда, которая вам нравится"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />

                <input id="fav_actor" name="fav_actor" type="text" placeholder="Актер, который тебе нравится"
                    className="bg-primary outline bg-opacity-[.04] p-2 h-[40px] outline-yellow-300 outline-1" />
                
                <button onClick={() => update_profile_interest()} type="button"
                    className="bg-yellow-300 text-dark font-semibold rounded-3xl px-6 py-2"
                >{isLoading ? 'Загрузка...' : 'Обновлять'}</button>

                <button className="bg-gray-300 text-dark font-semibold rounded-3xl px-6 py-2" type="button" onClick={() => setShowInterestModal(false)}>Close</button>
                </dialog>
            }

        </>
    )

}

export default Account;