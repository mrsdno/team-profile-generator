const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner")
const Manager = require("../lib/Manager")

test('creates manager object', () => {
    const manager = new Manager("Christine");
    
    expect(manager.name).toBe("Christine");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
})