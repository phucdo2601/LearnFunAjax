const express = require('express');
const router = express.Router();

// employees data
var employees = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Wilson',
        email: 'john@gmail.com',
        gender: 'Male',
        ip_address: '127.0.0.1'
    },
    {
        id: 2,
        first_name: 'Billy',
        last_name: 'Stone',
        email: 'billy@gmail.com',
        gender: 'Male',
        ip_address: '127.0.0.1'
    },
    {
        id: 3,
        first_name: 'Marina',
        last_name: 'Jill',
        email: 'marina@gmail.com',
        gender: 'Female',
        ip_address: '168.125.12.23'
    }
];

// REST API Configuration

// GET Employee id
let getId = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
}

// GET Employees
router.get('/employees', (request, response) => {
    response.json(employees);
});

// POST Request
router.post('/employees', (request, response) => {
    let employee = {
        id: getId(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    };
    employees.push(employee);
    console.log(`POST REQUEST Recieve at server ... ${new Date().toLocaleDateString()}`);

    response.json({
        msg: 'POST REQUEST IS SUCCESS',
    });
});

// PUT REQUEST
router.put(`/employees/:id`, (request, response) => {
    let empId = request.params.id;

    let updateEmp = {
        id: empId,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    };

    let existingEmp = employees.find((employee) => {
        return employee.id === empId;
    });

    // replace the existing employee
    employees.splice(employees.indexOf(existingEmp), 1, updateEmp);
    console.log(`PUT REQUEST Recieve at server ... ${new Date().toLocaleDateString()}`);

    response.json({
        msg: 'PUT REQUEST IS SUCCESS',
    });
});

// DELETE REQUEST
router.delete('/employees/:id', (request, response) => {
    let empId = request.params.id;
    employees = employees.filter((employee) => {
        return e, employee.id !== empId;
    });

    console.log(`DELETE REQUEST Recieve at server ... ${new Date().toLocaleDateString()}`);

    response.json({
        msg: 'DELETE REQUEST IS SUCCESS',
    });
});

module.exports = router;