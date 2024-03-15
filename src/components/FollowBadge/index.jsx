import {API_BASE_URL} from "/src/constants.js";
import { useState } from "react";

const FollowBadge = ({profile, button_text}) => {


    const [buttonText, setButtonText] = useState((button_text === "U") ? "Unfollow" : "Follow");

    const followUnfollowRequest = async (profile_id) => {
        const req = await fetch(API_BASE_URL + "/api/follow/" + profile_id + "/" , {
            method : "POST",
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();

            if(res.detail == "added") {
                setButtonText("Unfollow");
            }else{
                setButtonText("Follow");
            }

        }
    }


    return (
        <div className="user-row bg-white rounded-xl shadow-xl flex flex items-center justify-center cursor-pointer my-1 p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user items-center justify-center flex space-x-3 flex-row sm:flex-row sm:text-left w-8/12">
                <div className="avatar-content items-center justify-center mb-2.5 sm:mb-0 sm:mr-2.5">
                    <img className="avatar w-20 h-20 rounded-full" src={
                            (button_text === "U") ? "https://cdn.tinterest.ru/" + profile.following__profile_picture : "https://cdn.tinterest.ru/" + profile.follower__profile_picture
                        } />
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium no-underline">
                        {
                            (button_text === "U") ? profile.following__name : profile.follower__name
                        } 
                    </a>
                    <div className="skills flex flex-col">
                        <span className="subtitle text-slate-500">
                            {
                                (button_text === "U") ? profile.following__title__position_title : profile.follower__title__position_title
                            } 
                        </span>
                        <span className="subtitle text-slate-500">
                            {
                                (button_text === "U") ? profile.following__city : profile.follower__city
                            } 
                        </span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0 w-4/12">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#ff3a62] hover:bg-[#f497aa] duration-300" type="button"
                    onClick={() => followUnfollowRequest((button_text === "U") ? profile.following__id : profile.follower__id)}
                >
                    {
                        (button_text === "U") ? buttonText : buttonText
                    } 
                </button>
            </div>
        </div>
    )
}

export default FollowBadge;