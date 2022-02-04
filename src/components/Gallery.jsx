


import React from 'react'
import ProjectCard from './ProjectCard'
import { useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer"
import { animateScroll as scroll } from 'react-scroll'
function Gallery({ showProjects }) {
    let $cont = document.querySelector(".cont");
    var $elsArr = [].slice.call(document.querySelectorAll(".el"));
    var $closeBtnsArr = [].slice.call(
        document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
        $cont?.classList?.remove("s--inactive");
    }, 200);
    const [ref, inView] = useInView({ threshold: 1.0 })
    useEffect(() => {
        if (showProjects) {
            $cont = document.querySelector(".cont");
        }
    }, [showProjects, $cont, inView])
    $elsArr.forEach(function ($el) {
        $el.addEventListener("click", function () {
            if (this?.classList.contains("s--active")) return;
            $cont?.classList?.add("s--el-active");
            this?.classList?.add("s--active");
        });
    });

    $closeBtnsArr.forEach(function ($btn) {
        $btn.addEventListener("click", function (e) {
            e.stopPropagation();
            $cont?.classList?.remove("s--el-active");
            document.querySelector(".el.s--active")?.classList?.remove("s--active");
        });
    });

    const project = [{
        code: "https://github.com/DTully2/BlogOnHeroku.git",
        url:"https://dtblogwithheroku.herokuapp.com/",
        name: "Blog With Heroku",
        desc: "A bloging sight built using Node.js and Ejs utilizing MongoDb."
    },
    {
        code: "https://github.com/DTully2/SimonSaysGame.git",
        url:"https://dtully2.github.io/SimonSaysGame/",
        name: "Simon Says Game",
        desc: "A simple Simon Says game built using Node.js and Ejs."
    },
    { 
        code: "https://github.com/DTully2/NewsLetterSignUp.git",
        url:"https://rocky-stream-63407.herokuapp.com/",
        name: "NewsLetter Sign up",
        desc: "Using mailchimp this site using Node.js and Ejs creates a database of potential subscribers."
    }, 
    { 
       code: "https://github.com/DTully2/MobileProject.git",
       url:"https://github.com/DTully2/MobileProject.git",
       name: "Mobile TodoList",
       desc: "An andriod app using java that will allow you to set certian times to recive an alert."
    },
    { 
        code: "https://github.com/DTully2/ToDoList.git",
        url:"https://gentle-dusk-32415.herokuapp.com/",
        name: "ToDoList",
        desc: "A To Do list sight built using Node.js and Ejs that utilize MongDb to store and keep track of tasks."
    }]
    if (!showProjects) {
        <div />
    }

    return (

        <div className="hidden text-3xl bg-light-black cont s--inactive lg:block">
            <div className="relative pb-2 gold-text ">
                Projects
            </div>

            <svg onClick={() => scroll.scrollToTop()} xmlns="http://www.w3.org/2000/svg" className="absolute w-12 h-12 cursor-pointer button-gold fade-inplace top-5 right-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
            </svg>


            <div className="cont__inner">
                <div className="el">
                    <div className="el__overflow">
                        <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="w-3/4 px-4 py-2 bg-black rounded-md dev el__heading">Blog Site</h2>
                            </div>
                            <div className="el__content">
                            <div className="el__text"><ProjectCard project={project[0]} /></div>

                                <div className="el__close-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="el__index">
                        <div className="el__index-back">1</div>
                        <div className="el__index-front">
                            <div className="text-black el__index-overlay" data-index="1">1</div>
                        </div>
                    </div>
                </div>

                <div className="el">
                    <div className="el__overflow">
                        <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="px-4 py-2 bg-blackrounded dev el__heading">To Do List</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text"><ProjectCard project={project[4]} /></div>
                                <div className="el__close-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="el__index">
                        <div className="el__index-back">2</div>
                        <div className="el__index-front">
                            <div className="el__index-overlay" data-index="2">2</div>
                        </div>
                    </div>
                </div>

                <div className="el">
                    <div className="el__overflow">
                        <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="w-1/2 px-4 py-2 rounded dev el__heading">NewsLetter-SignUp</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text dev"><ProjectCard project={project[2]} /></div>
                                <div className="el__close-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="el__index">
                        <div className="el__index-back">3</div>
                        <div className="el__index-front">
                            <div className="el__index-overlay" data-index="3">3</div>
                        </div>
                    </div>
                </div>

                <div ref={ref} className="el">
                    <div className="el__overflow">
                        <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="px-4 py-2 rounded-md dev el__heading">Task Tracker Andriod App</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text dev"><ProjectCard project={project[3]} /></div>
                                <div className="el__close-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="el__index">
                        <div className="el__index-back">4</div>
                        <div className="el__index-front">
                            <div className="el__index-overlay" data-index="4">4</div>
                        </div>
                    </div>
                </div>

                <div className="el">
                    <div className="el__overflow">
                        <div className="el__inner">
                            <div className="el__bg"></div>
                            <div className="el__preview-cont">
                                <h2 className="w-3/4 px-4 py-2 bg-black rounded-md dev el__heading">Simon Says</h2>
                            </div>
                            <div className="el__content">
                                <div className="el__text dev"><ProjectCard project={project[1]} /></div>
                                <div className="el__close-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="el__index">
                        <div className="el__index-back">5</div>
                        <div className="el__index-front">
                            <div className="el__index-overlay" data-index="5">5</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Gallery 