var express = require("express");
var app = express();
var port = process.env.port || 3000;
require('./Database');
let router = require('./routers/route');

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/dog', router);

app.listen(port, () => {
  console.log("App listening to: " + port);
  //run();
});
