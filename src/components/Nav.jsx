import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { animateScroll as scroll } from "react-scroll";
import ContactModal from "./ContactModal";
import toast, { Toaster } from "react-hot-toast";
function Nav({ setIsMenuOpen, isMenuOpen }) {
    const toggleMenuOpen = function () {
        document.getElementById("header")?.classList.toggle("menu-opened");
        setIsMenuOpen(!isMenuOpen);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (success) {
            setTimeout(() => {
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? "animate-enter" : "animate-leave"
                            } border-gold max-w-md w-full bg-dark-gray shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    {/* <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt=""
                                /> */}
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium project-details">
                                        Devon Tully
                                    </p>
                                    <p className="mt-1 text-sm project-details">
                                        Hey! Thanks for reaching out. I'll get back to you as soon
                                        as possible ✨
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gold-bl">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium  focus:outline-none dev button-gold "
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ));
            }, 1000);
        }
    }, [success]);

    return (
        <div id="header" className=" header">
            <a target="_blank" href="https://github.com/DTully2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute items-center z-10 top-8 w-10 h-10 cursor-pointer left-10 fade-inplace github-link"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </a>
            <div className="absolute z-50 items-center right-10 top-10 menu-text group">
                <div className="relative flex items-center">
                <span
                        className="hidden mr-10 text-2xl cursor-pointer sm:flex menu-text dev fade-inplace g-hover"
                        onClick={() => toggleModal()}
                    >
                        Contact
                    </span>
                    <span
                        className="hidden mr-10 text-2xl cursor-pointer sm:flex menu-text dev fade-inplace g-hover"
                        onClick={() => scroll.scrollToBottom()}
                    >
                        Projects
                    </span>
                
                    <span className="hidden mr-10 text-2xl cursor-pointer sm:flex menu-text dev fade-inplace g-hover">
                        About
                    </span>
                    <div className="flex items-center sm:hidden g-hover">
                        <span
                            className={`text-2xl cursor-pointer fade-inplace ${isMenuOpen ? "gold-text" : ""
                                }`}
                            onClick={() => toggleMenuOpen()}
                        >
                            Menu
                        </span>
                        <div
                            onClick={() => toggleMenuOpen()}
                            className="z-50 cursor-pointer fade-inplace burger-container"
                        >
                            <div id="burger">
                                <div className="bar topBar"></div>
                                <div className="bar btmBar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    // Define default options

                    // Default options for specific types
                    custom: {
                        duration: 99000,
                    },
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                }}
            />

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="z-30 mymodal overflow-y-none"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
                ariaHideApp={false}
            >
                <ContactModal toggleModal={toggleModal} setSuccess={setSuccess} />
            </Modal>
            {isMenuOpen && (
                <section className="absolute top-0 left-0 right-0 mx-auto h-min bg-dark-gray">
                    <ul className="menu">
                        <li className="menu-item">
                            <p href="#"></p>
                        </li>
                        <li className="menu-item">
                            <button
                                onClick={() => scroll.scrollToBottom()}
                                className="w-full mb-2 text-7xl menu-text g-hover"
                            >
                                Projects
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="w-full mb-2 text-7xl menu-text g-hover">
                                About
                            </button>
                        </li>
                        <li className="menu-item">
                            <button
                                onClick={() => toggleModal()}
                                className="w-full mb-2 text-7xl menu-text g-hover"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </section>
            )}
        </div>
    );
}

export default Nav;
