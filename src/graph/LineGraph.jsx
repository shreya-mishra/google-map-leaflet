export const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
        {
          label: "Job opportunities",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "black",
          borderColor: "black",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "red",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        //   data: [1500000, 3900000, 3000000, 4100000, 2300000, 1800000, 2000000]
          data: [400000,500000,600000, 1900000, 1800000,2000000]
        }
      ]
  };
  
  //const myRef = React.createRef();
 export const lineOptions = {
    onClick: (e, element) => {
      if (element.length > 0) {
        var ind = element[0]._index;
        alert(ind);
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          // stacked: true,
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            // Return an empty string to draw the tick line but hide the tick label
            // Return `null` or `undefined` to hide the tick line entirely
            userCallback(value) {
              // Convert the number to a string and splite the string every 3 charaters from the end
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);
  
              // Convert the array to a string and format the output
              value = value.join(".");
              return `Rp.${value}`;
            }
          }
        }
      ]
    },
    legend: {
      display: true
    },
    tooltips: {
      enabled: true
    }
  };
  