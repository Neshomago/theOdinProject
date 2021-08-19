const sumAll = require("./sumAll")
// @ponicode
describe("sumAll", () => {
    test("0", () => {
        let callFunction = () => {
            sumAll(250, 243)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sumAll(254, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sumAll(161, 127)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sumAll(142, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sumAll(239, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sumAll(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
