import React from 'react';

const tableBody = (props) => {

    return (
       
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.dept}</td>
                <td>{props.age}</td>
                <td>{props.year}</td>
                <td>{props.rollNo}</td>
                <td>{props.gender}</td>
            </tr>
        

    );

}

export default tableBody;