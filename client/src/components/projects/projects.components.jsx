import React from "react";
import Project from "./Project.components";
import "./projects.styles.scss";

export default function Projects({ projects }) {
    return (
        <div className="projects">
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
}
