<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1669904581074/eiOU4pInF.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" width ="800px">
<h1>Embedded Java Script</h1>

<p>Extension: index.ejs</p>
<p>Here we write js inside HTML without using script tag </p>
<p>Embedded JavaScript is a programming language that is used to create interactive web applications. It is a client-side scripting language that runs inside the web browser. Embedded JavaScript enables web developers to create dynamic, interactive, and responsive web applications.</p>
<h2>EJS Tags</h2>
<p><%= variable%>                                                                  JSOutput It will show up on Output Screen</p>
<p><% console.log("hello") %>                                                      It will run on Terminal(Console) not on UI     </p>
<p><%- #<h1>Hello <h1>                                                              It will run(Render) as HTML code on UI</p>
<p><%% %%>                                                                           If we wish to % on our server website we can use it to display % on UI</p>
<p> <%# This is a Commnet %>                                                          THis won't be interpreted it will act as a comment                </p>
<p><%- include("index.ejs")%>                                                        Insert another EJS file</p>
