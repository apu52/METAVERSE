window.onload = function() {
    var canvas = document.getElementById('myPieChart');
    if (canvas) {
      var ctx = canvas.getContext('2d');
      var pieChartData = {
        labels: ['Field 1', 'Field 2', 'Field 3'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      };
      var pieChartOptions = {
        responsive: true
      };
      var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
        options: pieChartOptions
      });
    }
  };
  