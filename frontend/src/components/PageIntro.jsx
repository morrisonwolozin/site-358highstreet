//2026-07-05 each page's title, captioned photo, text 
// 

import React from 'react';

export default function PageIntro( {imgName,altImageName, capText, h1Text, children }) {
    return ( 
        <div className="flex flex-col sm:flex-row gap-6 items-start justify-center mb-6">
            <figure className="w-full sm:w-auto flex-shrink-0">
                <img
                src={imgName}
                alt= {altImageName}
                className="sm:w-96 rounded shadow-sm flex-shrink-0 flex-col items-center"
                />
                <figcaption className="text-base italic text-gray-500 mt-2 text-center">{capText}</figcaption>
            </figure>
            <div className="text-left space-y-4 max-w-xl">
                <h1 className="text-3xl font-semibold text-gray-900">{h1Text}</h1>
                
                {children}
            </div>
        </div>
    )
}
