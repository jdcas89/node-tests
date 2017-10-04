const utils = require('./utils')
const expect = require('expect')

describe('Utils', () => {
  describe('#add', () => {
    it('It should add two numbers', () => {
      var res = utils.add(35, 10)
      expect(res).toBe(45).toBeA('number')
    })
  
    it('It should async add two numbers', (done) => {
      var res = utils.asyncAdd(35, 10, (sum) => {
        expect(sum).toBe(45).toBeA('number')
        done()
      })
  
    })
  })
 
  describe('#square', () => {
    it('It should square a number', () => {
      var res = utils.square(5)
      expect(res).toBe(25).toBeA('number')
    })
  
    it('It should async square two numbers', (done) => {
      var res = utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number')
        done()
      })
    })
  })



  it('It should compare two objects', () => {

    // expect({name: 'Juan David'}).toBe({name: 'Juan David'})
    expect({
      name: 'Juan David'
    }).toEqual({
      name: 'Juan David'
    })

  })

  it('It should expect some values', () => {

    // expect({name: 'Juan David'}).toBe({name: 'Juan David'})
    expect({
      name: 'Juan David',
      age: 28,
      location: 'The Hague'
    }).toInclude({
      name: 'Juan David'
    })

  })

  it('It should verify first and last names are set', () => {
    var user = {
      location: 'The Hague',
      age: 28
    }
    var res = utils.setName(user, 'Juan Castellanos')
    expect(res).toBeA('object')
    expect(res).toInclude({
      firstName: 'Juan',
      lastName: 'Castellanos'
    })
  })
})