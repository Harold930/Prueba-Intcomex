const  validate = require('./validate')
const  express = require('express')
const route = express.Router()

route.post('/', (req,res) => {
    const errors = validate(req.body);
    console.log(req.body);
    console.log(errors,'soy errorsss')

    if(Object.keys(errors).length != 0){
        console.log('entré al if')
        res.send(errors);
    } else {
        console.log('entré al else')
        let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var pass = '';
        for(let i = 0; i < 4; i++ ){
            let random = Math.floor(Math.random() * 6);
            pass = `${pass}${abc[random]}${random}`;
        }
        console.log(pass)
    }
    res.send(pass);
});

module.exports = route;