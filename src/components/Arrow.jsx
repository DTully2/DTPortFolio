import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
function Arrow({ displayArrow }) {

    return (
        <div className={`${displayArrow ? 'opacity-100 fade-inplace' : 'opacity-0'} hidden sm:flex text-white static z-50`} >
            <a onClick={() => scroll.scrollToBottom()}>
                <div className="flex cursor-pointer fade-in arrow-down">
                    <div className="left" />
                    <div className="right" />
                </div>
            </a>
        </div>
    )
}
export default Arrow;