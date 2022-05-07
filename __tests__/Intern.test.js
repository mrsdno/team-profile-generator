const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")

test('creates intern object', () => {
    const intern = new Intern("Christine");
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})