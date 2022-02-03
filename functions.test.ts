const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE

    const testArray =['this', 'thing', 'better', 'work', '!'];
    const shuffledArray = shuffleArray(testArray);
    
    test("shuffleArray should return an array of the same length as the argument sent in", () => {
        expect(shuffledArray.length).toEqual(testArray.length)
    })

    test("check that things have been shuffled", () => {
        expect(shuffledArray).not.toEqual(testArray)
    })

    test("shuffleArray should return an array", () => {
        expect(Array.isArray(shuffledArray)).toBe(true)
    })
})