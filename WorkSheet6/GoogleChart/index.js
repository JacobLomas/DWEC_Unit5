//Por defecto
google.charts.load('current', {packages: ['corechart']});
//Libreria que se quiere cargar
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawPieChart);
var partidos=
    [
        ["PSOE", 6792199, "red"],
        ["PP", 5047040, "blue"],
        ["Vox", 3656979, "green"],
        ["UP", 3119364, "purple"],
        ["ERC-Soberansistes", 874859, "yellow"],
        ["Cs", 1650318, "orange"],
        ["JxCAT-JUNTS", 530225, "darkgreen"]
    ];
function drawChart() {
    //Crear  dataTable
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Partido');
    data.addColumn('number', 'Votos');
    data.addColumn({role:"style"});
    data.addRows(partidos);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Elecciones Generales para el congreso español",
        width: 1000,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        animation:{
          duration: 1000,
          easing: 'out',
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("elecciones"));
      chart.draw(view, options);
      window.setTimeout(()=>{   
        data.setValue(0,1,23000000);
        data.setValue(1,1,23000000);
        data.setValue(6,1,9099999);
        chart.draw(view, options);
      },1000)

}
function drawPieChart() {
    //Crear  dataTable
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Partido');
    data.addColumn('number', 'Votos');
    data.addColumn({role:"style"});
    data.addRows(partidos);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },

                       2]);

      var options = {
        title: "Elecciones Generales para el congreso español",
        width: 1000,
        height: 800,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        is3D:"true"
      };
      var chart = new google.visualization.PieChart(document.getElementById("pieChart"));
      chart.draw(view, options);

}