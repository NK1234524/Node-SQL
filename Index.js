const{faker} =  require("@faker-js/faker");
const mysql =require("mysql2");

const connection  = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"New",
    password:"delhirohini"
});
try{
    connection.query("SHOW TABLES",(err,result)=>{
              if(err){
        throw err;
    }
    console.log(result);
    });  
}
catch(err){
     console.log(err);
}

connection.end();
let getrandomdata = ()=>{
    return {
        username:faker.internet.username(),
        email:faker.internet.email(),
        password:faker.internet.password()
    };
};

// console.log(getrandomdata());
