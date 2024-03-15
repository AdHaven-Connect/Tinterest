import FollowBadge from "@/components/FollowBadge";

const Follower = ({followers}) => {
    return (
        <div className="user-list w-full max-w-lg mx-auto bg-white flex flex-col py-5 px-6 rounded">
            { followers.map((follower, index) => <FollowBadge profile={follower} key={index} button_text={"F"} />) }
        </div>
    )
}

export default Follower;