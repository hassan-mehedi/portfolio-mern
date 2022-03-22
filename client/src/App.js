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
            github: "https://github.com/hassan-mehedi/expense-tracker",
            live: "https://expense-tracker-mehedi.netlify.app/login",
        },
        {
            id: 2,
            name: "Movie Info",
            description:
                "A simple movie info application that allows users to search for movies and get information about them.",
            image: "./movie_app.png",
            technologies: ["React", "Public API"],
            github: "https://github.com/hassan-mehedi/Movies",
            live: "https://movie-with-mehedi.herokuapp.com/",
        },
        {
            id: 3,
            name: "Quiz App",
            description: "A simple quiz application that uses a public API to answer questions.",
            image: "./quiz_app.png",
            technologies: ["React", "Public API"],
            github: "https://github.com/hassan-mehedi/Quiz-App",
            live: "https://mehedis-quiz-app.netlify.app/",
        },
        {
            id: 4,
            name: "Tic Tac Toe",
            description: "A simple tic tac toe game that allows users to play against a another local player.",
            image: "./tic_tac_toe.png",
            technologies: ["React"],
            github: "https://github.com/hassan-mehedi/tic-tac-toe-game",
            live: "https://tic-tac-toe-online.netlify.app/",
        },
        {
            id: 5,
            name: "Flappy Bird",
            description: "A simple flappy bird game. To play, touch the screen to make the bird jump or press spacebar",
            image: "./flappy_bird.png",
            technologies: ["HTML", "Canvas", "CSS", "JavaScript"],
            github: "https://github.com/hassan-mehedi/flappy-bird-version-2",
            live: "https://m-flappy-bird.netlify.app/",
        },
        {
            id: 6,
            name: "Space Shooters",
            description:
                "A simple space shooter game that allows users to play against a computer. Press 'f' to fire and 'arrow' keys to move",
            image: "./space_shooter.png",
            technologies: ["HTML", "Canvas", "CSS", "JavaScript"],
            github: "https://github.com/hassan-mehedi/Space-Shooter",
            live: "https://space-shooter-mehedi.netlify.app/",
        },
        {
            id: 7,
            name: "Crop Prediction",
            description:
                "A simple crop prediction application that allows users to input various field data and get a prediction of the suitable crop. User can also see graphs of the data.",
            image: "./crop_prediction.png",
            technologies: ["Streamlit", "Python", "ML"],
            github: "https://github.com/hassan-mehedi/crop-prediction-english-v2",
            live: "https://crop-prediction-v2.herokuapp.com/",
        },
        {
            id: 8,
            name: "Chat App",
            description:
                "Chat app that allows users to chat with each other. It also allows users to create groups and send messages to them.",
            image: "./chat_app.png",
            technologies: ["React", "Socket.io"],
            github: "https://github.com/hassan-mehedi/chat-app",
            live: "https://chat-application-mehedi.netlify.app/",
        },
        {
            id: 9,
            name: "Gym Website",
            description: "A demo website for a gym where user can see the details of the gym.",
            image: "./gym_demo.png",
            technologies: ["HTML", "SCSS", "JavaScript"],
            github: "https://github.com/hassan-mehedi/gym-website",
            live: "https://dhaka-body-fitness-gym.netlify.app/",
        },
    ];
    return (
        <div className="App">
            <Projects projects={projects} />
        </div>
    );
}

export default App;
