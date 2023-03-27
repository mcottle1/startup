# Startup

## Github Assignment
--Modification for GitHub assignment

--Second modification for GitHub assignment

--Merge conflict resolution

#### What I learned:

-Always commit

-Use descriptive commit messages to differentiate between different merges

-Check commit graph of GitLense to see branches and to help resolve merge conflicts

-to run your own git commands, do it from the terminal at the bottom of the page

-commit, push, pull commands are under source control

-git and GitHub is super powerful, keep that in mind and use it carefully but thuroughly 

#### Ways to clone:

-in terminal: git clone url

-in vs code: cmd + shift +p, search gitcl and select git clone and enter url

-Don't forget the commit message on the left in vs code!

-read up and better understand the different git commands and how to use git from the terminal

#### Vim:

-vim is a console based code editor

-its based exclusively in keyboard commands

-command state(begining state, can only use commands)

-insert state(type i to enter insert mode, used to actually type and edit code)

#### Creating an AWS server and connecting to it

-Used EC2 in AWS

-My server public IP address 3.16.6.15

-command to shell into server ssh -i [key pair file] ubuntu@[ip address]

-to verify instance type http://3.16.6.15 into search engine

-aws services is the leader in the field of web services

#### Registering a Domain Name

-Used Route 53 in AWS

-Remeber to watch for reupping domain name

-Name and corresponding IP addresses are saved in DNS

-Remeber to set up root and wildcard record types so that it can be accessed using https:// infront of domain name

#### Configuring Caddy to encrypt using HTTP

-HTTP on-secure hypertext transport protocol

-HTTPS Secure Hypertext Transport Protocol

-Having a secure connection means that all the data is encrypted using the TLS protocol

-Web certificates are generated by a trusted 3rd party using public/private key encryption, we use Let's Encrypt

-We set up caddy in ubuntu by modifying the caddyfile

#### HTML Startup

-Modern HTML contains over 100 different elements

-the entire purpose of HTML is to provide content and structure

-HTML defines a header (<!DOCTYPE html>) that tells the browser the type and version of the document. You should always include this at the top of the HTML file

#### Simon HTML

-sup>&reg;<sup/ creates superscript

-Table is used to create the simon image in html also using an svg

-Header, Main, and Footer sections compose each page

-these two meta lines occur at the top of every page

meta charset="UTF-8"/
meta name="viewport" content="width=device-width, initial-scale=1.0"/

-also, don't forget to specify the english language of html at the top of each page

-also dont forget <!DOCTYPE html>

-the -s simon flag on the linux command creates the simon.yourdomainname aspect

#### Simon CSS

- flex and relative positioning
 
  - allows for portrait and landscape orientation on devices
  
  - @media used for flex elements
  
- css selectors that correlate to items in html

- animation using css (great examples on codepen)

- transform and translate elements

- change font and format

- bootstrap in html

  - header
  
  link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    /
    
  - can use all sorts of bootstrap elements (carousel, buttons, login page etc.)

### JavaScript

#### Types, Objects, Loops

let x = 1;

const y = 2;

1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false

if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}

a === 1 ? console.log(1) : console.log('not 1');

if (true && (!false || true)) {
  //...
}

for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1

let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1

const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b

const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'

let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1

#### Functions

function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler('fish', 'animal');
// OUTPUT: animal=fish

##### Anonymous Functions

// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2

##### Inner functions

function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish

#### Arrow Functions

function reverseString(str) {
    return str.split("").reverse().join("");
}
const reverse = word => reverseString(word);

console.log(reverse("pizza"));
console.log(reverse("pasta"));

#### Arrays

const x = [1,2,3,4,5,6,7,8,9];

x.push(10);

x.push(11);

x.pop();

console.log(x);

y = x.slice(0,5);

console.log(y);

z = y.map((i) => i%2);

console.log(y.find(i => i > 4));

console.log(z);

console.log(z.reduce((z, c) => z + c));

console.log(x.filter(i => i%2));

//only prime numbers?

console.log(x.filter(i => i%2).filter(r => r%3));

#### Objects and Classes

