// https://www.chartjs.org/


window.function = function (inquire, advocate, task_focused, socialize, support, disagree, width, height) {

  // data
  inquire = inquire.value ?? "";
  advocate = advocate.value ?? "";
  task_focused = task_focused.value ?? "";
  socialize = socialize.value ?? "";
  support = support.value ?? "";
  disagree = disagree.value ?? "";
  width = width.value ?? "100";
  height = height.value ?? "80";
 

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  </head>
  <body>
  <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw">
  <canvas id="gr1"></canvas>
</div>
    <script>
    let config = {
        type: 'horizontalBar',
        data: {
            labels: ["Inquire vs Advocate","Task Focused vs Social","Support vs Disagree"],
            datasets: [{
                label: "Inquire",
                backgroundColor: "#E55934",
                data: [${inquire},0,0],
            }, {
                label: "Advocate",
                backgroundColor: "#DAC4F7",
                data: [${advocate},0,0]
            }, {
                label: "Task Focused",
                backgroundColor: "#549F93",
                data: [0,${task_focused},0]
            }, {
                label: "Socialize",
                backgroundColor: "#00254D",
                data: [0,${socialize},0]
            }, {
                label: "Support",
                backgroundColor: "#576CA8",
                data: [0,0,${support}]
            }, {
                label: "Disagree",
                backgroundColor: "#9A031E",
                data: [0,0,${disagree}]
            }, ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
             plugins: {
      datalabels: {
        display: false
      }
    },
    legend: {
        display: false
    },
            title: {
      display: true,
      text: 'Meeting Summary',
      fontSize: 20,
      padding: 30
    },
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                drawOnChartArea: false
            },
                    ticks: {
                        min: 0,
                        max: 100,
                        callback: function(value){return value+ "%"}
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                drawOnChartArea: false
            },
                }]
            },
            tooltips: {
                enabled: true,
                xAlign: 'center',
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
                    }
                }
            }
        }
    }
;

    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}