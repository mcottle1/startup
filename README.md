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

-My server public IP address 3.16.6.15

-command to shell into server ssh -i [key pair file] ubuntu@[ip address]

-to verify instance type http://3.16.6.15 into search engine

-aws services is the leader in the field of web services

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
