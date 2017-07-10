import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import './assets/skeleton.css';
import './assets/App.css';

function Project (props){
	const styles = {
		chip: {
			display: "inline-block",
			margin: 4,
		},
		header: {
			"paddingRight" : 0
		}
	}
	const technologies = props.technologies
												.map((x) => <Chip key={x} style={styles.chip}> {x} </Chip>)

	return (
		<a href={props.link}>
			<Card>
				<CardHeader
					title={props.name}
					subtitle={props.description}
					textStyle	={styles.header}
				/>
				<CardActions>
					{technologies}
				</CardActions>
			</Card>
		</a>
	)
}

class ProjectTable extends Component {

	searchFilter(query){
		console.log(typeof(query))
		query = query.trim().toLowerCase();

		return (app) => {
			if (query === "" ||
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
										.filter(this.searchFilter(this.props.query))
										.sort( (p1, p2) => p2.quality - p1.quality )
										.map( project => {
											return (
												<div className="project four columns">
													<Project
														name={project.name}
														link={project.link}
														inProgress={project.inProgress}
														img={project.img}
														description={project.description}
														technologies={project.technologies}
														category={project.category}
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
	state = {
    dataSource: [],
  };

  render() {
    return (
      <div className="header">
        <AutoComplete
          hintText="Type anything (ex. 'React')"
          dataSource={this.state.dataSource}
          onUpdateInput={this.props.handleUpdateInput}
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

	handleUpdateInput = (value) => {
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
					/>
				</div>
			</MuiThemeProvider>
		)

	}
}

export default App;
