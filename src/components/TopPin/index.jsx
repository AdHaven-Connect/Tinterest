import { Link } from "react-router-dom";


const TopPin = ({topic}) => {

    return (
        <section>
            <button className="w-30 h-9 px-2 rounded-lg focus:bg-yellow-600 focus:bg-opacity-75 focus:text-white">
                <span style={{fontSize : '22px'}} className="font-inter text-xl">
                    {topic.topic_name}
                </span>
            </button>
        </section>
    )
}


export default TopPin;