import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logout } from "../app/slices/authSlice";

export default function Navbar() {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <nav>
            <p>{user?.email}</p>
            {isAuthenticated ? (
                <button onClick={() => dispatch(logout())}>Logout</button>
            ) : (
                <Link to={"/auth/login"}>Login</Link>
            )}
        </nav>
    );
}
