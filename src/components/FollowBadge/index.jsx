const FollowBadge = () => {
    return (

    <div className='user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
        <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                    <img className="avatar w-20 h-20 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium no-underline">Wade Warren</a>
                    <div className="skills flex flex-col">
                        <span className="subtitle text-slate-500">Marketing Liaison</span>
                        <span className="subtitle text-slate-500">Coordinator ?</span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">Follow</button>
            </div>
        </div>


    </div>

    )
}

export default FollowBadge;