class Empleado {
    // Atributos de la clase
    constructor(codigo, nombre, apellido, correo, cargo) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.cargo = cargo;
    }
  
    // Método para calcular el sueldo bruto
    sueldoBruto() {
      let sueldo = 0;
      switch (this.cargo) {
        case "Jefe":
          sueldo = 5000;
          break;
        case "Analista":
          sueldo = 4000;
          break;
        case "Programador":
          sueldo = 3000;
          break;
        case "Soporte":
          sueldo = 2000;
          break;
        case "Asistente":
          sueldo = 1500;
          break;
      }
      return sueldo;
    }
  
    // Para calcular el descuento
    descuento() {
      const descuento = this.sueldoBruto() * 0.125;
      return descuento;
    }
  
    //Para sueldo neto
    sueldoNeto() {
      const sueldoNeto = this.sueldoBruto() - this.descuento();
      return sueldoNeto;
    }
  }
  const empleado1 = new Empleado(
    "001",
    "Percy Edgar",
    "Quispe Quispe",
    "1oercyqq@gmail.com",
    "Programador"
  );
  console.log(empleado1)
  console.log("El sueldo bruto es: "+ empleado1.sueldoBruto() + " Nuevos soles");
  console.log("El descuento es: "+empleado1.descuento()+ " Nuevos soles");
  console.log("El sueldo neto es: "+empleado1.sueldoNeto()+ " Nuevos soles");

      