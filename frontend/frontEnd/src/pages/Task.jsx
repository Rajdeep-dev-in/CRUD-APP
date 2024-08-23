import { useState, useEffect } from "react";
import {
  useCreateTodoMutation,
  useGetTodoQuery,
  useEditTodoMutation,
} from "../services/todoApi";
import { useNavigate, useParams } from "react-router-dom";

function Task() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [createTodo] = useCreateTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data } = useGetTodoQuery(id);
  console.log(data);

  useEffect(() => {
    if (id && data) {
      setIsEdited(true);
      setName(data?.name || "");
      setAddress(data?.address || "");
      setAge(data?.age || 0);
      setEmail(data?.email || "");
    }
  }, [id, data]);

  function handelSubmit(e) {
    e.preventDefault();
    if (name && address && age && email) {
      const data = {
        name: name,
        address: address,
        age: age,
        email: email,
      };
      if(!id){
        const res = createTodo(data);
        console.log(res);
      }else{
        const data = {
            name: name,
            address: address,
            age: age,
            email: email,
            id: id
        }
        console.log(data, 'data');
        console.log('click to update');
        editTodo(data)
      }
      navigate("/");  
    } else {
      alert("You Provide a empty field");
    }
  }

  return (
    <>
      <h1 className=" text-center text-2xl bg-gray-700 text-white px-4 py-4">
        Add & Edit User
      </h1>
      <div className="px-3 py-3 bg-white border-2 border-black">
        <div>
          <h1 className="text-center text-2xl text-black">
            {isEdited ? "Edit Form" : "Add Form"}
          </h1>
        </div>
        <form className="  mx-10 my-5" onSubmit={handelSubmit}>
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
          <div className="flex justify-center items-center gap-3">
            <div>
              <button className="px-3 py-3 bg-green-600 text-white hover:bg-green-700 rounded-md">
                {isEdited ? "Update Data" : "Add Data"}
              </button>
            </div>
            <div>
              <button className="px-3 py-3 bg-red-500 text-white hover:bg-red-600 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Task;
