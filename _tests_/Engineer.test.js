const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Suzie', 2, 'suzie@gmail.com', 'suzieQ');
const engineerObj = {
    name: 'Suzie',
    id: 2,
    email: 'suzie@gmail.com',
    github: 'suzieQ'
};

test('creates an engineer object', () => {
    expect(engineer).toEqual(engineerObj);
});

test('get engineer GitHub account name', () => {
    expect(engineer.getGitHub()).toEqual(engineerObj.github);
});

test('get employee role', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});