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
		return (app) => {
			if (app.tags.has(query.strip()))
				return true;

			else
				return query.split().some(q => app.tags.has(q));
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
		/*
		let projects = this.props.projects
								.filter(this.searchFilter(this.props.query))
								.filter(this.categoryFilter(this.props.category))
								.sort()
		*/


		let projects = this.props.projects.map( project => {
			return <div className="project four columns">
				<Project
					name={project.name}
					link={project.link}
					inProgress={project.inProgress}
					img={project.img}
					description={project.description}
					technologies={project.technologies}
					category={project.category}
					date={project.date}
					quality={project.quality}
					tags={project.tags}
					key={project.name}
				/>
			</div>
		})

		projects = this.chunk(projects, 3).map(
			row => {
				return <div className="row" key={row[0].name}>
									{row[0]} {row[1]} {row[2]}
							 </div>
					 }
		);

		console.log(projects)

		return <div> {projects} </div>

	}
}

// receives all user input
class InputBar extends Component {
	state = {
    dataSource: [],
  };

	handleUpdateInput = (value) => {
		
	}

  render() {
    return (
      <div className="header">
        <AutoComplete
          hintText="Search"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }
}

class App extends Component {

	render(){
		return (
			<MuiThemeProvider>
				<div className="container">
					<InputBar
					/>

					<ProjectTable
						projects={this.props.projects}
						query=""
						category=""
					/>
				</div>
			</MuiThemeProvider>
		)

	}
}

export default App;
