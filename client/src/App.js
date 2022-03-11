import "./App.css";
import Projects from "./components/projects/Projects.components";

function App() {
    const projects = [
        {
            id: 1,
            name: "Expense Tracker",
            description:
                "A simple expense tracker application that allows users to track their expenses and keep track of their budget.",
            image: "expense_tracker.png",
            technologies: ["React", "Firebase"],
            github: "",
            live: "",
        },
        {
            id: 2,
            name: "Movie Info",
            description:
                "A simple movie info application that allows users to search for movies and get information about them.",
            image: "./movie_app.png",
            technologies: ["React", "Public API"],
            github: "",
            live: "",
        },
        {
            id: 3,
            name: "Quiz App",
            description: "A simple quiz application that uses a public API to answer questions.",
            image: "./quiz_app.png",
            technologies: ["React", "Public API"],
            github: "",
            live: "",
        },
        {
            id: 4,
            name: "Tic Tac Toe",
            description: "A simple tic tac toe game that allows users to play against a another local player.",
            image: "./tic_tac_toe.png",
            technologies: ["React"],
            github: "",
            live: "",
        },
        {
            id: 5,
            name: "Flappy Bird",
            description: "A simple flappy bird game. To play, touch the screen to make the bird jump or press spacebar",
            image: "./flappy_bird.png",
            technologies: ["HTML", "Canvas", "CSS", "JavaScript"],
            github: "",
            live: "",
        },
        {
            id: 6,
            name: "Space Shooters",
            description:
                "A simple space shooter game that allows users to play against a computer. Press 'f' to fire and 'arrow' keys to move",
            image: "./space_shooter.png",
            technologies: ["HTML", "Canvas", "CSS", "JavaScript"],
            github: "",
            live: "",
        },
    ];
    return (
        <div className="App">
            <Projects projects={projects} />
        </div>
    );
}

export default App;
