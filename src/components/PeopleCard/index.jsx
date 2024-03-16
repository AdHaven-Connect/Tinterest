import { Link } from "react-router-dom";

const PeopleCard = ({person}) => {

    return (
        <section className="ml-10 mt-4">
            <section className="flex justify-between flex-row mt-5">

                <img src={person.profile_picture} className="w-[64px] h-[64px] rounded-full" />

                <div className="ml-5">
                    <Link to={"/profile/" + person.id} className="font-inter font-semibold">{person.name},
                        <span className="mt-4 font-inter text-xs">{"  "+ person.city}</span>
                    </Link>
                    <p>{person.title && person.title.position_title}</p>
                    <p>{person.department && person.department.department_name}</p>
                    
                </div>
            </section>
        </section>
    )
}

export default PeopleCard;