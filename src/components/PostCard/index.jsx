import { Link } from "react-router-dom"
import {API_BASE_URL} from "/src/constants.js"
import { useState } from "react"

const PostCard = ({post}) => {

    const [postLike, setPostLike] = useState(false);
    const [increment, setIncrement] = useState(0);

    const likeUnlikePost = async (post_id) => {
        const req = await fetch(API_BASE_URL + "/api/posts/" + post_id + "/like/" , {
            method : "POST",
            headers : {
                "Authorization" : "Token " + localStorage.getItem("token"),
                "Content-Type" : "application/json",
            }
        });

        if(req.ok && req.status === 200){
            const res = await req.json();

            if(res.detail == "added") {
                setPostLike(true);
                setIncrement(1);
            }else{
                setPostLike(false);
                setIncrement(-1);
            }
        }
    }

    return (
        <section id="category" className="flex justify-center mt-4">
            <article className="w-[625px] bg-yellow-100 bg-opacity-[0.5] rounded">

                <Link to={"/post/" + post.id}>
                    {/* <img className="mb-6" src={post.post_image} alt="" /> */}
                    {
                        post.post_image ? <img src={post.post_image} alt="" className="mb-6 w-full h-64 object-cover rounded-md" /> : <br/>
                    }
                    
                </Link> 
                <section className="mx-4">
                    <Link to={"/post/" + post.id } className=" font-inter text-2xl font-semibold">{post.post_title}</Link>
                    <p className="mt-4 font-inter text-base w-[486px]">{post.post_content}</p>
                    <section className="flex justify-between mt-5">
                        <Link to={"/profile/" + post.author.id} className="flex items-center">
                            <img src={post.author.profile_picture} className="w-6 h-6 rounded-full mr-2" />
                            <span className="text-grey font-semibold font text-xs">{post.author.name}</span>

                        </Link>
                        <section className="flex space-x-3">
                            <button onClick={() => likeUnlikePost(post.id)}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill={postLike ? "yellow" : 'none'} xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="#EDF2F7" />
                                    <g clipPath="url(#clip0_28_300)">
                                        <path d="M22.25 16.4767L16 22.6667L9.75003 16.4767C9.33778 16.0755 9.01306 15.5934 8.79632 15.0606C8.57957 14.5277 8.4755 13.9558 8.49064 13.3808C8.50579 12.8058 8.63983 12.2401 8.88432 11.7195C9.12882 11.1988 9.47847 10.7344 9.91127 10.3555C10.3441 9.97661 10.8506 9.69143 11.399 9.51793C11.9475 9.34442 12.5259 9.28635 13.0978 9.34736C13.6698 9.40837 14.2229 9.58716 14.7224 9.87245C15.2219 10.1577 15.6569 10.5434 16 11.005C16.3446 10.5467 16.7801 10.1645 17.2793 9.8822C17.7784 9.59993 18.3304 9.42373 18.9008 9.36463C19.4712 9.30552 20.0476 9.36477 20.594 9.53869C21.1404 9.7126 21.645 9.99742 22.0763 10.3753C22.5076 10.7532 22.8562 11.2161 23.1004 11.7349C23.3445 12.2538 23.479 12.8174 23.4953 13.3906C23.5116 13.9638 23.4094 14.5342 23.1951 15.0661C22.9809 15.5979 22.6591 16.0799 22.25 16.4817" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_28_300">
                                            <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {post.likes + increment < 0 ? 0 : post.likes + increment }
                            </button>
                            <Link to={"/post/" + post.id }>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="#EDF2F7" />
                                    <g clipPath="url(#clip0_28_306)">
                                        <path d="M12.6667 13.5H19.3334" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.6667 16.8334H17.6667" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.5 21H11C10.337 21 9.70107 20.7366 9.23223 20.2678C8.76339 19.799 8.5 19.1631 8.5 18.5V11.8334C8.5 11.1703 8.76339 10.5344 9.23223 10.0656C9.70107 9.59677 10.337 9.33337 11 9.33337H21C21.663 9.33337 22.2989 9.59677 22.7678 10.0656C23.2366 10.5344 23.5 11.1703 23.5 11.8334V18.5C23.5 19.1631 23.2366 19.799 22.7678 20.2678C22.2989 20.7366 21.663 21 21 21H18.5L16 23.5L13.5 21Z" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_28_306">
                                            <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {post.comments}
                            </Link>
                        </section>
                    </section>
                </section>
            </article>
        </section>
    )
}

export default PostCard;