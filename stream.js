const fs = require('fs');

const readStream = fs.createReadStream('./docs/text.doc');
const writeStream = fs.createWriteStream('./docs/text1.doc');

readStream.on('data',(chunk)=> {
    console.log('-------- NEW CHUNK NEW CHUNK');
    console.log(chunk);
    writeStream.write('\n new new new \n');
    writeStream.write(chunk);

})