        const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Blue', 'Red', 'Orange', 'Yellow'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });