const fs = require('fs');
fs.createReadStream(process.argv[2], 'utf8').pipe(process.stdout)
