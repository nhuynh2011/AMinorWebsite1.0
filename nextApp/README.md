Welcome to AMinor's new Website!
====

Here is some documentation to get familiar with if you plan on adding to this repository.
---

####Developer Stack

This is a [React.js](https://reactjs.org/) application that uses [Next.js](https://nextjs.org/)t to build our react application into a static site.

Next.js uses [styled-jsx](https://www.npmjs.com/package/styled-jsx) package for component scoped css.

We are using [next-page-transitions](https://github.com/illinois/next-page-transitions) to animate page transitions. 

#### Installation

1. Install [Node.js and NPM](https://nodejs.org/en/download/)


2. Enter the following shell commands to setup and run the app locally:
    ~~~ bash 
    $ git clone https://github.com/nhuynh2011/AMinorWebsite1.0
    
    $ cd ./nextApp
    
    $ npm install
    
    $ npm run dev
    ~~~
    
#### Building the static site (This is what the static site will actually be deployed as)

1. Build, export, and locally serve, the static site to [localhost:3000](http://localhost:3000/)
    ~~~ bash
    $ npm run serve
    ~~~
2. Only build and export the static site into the ```nextApp/out``` directory
    ~~~ bash
    $ npm run export
    ~~~
    
#### Directory Structure

1. ```.next``` is a *local* directory contains the site generate after running:
    ~~~ bash
    $ npm run build
    ~~~
2. ```node_modules``` is a *local* directory containing all of the node modules downloaded after running:
    ~~~bash
    $ npm install 
    ~~~
3. ```components``` is a directory containing all of the React components used through out the website

4. ```out``` is the *local* directory containing all static website that will be deployed after running:
    ~~~ bash 
    $ npm run export
    or 
    $ npm run serve
    ~~~
5. ```pages``` is the directory containing all of the pages of the website. 
6. ```static``` is the directory that contains any static assets such as images, fonts, ect...
7. ```next.config.js``` is the file that contains the configuration for Next.js. Include any routing for pages here.
        



 
 
    