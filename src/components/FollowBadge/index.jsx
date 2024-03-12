const FollowBadge = () => {

    const followUnfollowRequest = async () => {
        const req = await fetch();
    }


    return (
        <div className="user-row bg-white rounded-xl shadow-xl flex flex items-center justify-center cursor-pointer my-1 p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user items-center justify-center flex space-x-3 flex-row sm:flex-row sm:text-left w-8/12">
                <div className="avatar-content items-center justify-center mb-2.5 sm:mb-0 sm:mr-2.5">
                    <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/47.jpg"/>
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium no-underline">Guy Hawkins </a>
                    <div className="skills flex flex-col">
                        <span className="subtitle text-slate-500">Medical Assistant</span>
                        <span className="subtitle text-slate-500">Assitant</span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0 w-4/12">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#ff3a62] hover:bg-[#f497aa] duration-300" type="button">Follow</button>
            </div>
        </div>
    )
}

export default FollowBadge;