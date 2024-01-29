 (async function() {
    const data2 = [
      {"mean":106,"sum":5313,"isbn":748,"fatturato":6510652},
      {"mean":119,"sum":6063,"isbn":1935,"fatturato":32114077},
      {"mean":278,"sum":12235,"isbn":2335,"fatturato":29800328},
      {"mean":457,"sum":39294,"isbn":1832,"fatturato":65934927},
      {"mean":180,"sum":4681,"isbn":601,"fatturato":6083488},
      {"mean":388,"sum":8155,"isbn":291,"fatturato":9343076},
      {"mean":321,"sum":37855,"isbn":1863,"fatturato":79809891},
      {"mean":513,"sum":11293,"isbn":1300,"fatturato":13346137},
      {"mean":260,"sum":13494,"isbn":3800,"fatturato":58356075},
      {"mean":368,"sum":11400,"isbn":3701,"fatturato":59016093},
      {"mean":78,"sum":18190,"isbn":4054,"fatturato":67794936},
      {"mean":326,"sum":23798,"isbn":2438,"fatturato":31741600},
      {"mean":276,"sum":4965,"isbn":509,"fatturato":7657419},
      {"mean":141,"sum":22184,"isbn":2720,"fatturato":52383397},
      {"mean":451,"sum":5863,"isbn":352,"fatturato":6547725}];
new Chart(
    document.getElementById('chart_b'),
    {
      type: 'bar',
      data: {
          labels: [["Agrario-Forestale", "e Veterinario"], ["Architettura", "e Ingegneria civile"],
             "Arte e Design", "Economico", "Giuridico",
             ["Informatica", "e Tecnologie ICT"],
             ["Ingegneria industriale", "e dell'informazione"], "Insegnamento",
             "Letterario-Umanistico", "Linguistico",
             ["Medico-Sanitario", "e Farmaceutico"], ["Politico-Sociale", "e Comunicazione"],
             "Psicologico", "Scientifico", "Scienze motorie e sportive"],
          datasets: [{
              label: "Media iscritti Lauree",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: data2.map(row => row.mean)
              },
              {
              label: "Numero titoli adottati",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              maxBarThickness: 20,
              data: data2.map(row => row.isbn)
              }],
          grouped:true
        },
      options: {
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          },
          title: {
            display: true,
            text: 'Lauree Triennali',
            font: {
                        size: 18
                    }
          },
          responsive: true,
           interaction: {
            intersect: true,
            },
          scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{
              stacked: false,
              ticks: {
                minRotation: 90
              },
            }]
          },
        }
      }
});
})();
