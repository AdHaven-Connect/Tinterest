import { Link } from "react-router-dom"


const PostComment = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center space-x-3">
                <img src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png" alt="User Avatar" 
                    className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-gray-800 font-medium"><Link to="profile">Jane Smith</Link></p>
                    <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
                </div>
            </div>
        </div>
    )
}


export default PostComment;