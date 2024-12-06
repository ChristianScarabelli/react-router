import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import PostsList from './pages/PostsList.jsx'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import BlankLayout from './layouts/BlankLayout.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/postslist' element={<PostsList />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
