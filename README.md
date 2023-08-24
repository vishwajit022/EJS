<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1669904581074/eiOU4pInF.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" width ="800px">
<h1>Embedded Java Script</h1>

<p>Extension: index.ejs</p>
<p>Here we write js inside HTML without using script tag </p>
<p>Embedded JavaScript is a programming language that is used to create interactive web applications. It is a client-side scripting language that runs inside the web browser. Embedded JavaScript enables web developers to create dynamic, interactive, and responsive web applications.</p>
<h2>EJS Tags</h2>
<p><%= variable%>  <br>                                                                JSOutput It will show up on Output Screen</p>
<p><% console.log("hello") %>     <br>                                                 It will run on Terminal(Console) not on UI     </p>
<p><%- <>Hello <>   %>           <br>                                                It will run(Render) as HTML code on UI</p>
<p><%% %%>                       <br>                                                    If we wish to % on our server website we can use it to display % on UI</p>
<p> <%# This is a Commnet %>          <br>                                                THis won't be interpreted it will act as a comment                </p>
<p><%- include("index.ejs")%>            <br>                                            Insert another EJS file</p>


<h1>Moving on to Hands on stuff!!</h1>
<h2>Setting up Environment for the code</h2>
<p>npm init <br> This will install or add all the required packages inside our folder so we could use npm commands</p>
<p>npm install express <br> add or install express files in our current directory
</p>
<p>npm install nodemon <br>
  Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
</p>
<p>As a conclusion I would say this will create package.json file in the current folder where we can see dependency section </p>
<p>Using this section we can figure out based on which packages program was built some of them are react.js , exoress.js, Angular.js, I personally prefer react.js because it way more versatile</p>

<h3>In index.js</h3>
<p> import express from 'express' It is using the ES6 module syntax to import the express module.
<br>Express module is a popular web framework for Node.js that simplifies the process of creating web applications by providing a set of tools and utilities. </p>
<p>const app = express();<br>
creates an instance of the Express application by calling the express() function. This instance will be the foundation for building the web application.</p>


