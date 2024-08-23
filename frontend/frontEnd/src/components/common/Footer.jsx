import { Link } from "react-router-dom"


function Footer(){
    return(
        <>
            <footer
                className="bg-black text-white h-36 px-4 py-4"
            >
                <div 
                    className="flex justify-start items-start"
                >
                    <p
                        className="mx-5 my-3 text-2xl"
                    >
                        This app is Develop & mentain by <span className="font-bold">Rajdeep</span>
                    </p>
                </div>
                <div
                    className="flex justify-end items-end px-6 py-3"
                >
                    <p
                        className=" px-4 py-2 border-white rounded-md"
                    >
                        <Link>
                            TODO_APP
                        </Link>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer