import TextMessage from "@/components/TextMessage";
import ImageMessage from "@/components/ImageMessage";


const MessageArea = ({}) => {
    return (
        <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">

                    <TextMessage showSide={"left"}/>
                    <TextMessage showSide={"right"}/>
                    <TextMessage showSide={"left"}/>
                    <ImageMessage showSide={"left"}/>
                    <TextMessage showSide={"right"}/>
                    <ImageMessage showSide={"right"}/>
                </div>
            </div>
        </div>
    )
}

export default MessageArea;