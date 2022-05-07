const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner")
const Employee = require("../lib/Employee")

test('creates employee object', () => {
    const employee = new Employee("Christine");
    
    expect(employee.name).toBe("Christine");
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})