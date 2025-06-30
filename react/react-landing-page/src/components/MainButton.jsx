import React from "react";

export default function MainButton({ children, className = "", onClick = () => {} }) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer active:scale-95 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-color-primary-100 ${className} `}
        >
            {children}
        </button>
    );
}
