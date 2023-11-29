import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  react router dom 
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

//  pages 
import Registration from './pages/Registration';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Registration />}
      >
        </Route>
     
    )
  );

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
