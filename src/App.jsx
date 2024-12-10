import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import PostsIndex from './pages/posts/PostsIndex.jsx'
import PostsShow from './pages/posts/PostsShow.jsx'
// import PostsCreate from '.pages/posts/PostsCreate.jsx'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import BlankLayout from './layouts/BlankLayout.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/posts'>
              <Route index element={<PostsIndex />}></Route>
              <Route path=':id' element={<PostsShow />}></Route>
              <Route path='create' element={<PostsCreate />}></Route>
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
