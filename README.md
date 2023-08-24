<!DOCTYPE html>
<html>
<head>
  <title>Embedded JavaScript and HTTP Methods</title>
</head>
<body>
  <div style="text-align: center;">
    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1669904581074/eiOU4pInF.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" width="800" alt="Embedded JavaScript">
    <h1>Embedded JavaScript</h1>
    <p><strong>Extension:</strong> index.ejs</p>
    <p>Embedded JavaScript is a programming language used to create interactive web applications. It's a client-side scripting language that runs in web browsers, enabling developers to create dynamic, interactive, and responsive web apps.</p>
  </div>
  
  <div>
    <h2>EJS Tags</h2>
    <ul>
      <li><code>&lt;%= variable %&gt;</code>: JS Output. It will show up on the Output Screen.</li>
      <li><code>&lt;% console.log("hello") %&gt;</code>: It will run on the Terminal (Console), not on UI.</li>
      <li><code>&lt;%- &lt;&gt;Hello &lt;&gt; %&gt;</code>: It will render as HTML code on the UI.</li>
      <li><code>&lt;% %&gt;</code>: To display <code>%</code> on our website, we can use it to show <code>%</code> on UI.</li>
      <li><code>&lt;%# This is a Comment %&gt;</code>: This won't be interpreted; it will act as a comment.</li>
      <li><code>&lt;%- include("index.ejs") %&gt;</code>: Insert another EJS file.</li>
    </ul>
  </div>
  
  <div style="text-align: center;">
    <h1>Moving on to Hands-on Stuff!!</h1>
    <h2>Setting up Environment for the Code</h2>
    <p><code>npm init</code>: Installs required packages in our folder for npm commands.</p>
    <p><code>npm install express</code>: Adds express files to our current directory.</p>
    <p><code>npm install nodemon</code>: Auto-restarts Node.js apps on file changes.</p>
    <p><code>package.json</code> is created to manage dependencies.</p>
  </div>
  
  <div>
    <p><strong>In index.js:</strong></p>
    <p><code>import express from 'express'</code>: Imports the express module using ES6 syntax.</p>
    <p><code>const app = express();</code>: Creates an instance of Express app.</p>
  </div>
  
  <div style="text-align: center;">
    <h2>HTTP Methods</h2>
    <p>HTTP methods indicate desired actions on resources when making requests to a web server. Common HTTP methods:</p>
  </div>
  
  <div>
    <h2>GET</h2>
    <p>Retrieves data from the server. Safe and idempotent.</p>
  </div>
  
  <div>
    <h2>POST</h2>
    <p>Sends data to create a new resource. Can have side effects.</p>
  </div>
  
  <div>
    <h2>PUT</h2>
    <p>Updates or creates a resource. Idempotent.</p>
  </div>
  
  <div>
    <h2>PATCH</h2>
    <p>Applies partial modifications to a resource. Idempotent.</p>
  </div>
  
  <div>
    <h2>DELETE</h2>
    <p>Requests removal of a resource. Idempotent.</p>
  </div>
  
  <div>
    <h2>HEAD</h2>
    <p>Requests response headers only.</p>
  </div>
  
  <div>
    <h2>OPTIONS</h2>
    <p>Requests communication options for a resource.</p>
  </div>
  
  <div>
    <h2>CONNECT</h2>
    <p>Establishes a network connection for secure tunneling.</p>
  </div>
  
  <div>
    <h2>TRACE</h2>
    <p>Retrieves diagnostic trace of actions. For debugging.</p>
  </div>
  
  <div style="text-align: center;">
    <p>HTTP methods provide a standardized way for clients to interact with web servers and perform actions on resources.</p>
  </div>

<h1>app.get("/")</h1>
<p>app.get("/", (req, res) => {.....}</p>
  <p>This code snippet uses Express.js to handle an HTTP GET request to the root path ("/") of a website.</p>
  <p>When a user visits the homepage, the specified callback function is executed. This function can define how the server responds to the request, such as sending HTML content, data from a database, or other actions.</p>

<h1>res.send</h1>
<p>res.send("index.ejs", {
  // ...
});
</p>
 <h1>res.send()</h1>
  <p>This code snippet uses Express.js to send a response to the client.</p>
  <p>The <code>res.send()</code> method is used to send a response content, such as plain text or HTML, back to the client's browser. It's commonly used to send strings, HTML, or JSON data as responses.</p>


  <h1>res.render()</h1>
  <p> res.render("index.ejs", {
        ................
    });</p>
  <p>This code snippet uses Express.js to render an EJS template with specific data values.</p>
  <p>The method <code>res.render()</code> is used to render the "index.ejs" template. It includes data values such as <code>dayType</code> and <code>advice</code>, which can be accessed within the template to dynamically generate content based on the provided data.</p>
  
<h1>app.listen()</h1>
<p>app.listen(3000, () => {
  // ...
});
</p>

   <h1>app.listen()</h1>
  <p>This code snippet uses Express.js to start a web server and listen for incoming connections.</p>
  <p>The method <code>app.listen()</code> is used to start a server on a specified port, in this case, port 3000. Once the server is running, the specified callback function is executed, allowing you to perform additional setup tasks or log server status.</p>

<h1>
  app.post("/", (req, res) => {
  // ...
  });</h1>
 <p>This code snippet uses Express.js to handle an HTTP POST request to the root path ("/") of a website.</p>
  <p>When a client submits data using an HTTP POST request to the homepage, the specified callback function is executed. This function can define how the server processes the submitted data and sends a response back to the client.</p>


</h1>

  
</body>
</html>
