const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const stackCollection = client.db('startup').collection('stacks');

function getUser(email) {
    return userCollection.findOne({ email: email });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
  }


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

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addStack, 
    getRandomStacks,
};