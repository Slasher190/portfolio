// import { AirOutlined } from '@mui/icons-material';
import { Button, Typography } from "@mui/material";
import React from 'react';
import "./Projects.css";
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin= false,
}) => {
    return(
        <>
            <a href={url} className="projectCard" target="blank">
                <div>
                    <img src={projectImage} alt="Project"/>
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4">About Project</Typography>
                    <Typography>{description}</Typography> 
                    <Typography variant='h6'>Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {
                isAdmin && (
                    <Button style={{color: "rgba(40, 40, 40, 0.7"}}>
                        <Delete/>
                    </Button>
                )
            }
        </>
    )
}

const Projects = () => {
    const projects = [1,2,3];
  return (
    <div className='projects'>
        <Typography variant="h3">
            Projects <AiOutlineProject/>
        </Typography>
        <div className="projectsWrapper">
            {
                projects.map((project, index) => (
                    <ProjectCard 
                        url="https://github.com/Slasher190/frontend"
                        projectImage="https://www.seekpng.com/png/small/28-284690_%E0%A5%AA-mor-pankh-with-bansuri.png"
                        projectTitle="Profile"
                        description="Resume for the Fullstack Development and very anxios to show this thing for this items..."
                        technologies="MERN Stack"
                    />
                ))
            }
        </div> 
        <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
            All The Projects Shown Above Are Made By Me <FaRegSmileWink />
        </Typography>
    </div>
  );
};

export default Projects;