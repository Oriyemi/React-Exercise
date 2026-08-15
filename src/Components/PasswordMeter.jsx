// 13. Password strength meter — UI derived purely from input
import React, { useState } from 'react'

function getPasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const levels = [
        { label: "Very Weak", color: "bg-red-600" },
        { label: "Weak", color: "bg-orange-500" },
        { label: "Medium", color: "bg-yellow-500" },
        { label: "Strong", color: "bg-lime-500" },
        { label: "Very Strong", color: "bg-green-500" },
    ];

    return {
        score,
        percent: (score / 5) * 100,
        ...levels[score === 0 ? 0 : score - 1],
    };
}

function PasswordMeter() {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const strength = getPasswordStrength(userInput);

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="w-full max-w-md bg-gray-900 rounded-2xl p-6 shadow-2xl">
                <label className="block text-gray-300 mb-2 font-semibold">
                    Password
                </label>

                <input
                    type="password"
                    onChange={handleChange}
                    value={userInput}
                    placeholder="Enter a password"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-600"
                />

                {userInput.length > 0 && (
                    <div className="mt-4">
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${strength.color} transition-all duration-300`}
                                style={{ width: `${strength.percent}%` }}
                            />
                        </div>

                        <p className="text-sm text-gray-400 mt-2">
                            Strength: <span className="font-semibold">{strength.label}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PasswordMeter