const fishies = {
  one: 'purple',
  two: 'green',
};
class Fish {
  constructor(one, two){
    this.one = one;
    this.two = two;
  }
    log(){
      return this.one + " fish, " + this.two + " fish";
    }
}

class Colors extends Fish {
  constructor(one, two, red, blue){
    super(one, two);
    this.red = red;
    this.blue = blue;
  }
  log(){
    return super.log() + ', ' + this.red + ' fish, ' + this.blue + ' fish!';
  }
}

const fishy = new Colors('7','9', Object.values(fishies)[0],Object.values(fishies)[1]);
console.log(fishy.log());

#### What I learned from Start-up HTML and CSS deliverable

- Having access to a live update debugger is incredibly vital

- Understanding padding, margins, and measurements is so important

- Understanding how to center something one of the most important things you can learn

- Flex is a difficult concept that will take practice, so don't take advantage of a website that uses it well

- Unsplash is by far the best place to look for images for a site

- Its better to find images first and build a site and a color pallete around it

- always think about "inheritance" when building css and html

#### Regexs

const regex2 = /\w+/g;

const string = "Hello my name is Mackenzie Cottle";

const findArray2 = string.match(regex2);

- returns an array containing each word as an element

console.log(findArray2);

const isPhoneNumber = /\d{3}-\d{3}-\d{4}/g

const phoneNumber = "801-234-5678";

const notANumber = "8012345678";

- verifies phone number syntax

#### Rest and Spread

- Rest
- use ... before last parameter and you can list as many parameters as you want and they will be put into an array
- Spread
- use ... infront of parameter that you pass as an array and it will break it down into the functions parameters

function findMyName(name, ...listOfStrings){
  return listOfStrings.some((i) => i.includes(name));
}

console.log(findMyName("Mackenzie", "Hello my name is Joe", "Hello my name is Jeff", "Hello my name is Mackenzie", "Hello my name is David"));

- Example of Rest

function multiplyThree(x,y,z){
  return x * y * z;
}

const numbers = [1,2,3];

console.log(multiplyThree(...numbers));

- Example of spread

#### Destructuring

- a unique way to access array and object elements, can incorporate rest as well into destructuring
- Array destructuring

const destructuring = ["Mackenzie", "Grace", "Cottle"];

const [firstname, middlename, lastname] = destructuring;

- Object destructuring

const person = {fname: 'Jocelyn', mname: 'Elise', lname: 'Carter'};

const {fname, lname} = person;

#### Exceptions

-Try, catch, finally block

try{
  isMyyyyName("Mackenzie");
}catch(err){
  console.log("Error with name guess");
}finally{
  console.log("Guess again");
}

-Fallback

function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}

#### DOM

function addRow() {
      let table = document.getElementById("habitStack");
      let row = document.createElement("tr")
      let cell1 = document.createElement("td")
      let cell2 = document.createElement("td")
      cell2.setAttribute("class", "center");
      let cell3 = document.createElement("td")
      let input = document.createElement("input");
      cell1.innerHTML = '<input type="text" id="text" name="varText" placeholder="text here" spellcheck required pattern="[Aa].*" />';
      row.appendChild(cell1);
      cell2.innerHTML = '<label for="time">Time: </label><input type="time" name="varTime" id="time" />';
      row.appendChild(cell2);
      cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
      row.appendChild(cell3);
      table.appendChild(row);
   }

function removeRow(){
  let table = document.getElementById("habitStackTable");
  var lastRow = table.rows.length - 1;
  if(lastRow > 1){
    table.deleteRow(lastRow);
  }
}

#### Promise

const pickRandomNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() < 0.2 ? '0' : (Math.random() < 0.3 ? '1' : (Math.random() < 0.4 ? '2' : (Math.random() < 0.5 ? '3' : '4'))));
    } else {
      reject('no number for you');
    }
  }, 10000);
});

