import React from "react";

function ProjectCard({ project }) {

    const onClick = (url) => {
        window.open(url, "_blank");
    }


    return (
        <div
            role="listitem"
            className="absolute left-0 right-0 z-30 flex w-3/4 mx-auto mt-3 text-white rounded-lg shadow cursor-default bg-light-gray bottom-20"
        >
            <div className="w-10 h-auto bg-gold rounded-tl-md rounded-bl-md"></div>
            <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-light-gray
                relative
               mb-8
               "
            >
                <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                
                  "
                ></div>
                <h4 className="absolute left-0 right-0 mx-auto  text-5xl font-semibold top-8 gold-text">
                    {project?.name}
                </h4>
                <p className="text-body-color project-details">{project?.desc}</p>
                <div className="flex items-center justify-center mt-8">
                    <div className="mx-auto">
                        <button onClick={() => onClick(project.code)} className="btn btn-1 hover-filled-slide-down">
                            <span>View Code</span>
                        </button>

                        <button onClick={() => onClick(project.url)} className="btn btn-1 hover-filled-slide-down">
                            <span>Visit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
