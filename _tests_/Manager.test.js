const Manager = require('../lib/Manager');

const manager = new Manager('Kathy', 1, 'kathy@gmail.com', 1);
const managerObj = {
    name: 'Kathy',
    id: 1,
    email: 'kathy@gmail.com',
    officeNumber: 1
};

test('creates an manager object', () => {
    expect(manager).toEqual(managerObj);
});

test('get manager GitHub account name', () => {
    expect(manager.officeNumber).toEqual(managerObj.officeNumber);
});

test('get employee role', () => {
    expect(manager.getRole()).toEqual('Manager');
});