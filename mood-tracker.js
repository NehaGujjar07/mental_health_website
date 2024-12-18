const moodForm = document.getElementById("mood-form");
const moodChartCtx = document.getElementById("mood-chart").getContext("2d");

let moodData = []; // Array to store logged moods

moodForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve values from the form
  const mood = document.getElementById("mood").value;
  const intensity = parseInt(document.getElementById("intensity").value);
  const note = document.getElementById("note").value;

  // Log mood data
  moodData.push({ mood, intensity, note, date: new Date() });
  updateChart();

  // Clear the form
  moodForm.reset();
});

function updateChart() {
  const labels = moodData.map((entry) =>
    entry.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  );
  const intensities = moodData.map((entry) => entry.intensity);

  if (moodChart) {
    moodChart.destroy(); // Clear the chart before updating
  }

  moodChart = new Chart(moodChartCtx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Mood Intensity",
          data: intensities,
          borderColor: "#4b306a",
          backgroundColor: "rgba(75, 48, 106, 0.2)",
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          min: 1,
          max: 10,
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });
}

let moodChart;

