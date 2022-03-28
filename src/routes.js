import SignIn from './pages/SignIn'
import Main from './pages/Main'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Teacher from './pages/Teacher';

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = true
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoutes redirectTo={'/'} />}>
                <Route path='/main' element={<Main />} />

            </Route>
            <Route path='/' element={<SignIn />} />
            <Route path='/teacher/:id' element={<Teacher />} />
        </Routes>
    )
}

export default MainRoutes