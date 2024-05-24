import React from 'react';
import ScrollToTop from "react-scroll-to-top";

const Arrow = () => {
    return (
        <div className="fixed bottom-8 z-10">
            <ScrollToTop smooth
                style={{
                    backgroundColor: "gray", borderRadius: "100%", display: "flex", left: '40px',
                    justifyContent: "center", alignItems: "center", width: "40px", height: "40px", bottom: '15px'
                }}
                component={<div className="bg-white text-black rounded-full p-2 cursor-pointer hover:bg-[#4ecca2] hover:text-white transition-colors">Top</div>}
                ariaLabel="Go to top"
                componentHover={<div className="bg-orange-500 rounded-full p-2 cursor-pointer hover:bg-gray-400 transition-colors">Top</div>}
            />
        </div>
    )
}

export default Arrow;
