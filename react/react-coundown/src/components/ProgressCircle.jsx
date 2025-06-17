import React from "react";

export default function ProgressCircle({ value, percentage, color = "text-blue-500" }) {
    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-transparent border-bg-gray-2pp"></div>
            <div
                className={`absolute w-full h-full rounded-full transition-all duration-500 ${color}`}
                style={{
                    background: `conic-gradient(currentColor ${percentage}%, #e0e0e0  ${percentage}%)`,
                    maskImage: "radial-gradient(circle, transparent 55%, black 56%)",
                }}
            ></div>
            <span className="text-lg font-bold text-gray-800">{value}</span>
        </div>
    );
}
