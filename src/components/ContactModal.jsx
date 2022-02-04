import React from "react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function ContactModal({ toggleModal, setSuccess }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;


    const sendEmail = () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        console.log("message", message);
        if (message === "") {
            console.log("message2", message);
            toast.error("Please enter a message", {});
            setError(true);
            setIsSubmitting(false);
            return;
        }
        const templateParams = {
            name: name,
            message: message,
            email: email,
            phone: phone,
        };

        const test = toast.promise(
            emailjs.send(serviceId, templateId, templateParams, userId),
            {
                loading: "Loading",
                success: "Thank you for your message!",
                error: "Error sending message",
            },
        );
        test.then((rez) => {
            if (rez.status === 200) {
                setTimeout(() => {
                    toggleModal();
                    setSuccess(true);
                }, 1000);
            }

        });
    };
    useEffect(() => {
        if (error) {
            console.log("err");
        }
    }, [error]);

    return (
        <div className="flex mx-auto mt-3 text-white rounded-lg shadow cursor-default overflow-y-none contact-input bg-light-black bottom-20">
            <Toaster
                toastOptions={{
                    // Define default options
                    className: '',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                }}
            />
            <div
                className="
                overflow-y-none
               rounded-[20px]
               bg-light-black
            
               mb-8
               "
            >
                <div className="flex items-center justify-center mb-4 bg-primary rounded-2xl"></div>
                <button
                    onClick={toggleModal}
                    className="absolute cursor-pointer g-hover top-2 right-2"
                >
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </a>
                </button>
                <h4 className="text-5xl font-semibold top-7 gold-text">Contact Me</h4>
                <p className="pt-2 text-xl text-left dev">Name</p>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="on"
                    className="w-full p-2 my-2 text-xl text-white border-none rounded-lg  dev"
                    type="name"
                    placeholder="Name"
                />
                <p className="text-xl text-left dev">Email</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="on"
                    className="w-full p-2 my-2 text-xl text-white border-none rounded-lg dev "
                    type="email"
                    placeholder="Email"
                />
                <p className="text-xl text-left dev">Phone</p>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    autoComplete="on"
                    className="w-full p-2 my-2 text-xl text-white border-none rounded-lg dev "
                    type="phone"
                    placeholder="Phone"
                />
                <p className={`float-left ml-1 text-xl dev`}>Message*</p>

                <textarea
                    autoFocus={error}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows="4"
                    className="w-full p-2 my-2 text-xl text-white border-none rounded-lg dev "
                    type="text"
                    placeholder="Message"
                />
                <div className="flex items-center justify-center ">
                    <div className="mx-auto">
                        <button
                            onClick={toggleModal}
                            className="btn btn-1 hover-filled-slide-down"
                        >
                            <span>Close</span>
                        </button>
                        {/* <button onClick={toggleModal} target="_blank" className="px-4 py-2 mr-2 bg-black rounded-md cursor-pointer dev ">Close</button> */}
                        {/* <button onClick={sendEmail} type="submit" value="Send" className="px-4 py-2 ml-2 bg-black rounded-md cursor-pointer dev" >Send </button> */}
                        <button
                            onClick={sendEmail}
                            className="btn btn-1 hover-filled-slide-down"
                        >
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
