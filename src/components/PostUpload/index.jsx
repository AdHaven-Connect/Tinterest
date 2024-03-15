import { API_BASE_URL } from "/src/constants.js";
import { useState, useEffect } from "react";

const PostUpload = ({ showModal , setShowModal}) => {

    const [allTopics, setAllTopics] = useState([]);

    const upload_post = async () => {

        const author_name = document.getElementById("author_name").value;
        const post_title = document.getElementById("post_title").value;
        const post_content = document.getElementById("post_content").value;
        const topic = document.getElementById("topic").value;
        
        if(author_name == undefined || author_name == ""){
            return
        }
        if(post_title == undefined || post_title == ""){
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token " + localStorage.getItem("token"));

        var formdata = new FormData();
        formdata.append("topic", topic);
        formdata.append("author_name", author_name);
        formdata.append("post_title", post_title);
        formdata.append("public", "true");

        if(post_content != undefined && post_content != ""){
            formdata.append("post_content", post_content);
        }
        
        const post_image = document.getElementById("post_image").files;
        if (post_image[0] !==undefined && post_image[0] !== null){
            formdata.append("post_image", post_image[0]);
        }

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
        };

        const req = await fetch(`${API_BASE_URL}/topics/${topic}/upload/`, requestOptions)

        if(req.ok && req.status === 200 ){
            const res = await req.json();
            setShowModal(false);
            window.location.href = `/post/${res.post_id}/`;

        }else{
            setShowModal(false);       
            alert("ERROR!!");
        }

    }

    const load_all_topics = async () => {
        const req = await fetch(API_BASE_URL + "/api/topics/all/", {
            method : 'GET',
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();
            setAllTopics(res);
        }else{
            alert("ERROR!!!");
        }
    }

    useEffect(() => {
        load_all_topics();
    }, [])

    return (
        <>

            {showModal ? (

                <dialog id="post_upload_dialog_box" open className="fixed mx-auto flex flex-col bg-orange-200 rounded text-dark border border-gray-300 p-6 shadow-lg max-w-2xl">
                    <div className="heading text-center font-bold text-3xl my-5 text-gray-800">New Post</div>
                    <input className="title bg-gray-100 border text-2xl border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" name="post_title" id="post_title" type="text" />
                    <textarea cols="50" rows="8" className="description text-xl bg-gray-100 sec p-3 border border-gray-300 outline-none" spellCheck="false" id="post_content" placeholder="Describe everything about this post here"></textarea>

                    <div className="icons flex text-gray-500 m-2 mt-4">
                        <label htmlFor="post_image">
                            <svg className="mr-2 w-12 h-12 cursor-pointer hover:text-gray-800 border border-slate-700 rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg> 
                        </label> Attach jpg, png
                        
                        <div className="count ml-auto text-dark font-semibold">
                            <select name="topic" id="topic" className="bg-orange-200 cursor-pointer text-right text-orange-700" required>
                                <option disabled>Выберите тему</option>
                                {
                                    allTopics.map((topic, index) => <option key={index} value={topic.id}>{topic.topic_name}</option>)
                                }
                            </select>
                        </div>
                        

                        <input name="author_name" value="Ayon" id="author_name" type="hidden"/>
                        <input name="post_image" id="post_image" type="file" style={{height : '0px', width : '0px'}}/>
                    </div>
                    <div className="buttons flex">
                        <div onClick={
                            () => setShowModal(false)
                        } className="btn border border-red-300 p-2 px-5 bg-red-500 font-semibold cursor-pointer text-white ml-auto">Cancel</div>
                        <div onClick={() => upload_post()} className="btn border border-blue-600 p-2 px-5 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
                    </div>
                </dialog>
            ) : null}

        </>
    )
}

export default PostUpload;