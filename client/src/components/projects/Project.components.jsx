import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Project({ project }) {
    return (
        <Card sx={{ maxWidth: 345 }} className="project">
            <CardMedia component="img" alt={project.name} height="200" image={project.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography sx={{ mb: 2 }} variant="body2" color="textSecondary" component="p">
                    {project.technologies.join(" | ")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={(event) => window.open(project.github, "_blank")}>
                    GitHub
                </Button>
                <Button size="small" onClick={(event) => window.open(project.live, "_blank")}>
                    Live
                </Button>
            </CardActions>
        </Card>
    );
}
