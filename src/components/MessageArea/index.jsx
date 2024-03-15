import TextMessage from "@/components/TextMessage";
import ImageMessage from "@/components/ImageMessage";


const MessageArea = ({messages}) => {
    return (
        <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                    {
                        messages.map((message, index) => 
                            (message.self_sender === true) ?  
                            (message.image != '' && message.image != null) ? <ImageMessage key={index} showSide={"right"} message={message}/> : <TextMessage key={index} showSide={"right"} message={message}/> : 
                            (message.image != '' && message.image != null) ? <ImageMessage key={index} showSide={"left"} message={message}/> : <TextMessage key={index} showSide={"left"} message={message}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MessageArea;