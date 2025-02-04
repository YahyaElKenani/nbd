import React, { useState } from 'react';
import '../Styling/cake.css'

const BirthdayCake = () => {
const [candlesLit, setCandlesLit] = useState([true, true, true]); // Track each candle separately

const handleClick = (index) => {
setCandlesLit(prev => {
    const newCandles = [...prev];
    newCandles[index] = false;
    
    // Relight this specific candle after 3 seconds
    setTimeout(() => {
    setCandlesLit(prev => {
        const relit = [...prev];
        relit[index] = true;
        return relit;
    });
    }, 3000);

    return newCandles;
});
};

return (
<div className="cake-wrapper">
    <div className="number">20</div>
    
    <div className="cake">
    {/* Candles */}
    <div className="candles">
        {[0, 1, 2].map((index) => (
        <div key={index} className="candle">
            <div className="candle-stick" />
            {candlesLit[index] && (
            <div 
                className="flame-wrapper" 
                onClick={() => handleClick(index)}
                style={{ cursor: 'pointer' }} // Add pointer cursor
            >
                <div className="flame" />
                <div className="flame-inner" />
            </div>
            )}
        </div>
        ))}
    </div>

    {/* Cake layers */}
    <div className="cake-layer top">
        <div className="decorations">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="dot" />
        ))}
        </div>
    </div>
    
    <div className="cake-layer middle">
        <div className="decorations">
        {[...Array(7)].map((_, i) => (
            <div key={i} className="dot" />
        ))}
        </div>
    </div>
    
    <div className="cake-layer bottom">
        <div className="decorations">
        {[...Array(8)].map((_, i) => (
            <div key={i} className="dot" />
        ))}
        </div>
    </div>
    </div>
</div>
);
};

export default BirthdayCake;