var options = {
    chart: {
        type: 'bar',  // Tipo de gráfico
        height: 350,
        width:500
    },
    series: [{
        name: 'Ventas',
        data: [30, 40, 45, 50, 49, 60, 70]  // Datos
    }],
    xaxis: {
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']  // Etiquetas del eje X
    }
};

console.log("HOLA")

var chart = new ApexCharts(document.querySelector("#chart"), options);
var chart2 = new ApexCharts(document.querySelector("#chart2"),options);
chart.render();
chart2.render();
