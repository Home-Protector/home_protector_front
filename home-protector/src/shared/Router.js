import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Form from "../pages/Form";
import Detail from "../pages/Detail";
import Modify from "../pages/Modify";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main />} />
				<Route path="login" element={<Login />} />
				<Route path="signUp" element={<SignUp />} />
				<Route path="form" element={<Form />} />
				<Route path="detail/:postId" element={<Detail />} />
				<Route path="modify/:postId" element={<Modify />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
