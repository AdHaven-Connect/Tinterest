import { useState } from "react";
import PostUpload from "@/components/PostUpload";
import Notification from "@/components/Notification";


const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const [showNotification, setShowNotification] = useState(false);


    return (
        <header className="container mt-5">

            <nav className="flex items-center justify-between max-w-[1220px] min-h-[50px]">
                <section className="flex gap-6 w-60 items-center">
                    <a href="" className="">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_28_208)">
                                <path d="M28 44C39.0457 44 48 35.0457 48 24C48 12.9543 39.0457 4 28 4C16.9543 4 8 12.9543 8 24C8 35.0457 16.9543 44 28 44Z" fill="#FF3A62" />
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.5186 26.8963H28.9211L30.9781 29.3281H29.8093L26.752 25.9313H27.5434H29.5978C32.1823 25.9313 34.2762 23.9073 34.2762 21.4259C34.2762 20.3573 33.8868 19.366 33.2376 18.5952C32.4551 17.4312 33.3587 16.5779 34.1608 16.5779C33.9574 15.6691 32.8464 15.6011 32.8464 15.6011C32.7226 15.2431 32.4081 14.7144 31.7978 14.7144H30.2018C30.1807 14.7144 30.1602 14.7175 30.1401 14.7205L30.1401 14.7205C30.1231 14.7231 30.1064 14.7257 30.0898 14.7262C29.3049 14.8102 28.5439 15.3831 29.3042 16.5116L29.3045 16.512C29.3238 16.5388 30.3915 18.0206 30.3915 19.5439C30.3915 22.1418 28.1994 24.4237 25.4935 24.4237H20.5112H19.5503H14.4286C14.4286 25.268 15.0932 25.9313 15.9132 25.9313H19.1454H25.2097L28.077 29.3281H19.1454V31.8378H37.8085V29.3281H32.7115L30.5186 26.8963ZM28.2965 22.4761C29.0808 21.6869 29.5306 20.6207 29.5306 19.5546C29.5306 18.269 28.5826 16.9373 28.5728 16.924L28.5671 16.9143L28.5606 16.9037C28.3496 16.5923 28.2302 16.3178 28.1733 16.0662L21.0357 23.7267H25.3616C26.4572 23.7267 27.4996 23.2781 28.2965 22.4761ZM15.8444 31.8378H18.2041V29.3032H15.8444V31.8378ZM38.8235 31.8572V29.3232L40.8571 30.5355L38.8235 31.8572ZM31.0937 16.3816C31.3272 16.3816 31.5162 16.2002 31.5162 15.9761C31.5162 15.7521 31.3272 15.5706 31.0937 15.5706C30.8603 15.5706 30.6711 15.7521 30.6711 15.9761C30.6711 16.2002 30.8603 16.3816 31.0937 16.3816Z" fill="white" />
                            <defs>
                                <filter id="filter0_d_28_208" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_208" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_28_208" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </a>
                    <section className="flex flex-col">
                        <span className="text-sm font-inter font-bold">Иванов</span>
                        <span className="text-sm font-inter text-grey">Иван Иванович</span>
                    </section>
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