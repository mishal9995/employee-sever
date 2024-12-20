//import json-server
const jsonServer = require('json-server')

//create json-server
const employeeServer= jsonServer.create()

//set path for json file
const router=jsonServer.router('db.json')

//middleware
const middleware=jsonServer.defaults()

//server use middleware and router
employeeServer.use(middleware)
employeeServer.use(router)

//set the port
const port = 3000 || process.env.PORT


employeeServer.listen(port,()=>{
    console.log(`EmployeeServer running successfully at port number ${port}`);
})