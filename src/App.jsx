
import './App.css'
import './scss/style.css'
import { useEffect, useState } from 'react'
import ContextProvider from './components/Context/ContextProvider'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from "./components/Home/Home.jsx"
import Tech from "./components/Tech/Tech.jsx"
import About from "./components/About/About.jsx"
import Blog from "./components/Blog/Blog.jsx"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='tech' element={<Tech/>} />
        <Route path='about' element={<About/>} />
        <Route path='blog' element={<Blog/>} />
      </Route>
    )
  )

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
    console.log("App dark")
  }

  useEffect(() => {
    console.log("running..")
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
    console.log("woking...")
  }, [themeMode])

  return (
    <ContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </ContextProvider>
  )
}

export default App
