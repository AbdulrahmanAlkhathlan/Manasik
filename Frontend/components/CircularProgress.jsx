import React from "react";

const CircularProgress = ({ size = 120, strokeWidth = 8, percentage = 0 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={size} height={size}>
            {/* Background circle */}
            <circle
                stroke="#e6e6e6"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            {/* Progress circle */}
            <circle
                stroke="#007bff"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
            {/* Text in center */}
            <text
                x="50%"
                y="50%"
                dy="0.3em"
                textAnchor="middle"
                fontSize="1.8em"
                fill="#333"
            >
                {percentage}%
            </text>
        </svg>
    );
};

export default CircularProgress;
