const Employee = require('../lib/Employee');

const employee = new Employee('Bob', 1, 'bob@gmail.com');
const employeeObj = {
    name: 'Bob',
    id: 1,
    email: 'bob@gmail.com'
};

test('creates an employee object', () => {
    expect(employee).toEqual(employeeObj);
});

test('get employee name', () => {
    expect(employee.getName()).toEqual(employeeObj.name);
});

test('get employee ID', () => {
    expect(employee.getId()).toEqual(employeeObj.id);
});

test('get employee email', () => {
    expect(employee.getEmail()).toEqual(employeeObj.email);
});

test('get employee role', () => {
    expect(employee.getRole()).toEqual('Employee');
});