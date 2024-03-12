import Header from "@/components/Header"
import Aside from "@/components/Aside"
import Messenger from "@/components/Messenger"

const Chat = () => {

    return (
        <>
            <Header />
            <Aside />
            <main className="container mt-6">
                <Messenger/>
            </main>
        </>
    )
}


export default Chat;