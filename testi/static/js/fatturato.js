
 (async function() {
  const datatab = [
    {"triennali":13281730,"magistrali":7726149,"ciclo_unico":7339405},
    {"triennali":65512717,"magistrali":49742078,"ciclo_unico":19643270},
    {"triennali":60792669,"magistrali":22078252,"ciclo_unico":0},
    {"triennali":134507251,"magistrali":91139884,"ciclo_unico":0},
    {"triennali":12410315,"magistrali":822848,"ciclo_unico":116576448},
    {"triennali":19059875,"magistrali":4560150,"ciclo_unico":0},
    {"triennali":162812177,"magistrali":151067444,"ciclo_unico":0},
    {"triennali":27226119,"magistrali":6055968,"ciclo_unico":11310767},
    {"triennali":119046393,"magistrali":81204317,"ciclo_unico":125584},
    {"triennali":120392829,"magistrali":58603300,"ciclo_unico":0},
    {"triennali":138301669,"magistrali":7960469,"ciclo_unico":201199330},
    {"triennali":64752864,"magistrali":40020899,"ciclo_unico":0},
    {"triennali":15621134,"magistrali":12133893,"ciclo_unico":0},
    {"triennali":106862129,"magistrali":70685235,"ciclo_unico":0},
    {"triennali":13357359,"magistrali":2089084,"ciclo_unico":0}];
  

  new Chart(
    document.getElementById('fatturato'),
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
        datasets: [
          {
            label: 'Lauree Triennali',
            data: datatab.map(row => row.triennali),
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
          },
          {
            label: 'Lauree Magistrali',
            data: datatab.map(row => row.magistrali),
            borderColor: '#FF6384',
            backgroundColor: '#FFB1C1',
          },
          {
            label: 'Lauree Ciclo Unico',
            data: datatab.map(row => row.ciclo_unico),
            backgroundColor: '#316395'
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          },
          title: {
            display: true,
            text: 'Fatturato complessivo',
            font: {
                        size: 18
                    }
          },
          responsive: true,
          scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{
                stacked: false,
                ticks: {
                  minRotation: 90,
                },
                max:220000000
              }],
            }
          }
        }
      }
      );
})();



