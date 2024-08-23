import Card from "../components/features/Card";
import Loader from "../components/loader/Loader";
import { useGetAllTodoQuery } from "../services/todoApi"

function Home(){
    const {data, isLoading, isError} = useGetAllTodoQuery()
    
    if(isLoading) return <div className="flex justify-center items-center"><Loader /></div>
    if(isError) return <h1 className="text-black text-2xl text-center">Something went Wrong!</h1>
    
    return(
        <>
            <h1
                className=" text-center text-2xl bg-gray-700 text-white px-4 py-4"
            >
                Show All User
            </h1>
            <section
                className="flex justify-center items-center gap-2 flex-wrap px-4 py-4"
            >
                {data.map((todo) => (
                    <Card 
                        key={todo._id}
                        id={todo._id}
                        name={todo.name}
                        age={todo.age}
                        address={todo.address}
                        email={todo.email}
                    />
                ))}
            </section>
        </>
    )
}


export default Home