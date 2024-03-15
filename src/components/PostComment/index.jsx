import { Link } from "react-router-dom"

const PostComment = ({comment}) => {
    return (
        <div className="mt-5">
            <div className="flex items-center space-x-3">
                <img src={comment.author.profile_picture} alt="User Avatar" 
                    className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-gray-800 font-medium"><Link to={"/profile/" + comment.author.id }>{comment.author.name}</Link></p>
                    <p className="text-gray-500 text-sm">{comment.reply}</p>
                </div>
            </div>
        </div>
    )
}

export default PostComment;