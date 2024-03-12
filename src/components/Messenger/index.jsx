import ChatArea from "@/components/ChatArea";
import ContactArea from "@/components/ContactArea";
import ChatProfileArea from "@/components/ChatProfileArea";

const Messenger = () => {
    return (
        <div className="flex h-[90%] antialiased text-gray-800 fixed bg-gray-100 rounded"
            style={{ borderLeft: '6px solid pink', 
            paddingLeft: '10px' }}
        >
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <ContactArea/>
                <ChatArea/>
                <ChatProfileArea/>
            </div>
        </div>
    )
}


export default Messenger;