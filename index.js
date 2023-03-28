const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the application's static content
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetStacks
apiRouter.get('/stacks', async (_req, res) => {
    const stacks = await DB.getRandomStacks();
    res.send(stacks);
  });
  
  // SubmitStack
  apiRouter.post('/stack', async (req, res) => {
    DB.addStack(req.body);
    const stacks = await DB.getRandomStacks();
    res.send(stacks);
  });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

//   //updateStacks
//   let stacks = [];
//   function updateStacks(newStack, stacks){
//     for(const [i, prevStack] of stacks.entries()){
//         if(newStack.name === prevStack.name){
//             const halfBefore = stacks.slice(0,i);
//             if(i < stacks.length){
//                 const halfAfter = stacks.slice(i + 1);
//                 stacks = halfBefore.concat(halfAfter);
//             }else{
//                 stacks = halfBefore
//             }
//             break;
//         }
//     }
//     stacks.push(newStack);
//     if(stacks.length > 6){
//         stacks = stacks.slice(stacks.length - 6, stacks.length);
//     }
//     return stacks;
//   }