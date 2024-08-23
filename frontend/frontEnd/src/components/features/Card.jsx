import { NavLink } from "react-router-dom";
import { useDeleteTodoMutation } from "../../services/todoApi"


function Card({id, name, age, address, email}){

    const [deleteTodo] = useDeleteTodoMutation();

    function deleteUser(id){
        deleteTodo(id)
    }
    return(
        <>
            <div className=" bg-blue-300 text-black rounded-md shadow-lg">
                <div className="px-3 py-2">
                    <h3
                        className=" font-bold text-2xl"
                    >
                        Name : {name}
                    </h3>
                </div>
                <div className="flex justify-between items-center px-3 py2">
                    <div>
                        <p>Age : {age}</p>
                    </div>
                    <div>
                        <p>Address: {address}</p>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <p>Email Id : {email}</p>
                </div>
                <div className="flex justify-end items-end gap-2 px-3 py-2">
                    <div>
                        <button 
                        className="px-1 py-1 bg-green-600 text-white hover:bg-green-700 cursor-pointer">
                            <NavLink to={`/task/${id}`}>
                                Edit
                            </NavLink>
                            
                        </button>
                    </div>
                    <div>
                        <button 
                        onClick={() => deleteUser(id)}
                        className="px-1 py-1 bg-red-500 text-white hover:bg-red-600 cursor-pointer">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card