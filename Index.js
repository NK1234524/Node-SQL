const{faker} =  require("@faker-js/faker");
let getrandomdata = ()=>{
    return {
        username:faker.internet.username(),
        email:faker.internet.email(),
        password:faker.internet.password()
    };
};

console.log(getrandomdata());
