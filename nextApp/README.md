Welcome to AMinor's new Website!
====

Here is some documentation to get familiar with if you plan on adding to this repository.
---

####Developer Stack

This is a [React.js](https://reactjs.org/) application that uses [Next.js](https://nextjs.org/)t to structure and build our React application into a static site.

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
    
#### Building & Serving this site (This is what the static site will actually be deployed as)

1. Build and locally serve site to [localhost:3000](http://localhost:3000/)
   ~~~ bash
   $ npm run dev
   ~~~
   
   `Use this when developing the site locally, as hot relaoding is built in`

2. Build, export, and locally serve, the static site to [localhost:5000](http://localhost:5000/)
    ~~~ bash
    $ npm run serve
    ~~~
    `Use thus when you want to test the site as it would be in production`
    
    
3. Only build and export the static site into the ```nextApp/out``` directory
    ~~~ bash
    $ npm run export
    ~~~
    
#### Directory Structure

1. ```/.next``` is a *local* directory containing the site generated after running:
    ~~~ bash
    $ npm run build
    ~~~
2. ```/node_modules``` is a *local* directory containing all of the node modules installed after running:
    ~~~bash
    $ npm install 
    ~~~
3. ```/components``` is a directory containing all of the React [hopefully reuseable ;)] components used through out the website

4. ```/out``` is the *local* directory containing the static website that will be deployed after running:
    ~~~ bash 
    $ npm run export
    or 
    $ npm run serve
    ~~~
5. ```/pages``` is the directory containing all of the pages of the website. 
6. ```/static``` is the directory containing any static assets such as images, fonts, ect...
7. ```next.config.js``` is the file containing the configuration for Next.js. Including any routing for static pages here.
        
#### Code Style

Code style is the way in whic we style the code. Although there are many ways to do this (and most are usually individual preference), we do our best to pick styles that imporve readability and maintainability.

* Throughout this code base we use tabs that are equivalent to 2 spaces. 

* All React components have 2 tags
    `<component></component>`

* We sort as many things as we can in alphabetical order, such as CSS properties and method names in React Components:
    ~~~css
    el {
      
    }
    ~~~


 
 
    
