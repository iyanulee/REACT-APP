import React, { Component } from 'react';
import axios from 'axios';

import './add-student.css';

class Addstudent extends Component {
    state = {
        id : 27,
        name: '',
        dept: '',
        age : '',
        year : '',
        rollNo : '',
        gender : '',
    }

    submit = (e) => {
        e.preventDefault();
        //this.props.onSubmit(this.state);
        axios.post('https://my-json-server.typicode.com/karthi13/json-placeholder/students', this.state).
                then( (response) => {
                    console.log(response);
                    
                }
        );
        console.log(this.state);
    }

    render() {
        console.log(this.props);
        return (
            <div className="excite">
                <form>
                    Name : <input
                                name='name'
                                placeholder='Name'
                                value={this.state.name}
                                onChange={(e) => this.setState({
                                    name: e.target.value
                                })}
                            />
                    <br/>        
                    Dept : <input
                        name='dept'
                        placeholder='Dept'
                        value={this.state.dept}
                        onChange={(e) => this.setState({
                            dept: e.target.value
                        })}
                    />
                    <br/>
                    Age : <input
                        name='age'
                        placeholder='Age'
                        value={this.state.age}
                        onChange={(e) => this.setState({
                            age: e.target.value
                        })}
                    />
                    <br />
                    Year : <input
                        name='year'
                        placeholder='Year'
                        value={this.state.year}
                        onChange={(e) => this.setState({
                            year: e.target.value
                        })}
                    />
                    <br />
                    RollNo : <input
                        name='rollNo'
                        placeholder='RollNo'
                        value={this.state.rollNo}
                        onChange={(e) => this.setState({
                            rollNo: e.target.value
                        })}
                    />
                    <br />
                    Gender : <input
                        name='gender'
                        placeholder='Gender'
                        value={this.state.gender}
                        onChange={(e) => this.setState({
                            gender: e.target.value
                        })}
                    /> 
                    <br /> 

                    <button onClick={(e) => this.submit(e)}>submit</button>      
                </form>

            </div>
        );
    }

}

export default Addstudent;