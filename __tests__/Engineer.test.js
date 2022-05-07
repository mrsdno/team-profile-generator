const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

test('creates intern object', () => {
    const engineer = new Engineer("Christine");
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})