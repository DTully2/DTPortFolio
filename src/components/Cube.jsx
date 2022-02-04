import React from 'react'
import { useState } from 'react'
function Cube() {
    const [index, setIndex] = useState(0);
    const classArray = [
        'cube-left',
        'cube-front',
        'cube-right',
        'cube-top',
        'cube-back',
        'cube-bottom',
    ]
    const cycle = (n, m) => ((n % m) + m) % m;
    const onCubeClick = (n) => {
        setIndex(state => cycle(state + n, classArray.length));
    };

    const [view, setView] = useState(0);

    return (
        <div className="inline lg:hidden">

            <div>
                <div className={`${classArray[index]}`} />
                <div className="separator"></div>
                <div className="space3d">
                    <div className="_3dbox">
                        <div className="_3dface _3dface--front"></div>
                        <div className="_3dface _3dface--top"></div>
                        <div className="_3dface _3dface--bottom"></div>
                        <div className="_3dface _3dface--left"></div>
                        <div className="_3dface _3dface--right"></div>
                        <div className="_3dface _3dface--back"></div>
                    </div>
                </div>
                <div className="mt-10" />
                <button className="px-2 py-2 mt-10 mr-1 rounded-md" onClick={() => onCubeClick(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 gold " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </button>
                <button className="px-2 py-2 mt-10 ml-1 rounded-md" onClick={() => onCubeClick(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 gold " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

        </div>
    )
}
export default Cube;
