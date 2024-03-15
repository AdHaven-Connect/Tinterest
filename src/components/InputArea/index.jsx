import {API_BASE_URL} from '/src/constants.js';

const InputArea = ({match_id, websocket, update_chat_messages}) => {


    const sent_new_text_message = () => {
        const chat_message_input_text = document.getElementById("chat_message_input_text").value;
        if(chat_message_input_text == undefined || chat_message_input_text == null || chat_message_input_text == ''){
            return
        }
        websocket.send(JSON.stringify({
            "sender" : localStorage.getItem('profile_id'),
            "message" : chat_message_input_text
        }));
        document.getElementById("chat_message_input_text").value = '';
    }



    const upload_image_chat = async () => {

        const file_input = document.getElementById("chat_file_upload_button").files;

        if(file_input[0] == null || file_input[0] == undefined) {
            return;
        }

        const imageData = new FormData();
        imageData.append('image', file_input[0]);

        const uploadImage = await fetch(API_BASE_URL + `/chat/${match_id}/upload/image/`, {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token'),
            },
            body: imageData
        });
        
        if (uploadImage.ok && uploadImage.status === 200) {
            const chatImg = await uploadImage.json();
            websocket.send(JSON.stringify({
                "image" : chatImg.image,
                "sender" : chatImg.sender,
                "message_id" : chatImg.message_id
            }));

        } else {
            console.log("Failed to upload photo");
            return;
        } 
    }


    return (
        <div
            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
        >
            <div>
                <label htmlFor="chat_file_upload_button"
                    className="flex items-center justify-center cursor-pointer text-gray-400 hover:text-gray-600"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                    </svg>
                </label>

                <input type="file" onChange={() => upload_image_chat()} name="chat_file_upload_button" accept='imaage' id="chat_file_upload_button" hidden/>

            </div>
            <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <input
                        id="chat_message_input_text"
                        placeholder="Введите здесь ваше сообщение"
                        type="text"
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                </div>
            </div>
            <div className="ml-4">
                <button onClick={() => sent_new_text_message()}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                    <span>Send</span>
                    <span className="ml-2">
                        <svg
                            className="w-4 h-4 transform rotate-45 -mt-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default InputArea;