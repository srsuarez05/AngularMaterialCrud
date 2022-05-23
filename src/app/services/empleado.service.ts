import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado'; 

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    { nombreCompleto: 'Lucas M', correo: 'lm@gmail.com', telefono: 12345, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Yess M', correo: 'Yess@gmail.com', telefono: 41243, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    { nombreCompleto: 'Sergio M', correo: 'Sergio@gmail.com', telefono: 45433, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Maxi M', correo: 'Maxi@gmail.com', telefono: 87412, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Andres M', correo: 'Andres@gmail.com', telefono: 856357, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    { nombreCompleto: 'Liliana M', correo: 'Liliana@gmail.com', telefono: 30874, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    { nombreCompleto: 'Mam M', correo: 'Mam@gmail.com', telefono: 13486, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Pap M', correo: 'Pap@gmail.com', telefono: 12872, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Kira M', correo: 'Kira@gmail.com', telefono: 12687, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Michael M', correo: 'Michael@gmail.com', telefono: 12087, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'}
  ]

  constructor() { }

  getEmpleados(){
    return this.listEmpleado.slice();
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  eliminarEmpleado(index: number){
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
  }

}
