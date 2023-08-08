const express =require("express");
const cors =require("cors");
const { dbConnection } = require("../database/config.database");

class Server {

    constructor(){

        this.app = express();
 
        this.port= process.env.PORT;

        this.tasksPath="/api/tasks";

        this.conectarDB();

        this.middlewares();

        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //cors
        this.app.use(cors());
        //parseo del body
        this.app.use(express.json());
        //body-parser
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static("public"))
    }

    routes(){
        this.app.use(this.tasksPath,require("../routes/task.routes"))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor en el Puerto: ${this.port}`)})  
    }
}
      

module.exports = Server;