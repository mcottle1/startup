const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
console.log(url)
const client = new MongoClient(url);
const stackCollection = client.db('startup').collection('stacks');

function addStack(stack) {
    const filter = { name : stack.name };
    stackCollection.replaceOne(filter, stack, { upsert: true }, function(err, result) {
        if (err) throw err;
        console.log("Document inserted or updated");
    });
}

function getRandomStacks() {
  return stackCollection.aggregate([{ $sample: { size: 6 } }]).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
}

module.exports = {addStack, getRandomStacks};