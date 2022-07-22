const Intern = require('../lib/Intern');

const intern = new Intern('Carlos', 44, 'carlos@harvard.edu', 'Harvard');
const internObj = {
    name: 'Carlos',
    id: 44,
    email: 'carlos@harvard.edu',
    school: 'Harvard'
};

test('creates an intern object', () => {
    expect(intern).toEqual(internObj);
});

test('get intern school name', () => {
    expect(intern.getSchool()).toEqual(internObj.school);
});

test('get employee role', () => {
    expect(intern.getRole()).toEqual('Intern');
});