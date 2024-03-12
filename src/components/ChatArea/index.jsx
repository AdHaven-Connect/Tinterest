import MessageArea from "@/components/MessageArea";
import InputArea from "@/components/InputArea";


const ChatArea = () => {
    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div
                className="flex flex-col flex-auto flex-shrink-0 bg-opacity-[0.7] rounded-2xl bg-pink-100 h-full p-4"
            >
                <MessageArea/>
                <InputArea/>

            </div>
        </div>
    )
}

export default ChatArea;