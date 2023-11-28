# Repository for nat's website! 

Runs on Next.js and React framework because I'm Learning:tm:

## (For collaborators but specifically Hua) How to clone project to local repository:

1. Download Node.js

We're gonna need npm to do stuff like building the Next.js app and running it locally. Which is kinda important so please make sure you have Node.js lying around. It doesn't have to be nicely filed away on a shelf or anything, it can sit on the floor too. 

2. Create an empty folder to keep the local repository in

You're gonna clone the repository into the empty folder but this is entirely experimental and I have no idea if it'll actually work. 

I'm writing this up after looking at a handful of articles I managed to scrounge up from Google because all the results were about creating a new Next.js app rather than cloning an existing one.

3. Clone the repository into the empty folder

You can probably do this in Github Desktop but I've gotten used to command line so I'll go through the command line steps, but the Github Desktop route has the same idea.

Open the terminal/command line and navigate into the empty folder from Step 2. 
Window terminal navigate commands:
`cd file`	Goes into a file
`cd ..`		Goes up a folder
`dir`		Lists out the directory and all the files you can cd into

`git clone https://github.com/noktalis/fandom-site`

By the way, I'm gonna change the url after I finish migrating everything over and the semester ends and I can come out of hiding. So that might break some things if you try to make changes to the repository after that. 

4. Navigate into the 'site' folder with cd

Okay now I'm pretty sure this part can't be done with Github Desktop lmao sorry

The folder you created is the root of the repository, but the root of my app is the 'site' folder, so to speak. I *think* we have to run the next few commands in 'site' rather than the root, because things certainly didn't end well when I tried otherwise. 

5. Install dependencies

This also includes installing all the stuff that makes a Next.js app actually Next.js. Usually this stuff is excluded in every Next.js app repository, so this step seems to be standard.

In the site folder, run `npm install`

6. Run on local server

I do this step every time I'm develop within the VSCode terminal rather than the Windows command prompt, so you don't have to keep opening it every time. 

Still in the site folder, run `npm run dev`

Then, open http://localhost:3000 in a browser. It *should* show the site.

You can close the local server by doing Ctrl+C or just closing the window. 