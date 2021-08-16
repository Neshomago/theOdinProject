const removeFromArray = require("./removeFromArray")
// @ponicode
describe("removeFromArray", () => {
    test("0", () => {
        let param1 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            removeFromArray(param1, "Saint-Denis")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"]]
        let callFunction = () => {
            removeFromArray(param1, "Saint-Denis")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            removeFromArray(param1, "Skhirat")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            removeFromArray(param1, "New York")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let callFunction = () => {
            removeFromArray(param1, "Saint-Denis")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            removeFromArray(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
