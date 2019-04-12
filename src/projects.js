const PROJECTS = [
	{
		name: "Vector Field",
		github: "https://github.com/rohanp/vectorfield",
		link: "http://vf.rohanp.xyz",
		inProgress: false,
		img: "https://s3.amazonaws.com/rohanp/vf.gif",
		description: "Simulate the flow of vector fields and visualize divergence and curl",
		technologies: ["Javascript", "three.js"],
		category: "web",
		date: new Date("January 2015"),
		quality: 9,
		tags: ["vector", "field", "vectorfield", "web", "visualization",
					 "three", "threejs", "javascript", "webgl", "frontend", "front"],
		antitags: ["java"],
	}, {
		name: "Quantum Tic Tac Toe",
		github: "https://github.com/rohanp/QuantumTicTacToe",
		link: "http://qttt.rohanp.xyz",
		inProgress: true,
		img: "https://s3.amazonaws.com/rohanp/qttt.gif",
		description: "Tic tac toe, but with quantum entanglement and superposition!",
		technologies: ["React.js", "Node.js", "Socket.io", "ES6+",],
		category: "web",
		date: new Date("May 2017"),
		quality: 10,
		tags: ["quantum", "tic-tac-toe", "tictactoe", "tic tac toe", "web", "js",
					 "javascript", "angular.js", "angular", "front-end", "front end",
					 "node", "sockets", "socket", "fullstack", "backend", "frontend",
					 "full", "back", "front"],
		antitags: ["java"],
	}, {
		name: "Messenger Grapher",
		github: "https://github.com/rohanp/MessengerGrapher",
		img: "https://s3.amazonaws.com/rohanp/number_messaged_by_day3.png",
		inProgress: false,
		description: "Scrapes and creates graphs out of Facebook messaging data",
		technologies: ["Python", "Pandas", "BeautifulSoup", "Matplotlib"],
		category: "data",
		date: new Date("January 2017"),
		quality: 6,
		tags: ["data analysis", "facebook", "numpy", "scipy", "data science"],
	}, {
		name: "Roh Bot",
		github: "https://github.com/rohanp/MemeBot",
		img: "https://s3.amazonaws.com/rohanp/rohbot.gif",
		inProgress: false,
		description: "Rohan, but in bot form.",
		technologies: ["Node.js"],
		category: "web",
		date: new Date("December 2016"),
		quality: 2.5,
		tags: ["node", "javascript", "backend", "back"],
		antitags: ["java"],
	}, {
		name: "VacationBot",
		github: "https://github.com/rohanp/VacationBot",
		inProgress: false,
		description: "Automatically responds to Facebook messages while you are away.",
		technologies: ["Node.js"],
		category: "web",
		date: new Date("August 2016"),
		quality: 4,
		tags: ["node", "javascript", "facebook", "backend", "back"],
		antitags: ["java"],
	}, {
		name: "iCU.fyi",
		github: "https://github.com/rohanp/icu",
		link: "https://limitless-basin-89024.herokuapp.com/",
		inProgress: false,
		img: "	https://s3.amazonaws.com/rohanp/icu.gif",
		description: "A Columbia internal matchmaking platform with 600+ users.",
		technologies: ["Flask", "MongoDB", "Heroku"],
		category: "web",
		date: new Date("April 2017"),
		quality: 9,
		tags: ["python", "mongo", "database", "databases", "full stack", "front end", "front-end", "front"],
	}, {
		name: "Pokemon Go Bot",
		github: "https://github.com/rohanp/pokemon-go-bot",
		img: "https://s3.amazonaws.com/rohanp/pokemongo.png",
		inProgress: false,
		description: "A bot that autonomously plays Pokemon Go by walking around psuedo-humanly, farming pokemon, and restocking on items when low.",
		technologies: ["Node.js", "API design", "ES6+"],
		category: "web",
		date: new Date("August 2016"),
		quality: 5.5,
		tags: ["javascript", "node", "api", "backend", "back"],
		antitags: ["java"],
	}, {
		name: "Ezel",
		link: "https://devpost.com/software/ezel-2bb40",
		inProgress: false,
		img: "https://s3.amazonaws.com/rohanp/ezel.gif",
		description: "A multi device (iPad, iPhone, and Android) digital easel for creating artwork.",
		technologies: ["Node.js"],
		category: "hardware",
		date: new Date("January 2015"),
		quality: 6.7,
		tags: ["server", "backend", "back", "node"],
		antitags: ["java"],
	}, {
		name: "Locally scaled diffusion map",
		github: "https://github.com/rohanp/LDFMap",
		inProgress: false,
		description: "An open source implementation of the Locally Scaled Diffusion Map (LDFMap) dimensionality reduction technique.",
		technologies: ["Python", "Cython", "NumPy"],
		category: "data",
		date: new Date("June 2015"),
		quality: 4,
		tags: ["open source", "scipy", "pandas", "data science"],
		antitags: ["java"],
	}, {
		name: "WhatToWear",
		github: "https://github.com/rohanp/what-to-wear",
		inProgress: true,
		img: "https://s3.amazonaws.com/rohanp/whattowearcropped.gif",
		description: "An app to automate my daily clothing choices.",
		technologies: ["React-Native", "JavaScript", "ES6+"],
		category: "mobile",
		date: new Date("November 2017"),
		quality: 6.1,
		tags: ["mobile", "ios", "frontend", "react", "native"]
	}, {
		name: "IOUToken",
		github: "https://github.com/rohanp/IOUToken",
		inProgress: true,
		description: "An ERC-20 token derived from P2P loans",
		technologies: ["Solidity", "Truffle", "Gananche", "ES6+"],
		category: "blockchain",
		date: new Date("January 2018"),
		quality: 5.9,
		tags: ["blockchain", "token", "ethereum", "crypto"]
	}, {
		name: "Bessie",
		github: "",
		inProgress: false,
		img: "https://s3.amazonaws.com/rohanp/bessie.jpg",
		description: "A dorm room crypto miner.",
		technologies: ["Windows", "hardware"],
		category: "blockchain",
		date: new Date("December 2017"),
		quality: 7,
		tags: ["crypto", "blockchain", "ethereum"]
	}
]

export default PROJECTS;
