import {Link, NavLink} from 'react-router-dom'

function Header(){
    return(
        <>
            <nav 
                className='bg-black text-white px-2 py-2 h-14 flex justify-between items-center'
            >
                <div
                    className='flex justify-center items-center px-2 py-2'
                >
                    <h3
                        className=' font-bold text-2xl'
                    >
                        <Link to="/">
                            TODO_APP
                        </Link>
                    </h3>
                </div>
                <div
                    className='flex justify-center items-center gap-x-3 '
                >
                    <div>
                        <NavLink
                            to="/"
                            className={({isActive}) => `
                                ${isActive ? "text-gray-400"  : "text-white"} hover:text-orange-300
                            `
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/task"
                            className={({isActive}) => ` ${isActive ? "text-gray-400" : "text-white"} hover:text-orange-300`}
                        >
                            Task
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header