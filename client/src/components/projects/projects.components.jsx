import React, { useState } from "react";
import Project from "./Project.components";
import "./projects.styles.scss";

export default function Projects({ projects }) {
    const [angle, setAngle] = useState(0);
    const spinnerController = (sign) => {
        const projects = document.querySelector(".projects");
        if (!sign) {
            setAngle(angle + 45);
        } else {
            setAngle(angle - 45);
        }
        projects.setAttribute(
            "style",
            "-webkit-transform: rotateY(" +
                angle +
                "deg); -moz-transform: rotateY(" +
                angle +
                "deg); transform: rotateY(" +
                angle +
                "deg);"
        );
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="projects">
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
                <div className="project-controls">
                    <span
                        className="controller"
                        onClick={(event) => {
                            spinnerController("-");
                        }}
                    >
                        &lt;
                    </span>
                    <span
                        className="controller"
                        onClick={(event) => {
                            spinnerController("");
                        }}
                    >
                        &gt;
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}
