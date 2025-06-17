import React from "react";
import ProgressCircle from "./ProgressCircle";

export default function Card({ counter }) {
    return (
        <div>
            {/* progresse bar */}
            <ProgressCircle value={counter.value} percentage={counter.percentage * 100} />
            <span>{counter.label}</span>
        </div>
    );
}
