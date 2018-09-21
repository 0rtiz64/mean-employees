const  Employee = require ('../models/employee');
const employeeCtrl= {};


//CONSULTAR TODOS LOS EMPLEADOS
employeeCtrl.getEmployees =async (req,res)=>{
  //CONSULTAR A LA BASE DE DATOS
 const  employees =    await Employee.find();
 res.json(employees);

    };


//GUARDAR EMPLEADO
employeeCtrl.createEmployee =  async (req,res)=>{
  const  employee = new Employee(req.body);
 await employee.save();
  res.json({
      'status': 'EMPLOYEE SAVED'
  });
};


//CONSULTAR UN EMPLEADO
employeeCtrl.getEmployee = async (req,res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

// EDITAR UN EMPLEADO
employeeCtrl.editEmployee = async (req,res) =>{
    const { id }= req.params;
    const employee = {
       name: req.body.name,
       position: req.body.position,
       office: req.body.office,
       salary: req.body.salary
    } ;
        await  Employee.findByIdAndUpdate(id,{$set:employee},{new:true});
        res.json({'status': 'EMPLOYEE UPDATE'});
}
s

//ELIMINAR UN EMPLEADO
employeeCtrl.deleteEmployee = async (req,res)=>{
 await Employee.findByIdAndRemove(req.params.id);
 res.json({
     'status': 'EMPLOYEE DELETED'
 });
}

module.exports = employeeCtrl;