import React, {Component} from 'react';
import axios from 'axios';

const Application = props =>(
    <tr>
        <td>{props.application.username}</td>
        <td>{props.application.company}</td>
        <td>{props.application.link}</td>
        <td>{props.application.position}</td>
        <td>{props.application.data}</td>
    </tr>
)

export default class ApplicationList extends Component{

    constructor(props){
        super(props);

        this.state = {applications : []};
        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/applications/')
            .then(response => 
            {
                this.setState({applications : response.data})
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    applicationList(){
        return this.state.applications.map(currentapplication => {
            return <Application application={currentapplication}/>;
        })
    }

    render(){
        return(
            <div>
                <h3>Applications</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Company</th>
                            <th>Link</th>
                            <th>Position</th>
                            <th>Date</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {this.applicationList()}
                    </tbody>
                </table>
            </div>
        );
    }
}