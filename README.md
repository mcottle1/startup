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
