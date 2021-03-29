const express = require('express');
const faker = require('faker');
const app = express()

const port = 8080;
 
app.get('/', function (req, res) {
    const firstName = faker.name.firstName();
    const lastName= faker.name.lastName();
    const gender =faker.name.gender();
    const birth = faker.date.past(50,2005).toLocaleDateString();
    const email = faker.internet.email(`${firstName} ${lastName}`);
    const password = faker.internet.password();
    
    return res.send(
    person = {
      firstName:firstName,
      lastName:lastName,
      gender:gender,
      birth:birth,
      email:email,
      password:password
      }
    );
})
 
app.listen(port, ()=>{
  console.log(`Servidor iniciado na porta 8080: http://localhost:${port}`)
})