const express = require('express');
const faker = require('faker');
const app = express()

const port = 8080;
 
app.get('/', (req, res)=> {
     firstName = faker.name.firstName();
     lastName= faker.name.lastName();
     gender =faker.name.gender();
     birth = faker.date.past(50,2005).toLocaleDateString();
     email = faker.internet.email(`${firstName} ${lastName}`);
     password = faker.internet.password();
    
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
  console.log(`Servidor iniciado na porta ${port}: http://localhost:${port}`)
})