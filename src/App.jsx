import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/home/MainPage';
import ErrorPage from './ErrorPage';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
path: '/rant',

  },
  {
    path: '/devworld',
  },
]);

function App() {


  return (
    <>
      <div>
        <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
