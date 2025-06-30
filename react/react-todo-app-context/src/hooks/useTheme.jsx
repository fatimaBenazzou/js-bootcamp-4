import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("must be used within a ThemeProvider");
    }
    return context;
}
