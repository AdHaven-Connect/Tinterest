import Header from "../../components/Header"
import Aside from "../../components/Aside"
import PostCard from "../../components/PostCard"
import TopPinBar from "../../components/TopPinBar"
import RightSide from "../../components/RighMenu";



const Home = () => {
    return (
        <>
            <Header/>
            <Aside/>
            <main className="container mt-6">
                <TopPinBar/>
            <hr className="mt-7"/>
                <PostCard/>
                <PostCard/>
            </main>

            <RightSide/>
        </>
    )
}

export default Home;