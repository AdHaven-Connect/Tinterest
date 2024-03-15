
const ChatContact = ({select_chat_profile_area, chat_profile}) => {

    return (
        <button id={chat_profile.id} onClick={() => select_chat_profile_area(chat_profile.id)}
            className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                <img src={"https://cdn.tinterest.ru/" + chat_profile.other_person_profile_picture } alt="DP" />
            </div>
            <div className="ml-2 text-sm">
                <span className="font-semibold">{ chat_profile.other_person_name } </span>

                <div className="text-sm  font-normal">
                    { chat_profile.image_message ? 'Photo' : chat_profile.text_message ? chat_profile.text_message : 'New' }
                </div>
            </div>
        </button>
    )
}

export default ChatContact;