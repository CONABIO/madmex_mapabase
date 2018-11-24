 var optionss = {

    chart: {
    renderTo: 'pastel',
    zoomType: 'xy',
    type: 'pie'
    },
    title: {
        text: 'Cobertura de Suelo en Hectáreas: Mapa Base MAD-Mex 2015',
        style: {
            color: '#FFFFFF'
          } 
    },
    subtitle: {
        text: 'Hectáreas'
    },
    tooltip: {
        pointFormat: '{series.name}: <b> {point.y:.1f} Ha</b>'
    },
    plotoptionss: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y:.1f} Ha',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
series: []
}
        $.getJSON("./rapideye/2015/Total/17_pie.json", function(json) {
        optionss.series[0] = json[0];
        // console.log(optionss.series[0])
        pastel = new Highcharts.Chart(optionss);
        });
        
        var pastel = new Highcharts.Chart(optionss);

          $("#load_chart").click(function(){
            // alert('f')
          var selected_values = $("#dropdowns :selected").map(function (i,sel) {
            return sel.value;
          }).toArray();

          selected_values = selected_values.toString().replace(/,/g, "/");
          // console.log(selected_values);

          $.getJSON("./"+selected_values+"_pie.json", function(json) {
            optionss.series[0] = json[0];
            pastel = new Highcharts.Chart(optionss);
          });
        var pastel = new Highcharts.Chart(optionss);    
    });