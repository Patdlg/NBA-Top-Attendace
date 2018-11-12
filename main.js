//Chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "NBA Attendance",
      data: [
        20268,
        20290,
        19816,
        19687,
        19600,
        19596,
        19481,
        19432,
        19232,
        18997
      ]
    }
  ],
  xaxis: {
    categories: [
      "Bulls",
      "Sixers",
      "Raptorts",
      "Mavericks",
      "Heat",
      "Warriors",
      "Blazers",
      "Cavs",
      "Knicks",
      "Lakers"
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#F44336"]
  },
  dataLabels: {
    enabled: false
  },

  title: {
    text: "Top NBA Attendance",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event example
document.querySelector("button").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);
