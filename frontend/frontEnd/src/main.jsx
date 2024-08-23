
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Task from './pages/Task.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={ <Home />} />
      <Route path="/task" element={<Task />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)
