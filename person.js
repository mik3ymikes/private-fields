class Person {
  #id

  constructor(){
    this.#id=Math.floor(Math.random()*100)+1
  }

  get id(){
    return this.#id
  }

}

const person1=new Person();
const person2=new Person();


console.log(person1.id)
console.log(person2.id)






module.exports = Person;
