const fs = require('fs');
const readline = require('readline');

let inputFilePath = './file.txt',
    inputStream = fs.createReadStream(inputFilePath),
    rl = readline.createInterface(inputStream);

rl
  .on('line' , (line)=>{
    console.log(line);
  })
  .on('close', () => {
      console.log(`Done reading file.`);
});
