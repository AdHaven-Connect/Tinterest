const PeopleCard = ({person}) => {

    return (
        <section className="mx-4">
            <Link to={"/profile/" + person.id} className=" font-inter text-xl font-semibold">{person.name}</Link>
            <p className="mt-4 font-inter text-base w-[486px]">{topic.about}</p>
            <section className="flex justify-between mt-5">
                <div className="flex items-center">
                    <img src={person.profile_picture} className="w-6 h-6 rounded-full mr-2" />

                </div>
            </section>
        </section>
    )
}

export default PeopleCard;