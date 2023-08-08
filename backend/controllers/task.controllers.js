const { response } = require("express");
const Tarea = require("../models/task.models");

//-----------------------GET-------------------------------------------
// Traer todas las tareas
const tasksGet = async (req, res) => {
    try {
        const tareasActiv = await Tarea.find({ isActive: true });
        const tareasNoActiv = await Tarea.find({ isActive: false });

        res.json({
            msg: "get Task",
            tareasActiv,
            tareasNoActiv
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

//-----------------------POST-------------------------------------------
// Guardar tareas
const tasksPost = async (req, res) => {
    try {
        const body = req.body;

        const tarea = new Tarea(body);

        await tarea.save();

        res.json({
            msg: "post Task",
            tarea
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
}

//-----------------------PUT-------------------------------------------
// Actualizar Tareas
const tasksPut = async (req, res) => {
    try {
        const id = req.params.id;

        const { isActive, username, ...resto } = req.body;

        // Validar bd
        const tarea = await Tarea.findByIdAndUpdate(id, resto, { new: true });

        res.json({
            msg: "put Task",
            tarea
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
}

//-----------------------DELETE------------------------------------------
// Eliminar Tareas
const tasksDelete = async (req, res) => {
    try {
        const id = req.params.id;

        const tarea = await Tarea.findByIdAndUpdate(id, { isActive: false });

        res.json({
            msg: "delete Task",
            id
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
}

//-----------------------MODIFICAR ESTADO A TERMINADO--------------------------------------
const markTaskAsFinished = async (req, res) => {
    try {
        const id = req.params.id;

        // Validar bd y modificar estadoTask a "TERMINADO"
        const tarea = await Tarea.findByIdAndUpdate(id, { estadoTask: "Terminado" }, { new: true });

        res.json({
            msg: "Task marked as finished",
            tarea
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
}

//-----------------------EXPORTACION-------------------------------------------
module.exports = {
    tasksGet,
    tasksPost,
    tasksPut,
    tasksDelete,
    markTaskAsFinished
}
