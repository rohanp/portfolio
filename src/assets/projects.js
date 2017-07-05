const PROJECTS = [
	{
		name: "Vector Field",
		link: "http://vf.rohanp.xyz",
		inProgress: false,
		img: "assets/vectorfield.mp4",
		description: "Simulate the flow of vector fields and visualize divergence and curl",
		technologies: ["Javascript", "three.js"],
		category: "web",
		date: new Date("January 2015"),
		quality: 9,
		tags: new Set(["vector", "field", "vectorfield", "web", "visualization",
									"three", "threejs", "javascript", "webgl", "frontend", "front"]),
	}, {
		name: "Quantum Tic Tac Toe",
		link: "http://qttt.rohanp.xyz",
		inProgress: true,
		img: "assets/qttt.mp4",
		description: "Tic tac toe, but with quantum entanglement and superposition!",
		technologies: ["React.js", "Node.js", "Socket.io", "ES6+",],
		category: "web",
		date: new Date("May 2017"),
		quality: 10,
		tags: new Set(["quantum", "tic-tac-toe", "tictactoe", "tic tac toe", "web", "js",
									 "javascript", "angular.js", "angular", "front-end", "front end",
								 	 "node", "sockets", "socket", "fullstack", "backend", "frontend",
									 "full", "back", "front"])
	}, {
		name: "Messenger Grapher",
		link: "https://github.com/rohanp/MessengerGrapher",
		inProgress: false,
		img: "assets/messengergrapher.png",
		description: "Scrapes and creates graphs out of Facebook messaging data",
		technologies: ["Python", "Pandas", "BeautifulSoup", "Matplotlib"],
		category: "data",
		date: new Date("January 2017"),
		quality: 6,
		tags: new Set(["data analysis", "facebook", "numpy", "scipy", "data science"])
	}, {
		name: "MemeBot",
		link: "https://github.com/rohanp/MemeBot",
		inProgress: false,
		img: "assets/memebot.png",
		description: "Delivers fresh memes to facebook inboxes daily. Now includes interactivity!",
		technologies: ["Node.js"],
		category: "web",
		date: new Date("December 2016"),
		quality: 2,
		tags: new Set(["node", "javascript", "backend", "back"])
	}, {
		name: "VacationBot",
		link: "https://github.com/rohanp/VacationBot",
		inProgress: false,
		img: "assets/vacationbot.mp4",
		description: "Automatically responds to Facebook messages while you are away.",
		technologies: ["Node.js"],
		category: "web",
		date: new Date("August 2016"),
		quality: 5,
		tags: new Set(["node", "javascript", "facebook", "backend", "back"])
	}, {
		name: "iCU.fyi",
		link: "http://icu.fyi",
		inProgress: false,
		img: "assets/icufyi.png",
		description: "A Columbia internal matchmaking platform with 600+ users.",
		technologies: ["Flask", "MongoDB", "Heroku"],
		category: "web",
		date: new Date("April 2017"),
		quality: 9,
		tags: new Set(["mongo", "database", "databases", "full stack", "front end", "front-end", "front"])
	}, {
		name: "Pokemon Go Bot",
		link: "https://github.com/rohanp/pokemon-go-bot",
		inProgress: false,
		img: "assets/pokemongobot.png",
		description: "A bot that autonomously plays Pokemon Go by walking around psuedo-humanly, farming pokemon, and restocking on items when low.",
		technologies: ["Node.js", "API design", "ES6+"],
		category: "web",
		date: new Date("August 2016"),
		quality: 8,
		tags: new Set(["javascript", "node", "api", "backend", "back"])
	}, {
		name: "Ezel",
		link: "",
		inProgress: false,
		img: "assets/ezel.png",
		description: "A multi device (iPad, iPhone, and Android) digital easel for creating artwork.",
		technologies: ["Node.js"],
		category: "hardware",
		date: new Date("January 2015"),
		quality: 7,
		tags: new Set(["server", "backend", "back", "node"])
	}, {
		name: "Locally scaled diffusion map",
		link: "https://github.com/rohanp/LDFMap",
		inProgress: false,
		img: "assets/ldfmap.png",
		description: "An open source implementation of the Locally Scaled Diffusion Map (LDFMap) dimensionality reduction technique.",
		technologies: ["Python", "Cython", "NumPy"],
		category: "data",
		date: new Date("June 2015"),
		quality: 4,
		tags: new Set(["open source", "scipy", "pandas", "data science"])
	}
]

export default PROJECTS
