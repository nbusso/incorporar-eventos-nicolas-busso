class Factura {
    constructor(fecha, proveedor, numeroFac, montoFac, iva) {
        this.fecha = fecha;
        this.proveedor = proveedor;
        this.numeroFac = numeroFac;
        this.montoFac = montoFac;
        this.iva = iva;
    }

    calcularPrecioSinIva() {
        let precioSinIva = 0;
        if (this.iva == 1) {
            precioSinIva = this.montoFac / 1.105;
        } else if (this.iva == 2) {
            precioSinIva = this.montoFac / 1.21;
        } else {
            precioSinIva = this.montoFac / 1.27;
        }
        return parseFloat(precioSinIva);
    }

    calcularIngresosBrutos() {
        let retIngresosBrutos = this.montoFac * 0.007;
        return parseFloat(retIngresosBrutos);
    }

    calcularGanancias() {
        let retGanancias = this.calcularPrecioSinIva() * 0.02;
        return parseFloat(retGanancias);
    }
}

function tomarDatos() {
    fecha = document.getElementById('fechaFactura').value;
    proveedor = document.getElementById('proveedor').value;
    numeroFactura = parseInt(document.getElementById('nFactura').value);
    montoFactura = parseFloat(document.getElementById('montoFactura').value);
    iva = document.getElementById('tipoIva').value;

    nuevaFactura = new Factura(fecha, proveedor, numeroFactura, montoFactura, iva);

    document.getElementById('totalFactura').value =`$ ${montoFactura}`;

    let a = document.getElementById('contieneIibb');
    let b = a.checked ? nuevaFactura.calcularIngresosBrutos() : 0 ;
    document.getElementById('iibbFactura').value = `$ ${b.toFixed(2)}`;

    let c = document.getElementById('contieneGcias');
    let d = c.checked ? nuevaFactura.calcularGanancias() : 0 ;
    document.getElementById('gciasFactura').value = `$ ${d.toFixed(2)}`;

    document.getElementById('valoresFactura').value = `$ ${(montoFactura - b - d).toFixed(2)}`;

    document.getElementById('contenidoResultado').style.display = '';
}


function mostrarSinIvaEnTiempoReal(tipoIva){
    let monto = document.getElementById('montoFactura').value;
    if (tipoIva == 1) {
        iva = 1.105;
    } else if (tipoIva == 2) {
        iva = 1.21;
    } else {
        iva = 1.27;
    }
    document.getElementById('netoSinIva').value = `$ ${(monto / iva).toFixed(2)}`;
    document.getElementById('mostrarIva').style.display = '';
}

