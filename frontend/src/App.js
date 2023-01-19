import React from 'react' 
import Home from './pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "project",
    element: <Project />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App