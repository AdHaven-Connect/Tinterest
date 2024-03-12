const ContactArea = () => {
    return (
        <div className="flex flex-col pb-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 mt-2">
            <div className="flex flex-col mt-8">

                <div className="flex flex-row items-center justify-between text-xs">
                    <span className="font-bold">Разговоры</span>
                </div>

                <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
                    <button
                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                        >
                            H
                        </div>
                        <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                    </button>
                    <button
                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
                        >
                            M
                        </div>
                        <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                    </button>
                    <button
                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full"
                        >
                            P
                        </div>
                        <div className="ml-2 text-sm font-semibold">Philip Tucker</div>
                    </button>
                    <button
                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            className="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
                        >
                            C
                        </div>
                        <div className="ml-2 text-sm font-semibold">Christine Reid</div>
                    </button>
                    <button
                        className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            className="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full"
                        >
                            J
                        </div>
                        <div className="ml-2 text-sm font-semibold">Jerry Guzman</div>
                    </button>
                </div>

            </div>
        </div>
    )
}


export default ContactArea;