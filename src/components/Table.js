import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}
	componentWillReceiveProps({nextProps}) {
		console.log(nextProps)
		let users = [...this.state.users];
		switch(nextProps){
			case "age":
				users.sort(this.compareByAge);
				break;
			case "name":
				users.sort(this.compareByName)
				break;
		    case "points":
				users.sort(this.compareByPoints)
				break;
			case "rank":
				users.sort(this.compareByRank)
				break;
			default:
		}
		this.setState({ users:users })
	}
	// complete the comparators
	compareByAge(a, b) {
		return (a.age - b.age);
	}

	compareByName(a, b) {
		if (a.name > b.name){
			return 1;
		}
		else if(a.name < b.name){
			return -1;
		}
		else{
			return 0;
		}
	}
	
	compareByPoints(a, b) {
		return (a.points - b.points);
	}

	compareByRank(a, b) {
		return (a.rank - b.rank);
	}

	render(){
		const displayTable = this.state.users.map((item) => {
			return (
			<tr key = {item.age}>
				<td>{item.age}</td>
				<td>{item.name}</td>
				<td>{item.points}</td>
				<td>{item.rank}</td>
			</tr>
			)
		});
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{displayTable}
				</tbody>
			</table>
		</div>)
	}
}
