var options = {

        chart: {
        renderTo: 'container',
        zoomType: 'xy'
        },
        title: {
        text: 'Distribución Espacial de la Cobertura de Suelo: Mapa Base MAD-Mex e INEGI',
          style: {
            color: '#FFFFFF'
          }
        },
        subtitle: {
            text: 'Porcentajes',
            style: {
              color: '#FFFFFF'
            }
        },
        xAxis: [{
        categories: ["Bosques de aciculifolias y escuamifolias","Bosques latifoliados","Bosque húmedo de montaña","Manglar y petén","Selvas húmedas","Selvas secas","Matorral alto denso","Matorral mésico","Matorral bajo abierto","Vegetación acuática menor","Vegetación de suelos arenosos","Vegetación halófila","Pastizales y otra vegetación herbácea","Tierras agrícolas","Urbano y construido","Suelo desnudo","Agua"],
        crosshair: true
        }],
         yAxis: [{ // Primary yAxis
        min: 0,
        max: 80,
        tickInterval: 10,
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Porcentaje INEGI serie VI',
            style: {
                color: "#FFFFFF"
            }
        }
    }, { // Secondary yAxis
        min: 0,
        // max: 80,
        tickInterval: 10,
        title: {
            text: 'Porcentaje MAD-Mex',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} %',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
        tooltip: {
            shared: true
        },
        plotOptions: {
            bar: {
                dataLabels: {
                enabled: true,
                allowOverlap: true
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        credits: {
            enabled: false
        },
        series: []
        }


        $.getJSON("./rapideye/2015/Total/17_bar.json", function(json) {
        options.series[0] = json[0];
        // options.series[1] = json[2];
        ////options.series[2] = json[3];
        chart = new Highcharts.Chart(options);
        });
        
        var chart = new Highcharts.Chart(options);

        $("#load_chart").click(function(){
            // alert('f')
          var selected_values = $("#dropdowns :selected").map(function (i,sel) {
            return sel.value;
          }).toArray();

          selected_values = selected_values.toString().replace(/,/g, "/");
          // console.log(selected_values);

          $.getJSON("./"+selected_values+"_bar.json", function(json) {
            options.series[0] = json[0];
            // options.series[1] = json[2];
            chart = new Highcharts.Chart(options);
          });
          var chart = new Highcharts.Chart(options);    
    });