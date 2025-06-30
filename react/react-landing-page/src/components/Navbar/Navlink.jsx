import React from "react";

export default function Navlink({ label, href, activeLink, onClick }) {
    const isActive = activeLink === href;
    return (
        <a
            href={href}
            onClick={() => onClick?.(href)}
            className={`text-sm font-medium  ${
                isActive
                    ? "text-primary hover:text-primary-700"
                    : "text-gray-600 hover:text-gray-900"
            }`}
        >
            {label}
        </a>
    );
}
