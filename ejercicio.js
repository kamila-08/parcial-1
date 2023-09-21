function enviar() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correoelectronico").value;

    var mensaje = "Nombre: " + nombre + "\n"; mensaje += "Teléfono: " + telefono + "\n"; mensaje += "correoelectrónico: " + correo;

    alert("Apreciado:\n\n" + nombre, "hemos recibido su mensaje Nos comunicaremos al telefono:" + telefono , "o direccio email:" +correo, "en los primos dias") ;
}