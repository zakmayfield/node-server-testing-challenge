//imports
require('dotenv').config();

//import server
const server = require('./api/server.js');

//port from the env file or default
const PORT = process.env.PORT || 6000;

//listen
server.listen(PORT, () => console.log(`\n listening on port ${PORT}`));