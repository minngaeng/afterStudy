let persons = [
  {name:'민경', age:22},
  {name:'소희', age:23},
  {name:'소라', age:12},
  ]
// undefined

for (let count = 0; count < persons.length; count++ ) {
  if (persons[count].age >= 19 ) {
      console.log(persons[count].name + "님은 성인")
  } else {
      console.log(persons[count].name + "님은 미성")
  }
}
// index-25c64aae.js:27 민경님은 성인
// index-25c64aae.js:27 소희님은 성인
// index-25c64aae.js:27 소라님은 미성