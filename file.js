const fs = require('fs');


fs.readFile('./docs/text.doc', (err,data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})