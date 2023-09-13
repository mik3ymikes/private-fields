class Person {
  #id

  constructor(){
    this.#id=Math.floor(Math.random()*100)+1
  }

  get getID(){
    return this.#id
  }

}

const person1=new Person();
const person2=new Person();


console.log(person1.ID)
console.log(person2.ID)






module.exports = Person;
