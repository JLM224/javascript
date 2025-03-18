const banco = {
    nombre: "Jorge",
    apellido: "Medina",
    saldo: 0,
    ingresar: function (dinero) {
        //let dinero = prompt("Ingresa un monto mayor a 0");
        if (dinero < 0) {
            alert("Valor incorrecto");
        }
        this.saldo += Number(dinero);
    },
    extraer: function (dinero) {
        // let dinero = prompt("Ingresa un monto mayor a 0");
        if (dinero < 0) {
            alert("Valor incorrecto");
            return
        }
        
        if (dinero > this.saldo) {
            alert("No podes extraer mas de lo que tenes", this.saldo);
            return //Sirve para cortar la ejecucion del condicional, se usa sino se quiere usa else
                   //
        }
    },
    informar: function () {
        console.log(this.saldo);
    },
};