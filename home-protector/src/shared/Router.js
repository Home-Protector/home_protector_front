import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Form from "../pages/Form";
import Detail from "../pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main />}/>
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />}/>
        <Route path='form' element={<Form />} />
        <Route path='detail/:id' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;