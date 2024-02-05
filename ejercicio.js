function calcularPromedio(event) {
    event.preventDefault();
    var v1 = document.getElementById("parcial1").value;
    var v2 = document.getElementById("parcial2").value;
    var v3 = document.getElementById("parcial3").value;
    var vExamenParcial = document.getElementById("examenParcial").value;
    var vTrabajoFinal = document.getElementById("trabajoFinal").value;
    if (v1 === '' || v2 === '' || v3 === '' || vExamenParcial === '' || vTrabajoFinal === '') {
        document.getElementById("mensajeError").innerHTML = "Por favor, completa todos los campos antes de calcular el promedio.";
        return false;
    }
    if (v1 > 50 || v1 < 10 || v2 > 50 || v2 < 10 || v3 > 50 || v3 < 10 || vExamenParcial > 50 || vExamenParcial < 10 || vTrabajoFinal > 50 || vTrabajoFinal < 10) {
        document.getElementById("mensajeError").innerHTML = "El rango de ingreso de notas NO debe ser mayor a 50 ni menos a 10";
        return false;
    } else {
        var promedioParciales = (parseFloat(v1) + parseFloat(v2) + parseFloat(v3)) / 3;
        var promedioExamenParcial = parseFloat(vExamenParcial);
        var promedioTrabajoFinal = parseFloat(vTrabajoFinal);
        var promedioFinal = (promedioParciales * 0.55) + (promedioExamenParcial * 0.3) + (promedioTrabajoFinal * 0.15);
    }
    document.getElementById("resultado").innerHTML = "Su promedio final es: " + promedioFinal.toFixed(1);
    $('#resultadoModal').modal('show');

    if (promedioFinal >= 10 && promedioFinal <=32) {
        document.getElementById("aprox").innerHTML = "Usted ha reprobado"
    }
    else {
        document.getElementById("aprox").innerHTML = "Usted ha aprobado"
    }
    return false;
}