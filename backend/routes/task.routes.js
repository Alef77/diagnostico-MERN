const { Router } = require("express");
const { tasksGet, 
    tasksPost, 
    tasksPut, 
    tasksDelete,
    markTaskAsFinished } = require("../controllers/task.controllers");

const router = Router();

//-----------------------GET-------------------------------------------
router.get('/', tasksGet);

//-----------------------POST-------------------------------------------
router.post('/', tasksPost);

//-----------------------PUT-------------------------------------------
router.put('/:id', tasksPut);

//-----------------------DELETE-------------------------------------------
router.delete('/:id', tasksDelete);

//-----------------------NUEVA RUTA PARA MARCAR COMO TERMINADA---------
router.put('/markfinished/:id', markTaskAsFinished);

module.exports = router;
