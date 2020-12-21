import react from 'react';

const Employee = (props) => {
    const { firstName, lastName,age } = props;
    return (
        <h5>
            Employee Name : {firstName} {lastName} with age of : {age}</h5>
    
    )};

export default Employee;