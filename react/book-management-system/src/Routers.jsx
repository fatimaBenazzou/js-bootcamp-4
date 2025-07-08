import { Navigate, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import AuthLayout from "./layouts/AuthLayout";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import { useSelector } from "react-redux";

export default function Routers() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Books />} />
                <Route path="books/:id" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            {/* Auth Routes */}
            <Route path="/auth" element={!isAuthenticated ? <AuthLayout /> : <Navigate to="/" />}>
                <Route index element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
            </Route>
            {/* Private Routes */}
            <Route
                path="/user"
                element={isAuthenticated ? <MainLayout /> : <Navigate to="/auth/login" />}
            >
                <Route path="profile" element={<Profile />} />
                <Route path="favorites" element={<Favorites />} />
            </Route>
        </Routes>
    );
}
