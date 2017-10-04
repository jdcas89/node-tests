const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')


describe('App' ,() => {

  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('Should call the spy correctly', () =>{
    var spy = expect.createSpy();
    spy('Juan', 28)
    expect(spy).toHaveBeenCalledWith('Juan', 28 )
    expect(spy).toHaveBeenCalled()
  })

  it('Should call save user', () => {
    var email = 'email@example.com'
    var password = '123456'
    app.handleSignup(email,password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})