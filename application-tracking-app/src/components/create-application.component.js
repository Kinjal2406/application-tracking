import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateApplication extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:'',
            company:'',
            link:'',
            position:'',
            date:new Date(),
            users: []
        }
    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user'  
        })
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onChangeCompany(e){
        this.setState({
            company:e.target.value
        });
    }

    onChangeLink(e){
        this.setState({
            link:e.target.value
        });
    }

    onChangePosition(e){
        this.setState({
            position:e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date:date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const application = {
            username: this.state.username,
            company: this.state.company,
            link: this.state.link,
            position: this.state.position,
            date: this.state.date
        }

        console.log(application);

        //window.location = '/';
    }

    render(){
        return(
            <div>
                <h3>Create new application log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Usename: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option 
                                        key = {user}
                                        value= {user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Company: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.company}
                            onChange={this.onChangeCompany}
                        />
                    </div>

                    <div className="form-group">
                        <label>Link:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.link}
                            onChange={this.onChangeLink}
                        />
                    </div>

                    <div className="from-group">
                        <label>Position:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.onChangePosition}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <DatePicker
                                selected = {this.state.date}
                                onChange = {this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create application log" className="btn btn-primary"/>
                    </div>
                </form>
                        
            </div>
        )
    }
}