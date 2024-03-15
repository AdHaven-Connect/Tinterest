import FollowBadge from "@/components/FollowBadge";

const Following = ({followings}) => {
    return (
        <div className="user-list w-full max-w-lg mx-auto bg-white flex flex-col py-6 px-8 rounded">
            { followings.map((following, index) => <FollowBadge profile={following} key={index} button_text={"U"} />) }
        </div>
    )
}

export default Following;