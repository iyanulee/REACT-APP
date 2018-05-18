import React, {Component} from 'react';
import axios from 'axios';
import './student-list.css'

import Tablebody from '../TableComponent/tableBody'

import { Table } from 'react-bootstrap';

class Studentlist extends Component{

    state = {
        students : [],
        dept : undefined
    }

    componentWillMount(){
        console.log("componentWillMount called");
        axios.get('https://my-json-server.typicode.com/karthi13/json-placeholder/students')
            .then(
                (response) => {
                    console.log(response.data);
                    this.setState({ students: response.data})
                }
            );
    }

    render ()
    {
        console.log(this.props.location.state);


        const tableData = this.state.students.map((record,index)=>{
            if ((this.props.location.state  &&
                this.props.location.state['dept'] === record.dept) || this.props.location.state === undefined ) {
                return (
                    <Tablebody
                        key={index}
                        id={record.id}
                        name={record.name}
                        age={record.age}
                        dept={record.dept}
                        year={record.year}
                        rollNo={record.rollNo}
                        gender={record.gender}
                    />

                );
            }else{
                return;
            }
            
        });

        console.log(tableData)

        return (
            <div className="excite">
                student list works!!!
                <Table striped bordered condensed hover>
                    <thead>
                        <tr >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Dept</th>
                            <th>Age</th>
                            <th>Year</th>
                            <th>Roll No</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </Table>
            </div>
        );
    }

}

export default Studentlist;