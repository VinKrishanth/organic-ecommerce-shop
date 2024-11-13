import React, { useEffect, useState } from 'react';

function MainModal({ isOpen, onClose }) {
    const [deviceSize, setDeviceSize] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setDeviceSize(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const customerStyle = {
        container: 'pb-32 pt-56',
        dxl: '2xl:px-16',
        lg: 'lg:min-w-screen',
        sm: 'sm:px-16',
        base: 'min-w-full',
    };

    if (!isOpen) return null; // Only render modal if `isOpen` is true

    return (
        <div 
            className="fixed top-0 left-0 z-30 w-full h-full flex items-center justify-center bg-black bg-opacity-30" 
            onClick={onClose} // Close modal when clicking outside
        >
            <div 
                className={`relative bg-white p-8 rounded-md shadow-lg ${customerStyle.container} ${customerStyle.dxl} ${customerStyle.lg} ${customerStyle.sm} ${customerStyle.base}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" 
                    onClick={onClose} // Close modal when clicking this button
                >
                    X
                </button>
                <div className="flex justify-center items-center min-h-[600px] bg-white text-gray-900">
                    <h2 className="text-xl font-bold">Chinese Cabbage</h2>
                    {/* Additional content goes here */}
                </div>
            </div>
        </div>
    );
}

export default MainModal;
