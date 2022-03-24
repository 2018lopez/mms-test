
const sum = require('./sum')


test('add 5 + 6  = 11', () =>{
    expect(sum(5, 6)).toBe(11)
})

test('add 8 + 8  = 16', () =>{
    expect(sum(8, 8)).toBe(11)
})