pickRandomNumber
  .then((result) => console.log(`Random number 0-4: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Guess completed:)'));
  
#### Async/Await

function pickRandomNumber() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() < 0.2 ? '0' : (Math.random() < 0.3 ? '1' : (Math.random() < 0.4 ? '2' : (Math.random() < 0.5 ? '3' : '4'))));
    } else {
      reject('no number for you');
    }
  }, 50);
});
}

async function randNum()
{
  try{
    const response1 = await pickRandomNumber();
    const response2 = await pass(response1);
  }catch(response1){
    const response3 = await fail(response1);
  }
}

function pass(result){
  console.log(`Random number 0-4: ${result}`);
  console.log('Guess completed:)');
};

function fail(err){
  console.log(`Error: ${err}`);
  console.log('Guess completed:)');
};

#### Simon Javascript

- Don't forget the script lines
- script lines can go at the top of the page when no html is being edited, otherwise it needs to go bellow body and footer

<img width="860" alt="Screenshot 2023-02-24 at 4 16 59 PM" src="https://user-images.githubusercontent.com/90581594/221319349-14506fe4-f0f1-4651-9687-148a1cc715ba.png">

#### Notes from Midterm Review

- HTML div creates a division element

- CNAME points one DNS record to another DNS record

- CNAME is an alias, a pointer to another record

- A record points to an IP address

- You CAN use CSS to load fonts from Google

- Look up this syntax

- Get Code from the promise question

- burger fries taco shake noodles

- If you want the catch to be called then you would reject instead of resolve or throw an exception

- Valid JSON {"x":3}

- div.header { color: blue; }

- invalid to say <javascript> some stuff

- Can say <div onclick = 1+1

- /A|f/i i means case insensitive, so anything with an a ro an f will work 

- function f(x) = {} not valid function syntax

- function f(x) {}

- const f = function(x) {}

- const f = (x) => {}

- all valid

- padding puts space around the content of the selected element

- pals before marriage- padding, border, marriage

- content, padding, border, margin

- .join joins all elements together

- reduce, map, sum ect

- html tag for unordered list ul

- document.querySelector('p').Addeventlistener('mouseover', console.log);

- adds a mouseover event listener to a p element

- valid hyperlinks use a element tags and href

- src is for image tags

- ASYNC await vs promise: promise means other code will run, async await means all code that runs after will be delayed ie all other code waits for the waiat call to be resolved

- Rejected throws exception

- If you omit the await, it won't await

- DOM textContext sets the cild text for an element

- DNS subdomain cs260.cs.byu.edu the whole thing is the subdomain

- Column-reverse flips the column completely upside down

- Two things in two seperate p blocks will appear on two seperate elements

- {n:1} javaScript object

- console commans that makes a script executable chmod +x deploy.sh

- ls -la deploy.sh writes to standard output the contents of each specified Directory or the name of each specified File

- sudo deploy.sh lets us use our account and password to execute system commands with root privileges

- ssh deploy.sh provides a secure encrypted connection between two hosts over an insecure network. This connection can also be used for terminal access, file transfers, and for tunneling other applications

#### What I learned from Startup Javascript deliverable

- How to work with local storage to save and repopulate data elsewhere on the site

- The importance of where and how you call your functions in javascript, and the flexibility that this creates

- the difference between querySelector, getElementByID, and querySelectorAll

- How important it is to understand the dom and how powerful it can be

- The importance of HOW you store your information into variables so that it can be accessed across your javascript but also within and across specific functions (ie the checkboxes debacle

#### URL

Uniform resource locator

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                    |

#### Ports

<img src="https://github.com/webprogramming260/.github/raw/main/profile/webServices/ports/webServicesPorts.jpg">

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |
#### HHTP

Request syntax

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

Request types

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

Status Codes

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

Headers

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

#### Service Design


⚠ Note that service endpoints are often called an Application Programming Interface (API). This is a throwback to old desktop applications and the programming interfaces that they exposed. Sometimes the term API refers to the entire collection of endpoints, and sometimes it is used to refer to a single endpoint.

Things to consider

- Grammatical

- Readable

- Discoverable

- Compatible

- Simple

- Documented

Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb.


```http
POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}
```

Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. REST HTTP verbs always act upon a resource. Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call. This allows for the caching functionality of HTTP to work optimally. For example, GET will always return the same resource until a PUT is executed on the resource. When PUT is used, the cached resource is replaced with the updated resource.


```http
PUT /order/2197 HTTP/2

{"date": "20220505"}
```

GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered

```graphql
query {
  getOrder(id: "2197") {
    orders(filter: { date: { allofterms: "20220505" } }) {
      store
      description
      orderedBy
    }
  }
}
```
   
#### Node.JS
   
- Allows us to interact directly with the server using javascript. one language to rule them all haha
   
- Node.JS packages
   
- Package.json
   
This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon.
   
With JavaScript we can write code that listens on a server port (e.g. 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

#### Node.js

npm install http

```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node.js!</h1>');
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```

```sh
➜ node main.js
Web service listening on port 8080
```

#### Express

```sh
➜ npm install express
```

```js
const express = require('express');
const app = express();

app.listen(8080);

```
```js
app.get('/store/provo', (req, res, next) => {
  res.send({ name: 'provo' });
});
```

#### Debugging

Fn->F5 to bring up node.js debugger

npm install -g nodemon to install nodemon globally

#### PM2

When you run a program from the console the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. 

#### UI Testing

Playwright 

npm init playwright@latest

Next, you want to install the Playwright extension for VS Code. Go to the extensions tab in VS Code and search for, and install, Playwright Test for VSCode.

#### Endpoint testing

npm install supertest -D

#### What I learned from Simon Service

- Fetch calls used to add the quote and image to the about page

- Load scores using fetch and set locak storage to json string of response

Deploy.sh file

# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r public dist
cp *.js dist
cp package* dist

# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH

# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i "$key" dist/* ubuntu@$hostname:services/$service

# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH

# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist

- Index.js

- get router, post router, use router sends index.html file

- Update scores is used in post request
   
#### What I learned from Simon DB
   

```  
 const { MongoClient } = require('mongodb');

// Read the credentials from environment variables so that you do not accidentally check in your credentials
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

async function main() {
  // Connect to the database cluster
  //const url = `mongodb+srv://mcottle1:mcottle1byu.edu@cluster0.ca3tlc1.mongodb.net/rental`;
  const url = `mongodb+srv://${userName}:${password}@${hostname}`;
  const client = new MongoClient(url);
  const collection = client.db('rental').collection('house');

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```
- Save credentials in environment files
   
- Environment files for macOS is .zprofile in user root directory
   
- To update PEM2 ssh into ubuntu with ip address and run update pem script
   
- Save updated pem as well
   
- Make sure that versions are all up to date (node, npm, etc...)
   
#### Simon Login What I learned
   
- passwords are all encrypted when they are sent to databases, or at least they should be
   
- don't forget to update network preferences on mongo db database to allow all connections
   
- edit fn keys so that you don't have to press function to access the function element of the key
  
```
// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
```
   
To generate a reasonable authentication token we use the `uuid` package. [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) stands for Universally Unique Identifier

```js
const uuid = require('uuid');

token: uuid.v4();
```
   
To hash our passwords we will use the `bcrypt` package. 

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

<br/>

<hr/>

## Start-up deliverable - specifications

### Habit Stacker

#### Design

Have you ever heard of habit stacking? Habit stacking is a revolutionary way to create and maintain habits: a notoriously difficult task. Habit stacking relies on the "stacking" new habits on habits that already exist in order to help the individual to remember to do them! For example, a habit stack might include stacking drinking a glass of water on top of brushing your teeth. You might commit to the statement "After brushing my teeth, I will drink a glass of water." Voila! A habit stack! The Habit Stacker application makes this process easy by allowing users to input their current habits as well as the habits that they would like to create and generating a habit stack for them that can be printed off or checked off within the application as tasks are completed each day! Habit stacks and progress can be shared in real time among users to generate community motivation to create and stick to new habits!

<img width="767" alt="Habit Stack Mock Up" src="https://user-images.githubusercontent.com/90581594/213339606-98d66ce0-0708-4020-b80b-dc92ca610d2c.png">

#### Key Features

-Secure login over HTTPS

-Ability to input current habits and order them

-Ability to input desired new habits, and place them in order within list of current habits

-Ability to generate a formatted habit stack with check off capabilities

-Completed habit stacks from all other users displayed in realtime

-Habit stacks are persistently stored

-Ability to check-off and un-check habits as completed and clear checks for each new day
