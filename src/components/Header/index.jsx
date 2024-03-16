import { useState } from "react";
import PostUpload from "@/components/PostUpload";
import Notification from "@/components/Notification";

import { Link } from "react-router-dom";



const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const [showNotification, setShowNotification] = useState(false);


    return (
        <header className="container mt-5">

            <nav className="flex items-center justify-between max-w-[1220px] min-h-[50px]">
                <section className="flex gap-6 w-60 items-center">
                    <Link to="/" className="">
                        <img width="56" height="56" src="/src/assets/images/tinkoff.svg"/>
                    </Link>
                    <Link to="/" className="font-semibold text-xl">Tinterest</Link>
                </section>
                <section className="cursor-pointer relative flex items-center text-grey focus-within:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-8 right-0 absolute icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <input className="w-[760px] mx-5 px-3 py-2 placeholder-grey text-black rounded-2xl w-[800px] mx-11" id="search" type="text" placeholder="Type for searching..." />
                </section>
                <section className="flex items-center gap-3" onClick={() => setShowNotification(!showNotification)}>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24"  fill={showNotification ? "yellow" : "none"} xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_28_235)">
                                <path d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_28_235">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <button onClick={() => setShowModal(true)}>
                        <svg width="43" height="43" viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg">
                            <rect width="43" height="43" rx="12" fill="#EDF2F7" />
                            <g clipPath="url(#clip0_28_252)">
                                <g clipPath="url(#clip1_28_252)">
                                    <path d="M22 14V28" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 21H29" stroke="#212121" strokeOpacity="0.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_28_252">
                                    <rect width="24" height="24" fill="white" transform="translate(10 9)" />
                                </clipPath>
                                <clipPath id="clip1_28_252">
                                    <rect width="24" height="24" fill="white" transform="translate(10 9)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </section>
            </nav>

            {showNotification ? <Notification/> : <></>}
            <PostUpload showModal={showModal} setShowModal={setShowModal}/>
        </header>
    )
}

export default Header;