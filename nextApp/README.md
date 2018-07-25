Welcome to AMinor's new Website!
====

Here is some documentation to get familiar with if you plan on adding to this repository.
---

#### Developer Stack

This is a [React.js](https://reactjs.org/) application that uses [Next.js](https://nextjs.org/) to structure and build our React application into a static site.

Next.js uses [styled-jsx](https://www.npmjs.com/package/styled-jsx) package for component scoped css.

We are using [next-page-transitions](https://github.com/illinois/next-page-transitions) to animate page transitions. 


#### Installation

1. Install [Node.js and NPM](https://nodejs.org/en/download/)


2. Enter the following shell commands to setup and run the app locally:
    ~~~bash 
    $ git clone https://github.com/nhuynh2011/AMinorWebsite1.0
    
    $ cd ./nextApp
    
    $ npm install
    
    $ npm run dev
    ~~~
 
    
#### Building & Serving this site

1. Build and locally serve site to [localhost:3000](http://localhost:3000/)
   ~~~bash
   $ npm run dev
   ~~~
   
   `Use this when developing the site locally, as hot relaoding is built in`

2. Build, export, and locally serve, the static site to [localhost:5000](http://localhost:5000/)
    ~~~bash
    $ npm run serve
    ~~~
    `Use thus when you want to test the site as it would be in production`
    
    
3. Only build and export the static site into the ```nextApp/out``` directory
    ~~~bash
    $ npm run export
    ~~~
  
    
#### Directory Structure

1. ```/.next``` is a *local* directory containing the site generated after running:
    ~~~bash
    $ npm run build
    ~~~
2. ```/node_modules``` is a *local* directory containing all of the node modules installed after running:
    ~~~bash
    $ npm install 
    ~~~
3. ```/components``` is a directory containing all of the React [hopefully reusable ;)] components used through out the website

4. ```/out``` is the *local* directory containing the static website that will be deployed after running:
    ~~~bash 
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

* Use the `rem` css unit as much as possible. 

*Use a [modular scale](http://www.modularscale.com/?1&rem&1.1892) with a ratio of 1.189. This lets us pick lengths less arbitrarily and follow typographical design principles.

* We sort as many things as we can in alphabetical order, such as CSS properties, import names of a javascript module, method names in React Components, ect...:
    ~~~javascript
    import { Component } from 'react'
    import Link from 'next/link'
    import Router from 'next/router'
    
    export default class extends Component {
      constructor(props) {
        super(props)
        this.state = { activeLink: undefined }
      }
    
      componentDidMount() {
        this.setActiveLink(document.getElementById(Router.route))
      }
      
      setActiveLink = (newActiveLink) => {    
        this.setState({ activeLink: newActiveLink })
      }
    
    
      render() {
        return (  
          <ul>
            <li id={link.href} key={link.title} onClick={(e) => this.setActiveLink(e.target)}>
              <Link href={link.href} prefetch>
                <a data-hover={link.title}>{link.title}</a>
              </Link>
            </li>
    
            <style jsx>
              {`
                ul {
                  align-items: center;
                  display: flex;
                  list-style-type: none;
                  justify-content: center;
                  margin: 0;
                }
        
                li {
                  margin: 0 1.189rem;
                }
        
                a {
                  color: white;
                  font-size: 1.189rem;
                  position: relative;
                    left: 1rem;
                  text-decoration: none;
                }
              `}
            </style>
          </ul>
        )
      }
    }
    ~~~
    
    <sub>As you can see:
    * Imports are ordered by the name of the module being imported
    * The order of the methods in the react component are as following:
        * constructor (if necessary)
        * React life cycle methods in the order that they occur
        * Methods in alphabetical order
        * React render function
    * Attribute names in JSX are in alphabetical order. 
    * CSS Selectors are in order of when they are *first* used in the render function
    * CSS Properties are in alphabetical order
    </sub>      
     


 
 
    
