//include all required node modules
let express = require('express');
let logic = require('./logics');
let app = express();

app.use('/getusersrepo',logic);

let port = 8080;
app.listen(port);
console.log(`server is running on port ${port} `);
