import { useState } from "react";
import { useCreateTodoMutation } from "../services/todoApi";
import { useNavigate } from "react-router-dom";

function Task(){

    const [name , setName] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    const [createTodo] = useCreateTodoMutation()
    const navigate = useNavigate()

    function handelSubmit(e){
        e.preventDefault()
        if(name && address && age && email){
            const data = {
                name: name,
                address: address,
                age: age,
                email: email
            }
            const res = createTodo(data)
            console.log(res);
            navigate("/")
            
        }else{
            alert("You Provide a empty field")
        }
    }

    return(
        <>
            <h1
                className=" text-center text-2xl bg-gray-700 text-white px-4 py-4"
            >
                Add & Edit User
            </h1>
            <div className="px-3 py-3 bg-white border-2 border-black">
                <div>
                    <h1 
                        className="text-center text-2xl text-black"
                    >
                        Add Form
                    </h1>
                </div>
                <form
                    className="  mx-10 my-5"
                    onSubmit={handelSubmit}
                >
                    <div className="  px-5 py-3">
                    <input 
                        type="text"
                        className=" px-2 py-2 w-full border border-sky-500 outline-none "
                        placeholder="Entre Name Here"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div className="px-5 py-3">
                    <textarea 
                        className="px-2 py-2 w-full border border-sky-500 outline-none"
                        cols={5}
                        rows={4}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address Here"
                    />
                    </div>
                    <div className="px-5 py-3">
                        <input 
                            type="number"
                            className="px-2 py-2 w-full border border-sky-500 outline-none"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter Age Here"
                        />
                    </div>
                    <div className="px-5 py-3">
                        <input 
                            type="text"
                            className="px-2 py-2 w-full border border-sky-500 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="xyz@gmail.com"
                        />
                    </div>
                    <div
                        className="flex justify-center items-center gap-3"
                    >
                        <div>
                            <button 
                                className="px-3 py-3 bg-green-600 text-white hover:bg-green-700 rounded-md"
                            >
                                Add Data
                            </button>
                        </div>
                        <div>
                            <button
                                className="px-3 py-3 bg-red-500 text-white hover:bg-red-600 rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}


export default Task;