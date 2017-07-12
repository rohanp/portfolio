import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import github from './assets/github.png';
import './assets/skeleton.css';
import './assets/App.css';

function Project (props){
	const styles = {
		chip: {
			display: "inline-block",
			margin: 4,
		},
		header: {
			paddingRight: 0
		},
		cardMedia: {
			marginRight: 20,
			marginLeft: 15,
			marginBottom: 10,
			border: "8px solid black",
			borderRadius: 2
		}
	}
	const technologies = props.technologies
												.map((x) => <Chip key={x} style={styles.chip}> {x} </Chip>)

	if (props.github){
		var githubLink = <a className="github" href={props.github}> <img src={github}/> </a>;
	}

	if (props.img){
		if (props.img.indexOf(".mp4") !== -1)
			var img =  <video autoPlay loop muted timeupdate={() => console.log("here")}> <source src={props.img} type="video/mp4"/> </video>;
		else
			var img = <img src={props.img} />;

		var media = (
						<a href={props.link}>
							<CardMedia style={styles.cardMedia}>
								{img}
							</CardMedia>
						</a>
					);
	}

	return (
		<div className="card">
			{githubLink}
				<Card>
					<CardHeader
						title={props.name}
						subtitle={props.description}
						textStyle={styles.header}
					/>
				{media}
				<CardActions>
					{technologies}
				</CardActions>
				</Card>
		</div>

	)
}

class ProjectTable extends Component {

	searchFilter(query){
		console.log(typeof(query))
		query = query.trim().toLowerCase();

		return (app) => {

			if (app.antitags && app.antitags.includes(query)){
				return false
			}

			else if (query === "" ||
				  app.tags.some( tag => tag.indexOf(query) !== -1 ) ||
					app.technologies.some( tech => tech.toLowerCase().indexOf(query) !== -1 ))
				return true;

			else
				return query.split().some(q => app.tags.includes(q));
		};
	}

	categoryFilter(category){
		return (app) => {
			if (category === null)
				return true;
			else
				return app.category === category;
		};
	}

	chunk = (list, chunkSize) => {
		return new Array(Math.ceil(list.length / chunkSize)).fill("")
		    .map(function() { return this.splice(0, chunkSize) }, list.slice());
	}


	render() {

		let projects = this.props.projects
										.filter(this.categoryFilter(this.props.category) &&
														this.searchFilter(this.props.query))
										.sort( (p1, p2) => p2.quality - p1.quality )
										.map( project => {
											return (
												<div className="project four columns">
													<Project
														name={project.name}
														link={project.link}
														github={project.github}
														inProgress={project.inProgress}
														img={project.img}
														description={project.description}
														technologies={project.technologies}
														date={project.date}
														key={project.name}
													/>
												</div>
											);
										})

		projects = this.chunk(projects, 3).map(
			row => {
				return <div className="row" key={row[0].name}>
									{row[0]} {row[1]} {row[2]}
							 </div>
					 }
		);

		return <div> {projects} </div>

	}
}

// receives all user input
class InputBar extends Component {

  render() {
    return (
      <div className="header">
        <TextField
          hintText="Type anything (ex. 'React')"
          onChange={this.props.handleUpdateInput}
        />
      </div>
    );
  }
}

class App extends Component {

	constructor() {
		super()

		this.state = {
			query: ""
		}
	}

	handleUpdateInput = (e, value) => {
		this.setState({query: value})
	};

	render(){
		return (
			<MuiThemeProvider>
				<div className="container">
					<InputBar
						handleUpdateInput={this.handleUpdateInput}
					/>

					<ProjectTable
						projects={this.props.projects}
						query={this.state.query}
						category={this.props.category}
					/>
				</div>
			</MuiThemeProvider>
		)

	}
}

export default App;
