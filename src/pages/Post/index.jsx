import Header from "@/components/Header"
import Aside from "@/components/Aside"

import PostComment from "@/components/PostComment"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {API_BASE_URL} from "/src/constants.js";

const Post = () => {

    const {post_id} = useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        load_post();
        load_comments();
    }, [])


    const load_post = async () => {
        const req = await fetch(API_BASE_URL + "/api/posts/" + post_id + "/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setPost(res);
        }else{
            alert("ERROR!!!");
        }

    }

    const load_comments = async () => {
        const req = await fetch(API_BASE_URL + "/api/posts/" + post_id + "/reply/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setComments(res);
        }else{
            alert("ERROR!!!");
        }

    }

    const post_comment = async () => {
        const post_reply = document.getElementById("post_reply").value;
        if(post_reply == undefined || post_reply == "" || post_reply == null) {
            return
        }

        const req = await fetch(API_BASE_URL + "/api/posts/" + post_id + "/comment/", {
            method : 'POST',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                "post" : post_id,
                "reply" : post_reply
            })
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setComments([...comments, res]);
        }else{
            alert("ERROR!!!");
        }
    }


    return (
        <>
            <Header />
            <Aside />
            <main className="container mt-6">
                <hr className="mt-7"/>
                    {post && (
                        <div className="flex mt-7 justify-center">
                            <div className="bg-white px-8 py-8 rounded-lg shadow-md">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <img src={post.author.profile_picture} alt="User Avatar" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <p className="text-gray-800 font-semibold"><Link to="/profile">{post.author.name}</Link></p>
                                            <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 cursor-pointer">
                                        <button className="hover:bg-gray-50 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="7" r="1" />
                                                <circle cx="12" cy="12" r="1" />
                                                <circle cx="12" cy="17" r="1" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="font-bold mb-4 text-2xl">{post.post_title}</p>
                                    <p className="text-gray-800 mb-4">{post.post_content}</p>
                                </div>

                                <div className="mb-4">
                                    <img src={post.post_image} alt="Post Image" className="w-full h-64 object-cover rounded-md" />
                                </div>

                                <div className="flex items-center justify-between text-gray-500">
                                    <div className="flex items-center space-x-2">
                                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                                            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                            <span>{post.likes} Likes</span>
                                        </button>
                                    </div>
                                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                                        <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                                            </g>
                                        </svg>
                                        <span>{post.comments} Comments</span>
                                    </button>
                                </div>
                                <hr className="mt-2 mb-2" />
                                <p className="text-gray-800 font-semibold">Comments</p>
                                <hr className="mt-2 mb-2" />

                                <div className="">

                                    {comments.map((comment, index) => <PostComment key={index} comment={comment}/>)}
            
                                    <p className="text-center my-4 font-semibold">No more comments...</p>

                                </div>


                                <div className="space-x-1" style={{bottom : '0px', position : 'fixed', backgroundColor : 'pink',
                                    padding : '10px', borderRadius : '15px', display: 'flex'
                                }}>
                                    <input
                                        style={{ height : '50px'}}
                                        id="post_reply"
                                        placeholder="Reply..."
                                        type="text"
                                        className="flex w-80 border rounded focus:outline-none focus:border-indigo-300 pl-4"
                                    />
                                    <button onClick={() => post_comment()} style={{backgroundColor : 'violet',}} className="text-white rounded font-semibold px-3">Comment</button>
                                </div>

                            </div>
                        </div>
                    )}
            </main>
        </>
    )
}

export default Post;