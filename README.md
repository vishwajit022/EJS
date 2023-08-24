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
</body>
</html>
