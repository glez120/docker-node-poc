'use strict';

const expressApp = require('express')();
const PORT = 8080;

let rootGetHandler = (req, res) => res.send('Success');
let rootGetPath = '/';
let appStartHandler = () => console.log(`App listening on port ${PORT}`);

let appSetUp = app => {
  app.get(rootGetPath, rootGetHandler);
  app.listen(PORT, appStartHandler);
};

appSetUp(expressApp);
