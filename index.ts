
type gender = 'M' | 'F'
type privilege = 'master'| 'manager' |'technician'

interface IPerson {
  name: string,
  lastName: string,
  age: number,
  gender: gender
}

interface IUser {
  nickname: string,
  password: string
}



class Person  {
  name: string
  lastName: string
  age: number
  gender: gender

  constructor(person: IPerson) {
    this.name = person.name
    this.gender = person.gender
    this.lastName = person.lastName
    this.age = person.age
  }

   getPersonData = () => {
    return {
      name: this.name,
      gender: this.gender ,
      lastName: this.lastName,
      age: this.age,
    }
  }
}

class User  extends Person{
  private nickname: string
  private password: string

  constructor(person: IPerson ,user: IUser) {
    super(person)

    this.nickname = user.nickname,
    this.password = user.password
  }

  getNickname = () => {
    return this.nickname
  }

  getPassword = () => {
    return this.password
  }

  setNickname = (nickname: string) => {
    this.nickname = nickname
  }

  resetPassword = (newPassword) => {
    this.password = newPassword
  }
}

class Admin extends User{
  private privilege : string

 constructor(person: IPerson, user: IUser, privilege: privilege) {
  super(person, user)
  this.privilege = privilege
 }

 hasPermission = (role : string) => {
  return this.privilege === role 
 }

 getPrivilege = () => {
  return this.privilege
 }

 setPrivilege = (privilege: privilege) => {
  this.privilege = privilege
 }

 getData = () => {

  const data = {
    name : this.name,
    lastName : this.lastName,
    gender : this.gender,
    age : this.age,
    nickname : this.getNickname(),
    password : this.getPassword()
  }

  return data
 }
}

const person: IPerson =  {
  name: 'Jhon',
  lastName: 'Doe',
  age: 25,
  gender: 'M',
}

const user = {
  nickname: 'JhonDoe123',
  password: '123456'
}


const admin = new Admin(person, user, 'master')

console.log(admin.getData())








