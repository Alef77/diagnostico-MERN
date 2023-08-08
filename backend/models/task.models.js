const { Schema, model}= require("mongoose");

const TaskSchema = Schema({
    username: {
        type: String,
        required: [true,"El username es obligatorio"]
    },
    description: {
        type: String,
        required: [true,"La descripcion es obligatorio"]
    },
    estadoTask:{
        type: String,
        required: [true,"El estado de la tarea es obligatorio"]
    },
    color:{
        type: String,
        required: [true,"El color es obligatorio"]
    },
    isActive:{
        type: Boolean,
        default: true
    }},
    {
        versionKey: false,
        //Fecha de Registro y Fecha de Actualizacion 
        timestamps:true
    }
)

module.exports = model("Tarea", TaskSchema);   