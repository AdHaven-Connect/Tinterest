import TopPin from "../TopPin";

const TopPinBar = () => {
    
    const topics = [
        "Anime", "Game", "IT", "Finance", "Sport", "Technology", "News", "Travel",
        "Work", "Movie", "Art", "Food", "Reading", "Russia", "Globe"
    ]

    return (
        <section id="categories" className="flex space-x-5 justify-center" style={{overflow : 'scroll', scrollbarColor : 'yellow' , paddingBottom : '15px', overflowY : 'hidden'}}>
            { topics.map((topic, index) => <TopPin key={index} topic={topic}/>) }
        </section>
    )
}

export default TopPinBar;