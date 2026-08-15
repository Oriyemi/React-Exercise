// 12. Modal dialog — portals, Escape key, click-outside
import React, { useState, useEffect } from 'react'

function Modal() {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setModal(false);
            }
        };

        if (modal) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [modal]);

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">

            <button
                onClick={handleModal}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            >
                Open Modal
            </button>

            {modal && (
                <div
                    onClick={handleModal}
                    className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md bg-gray-900 text-white rounded-2xl p-6 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold">
                                My Modal
                            </h2>

                            <button
                                onClick={handleModal}
                                className="text-gray-400 hover:text-white text-2xl"
                            >
                                &times;
                            </button>
                        </div>

                        <p className="text-gray-400 mb-6">
                            This is my modal content. You can close this
                            modal by clicking outside, pressing Escape,
                            or clicking the close button.
                        </p>

                        <button
                            onClick={handleModal}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal