'use strict';

(function() {
    if (typeof Chart === 'undefined') {
        console.error('Chart is not here, goodbye');
        return;
    }

    const marks = ["11.87", "12.47", "13.23", "13.25", "12.92", "NP", "12.81", "12.19", "13.15", "13.44", "13.09", "13.77", "12.43", "13.54", "13.63", "12.96", "13.80", "13.88", "14.00", "13.51", "13.35", "13.52", "11.77", "12.87", "13.54", "13.52", "13.76", "13.59", "12.56", "13.62", "13.42", "13.34", "13.49", "13.17", "13.37", "13.67", "13.96", "13.49", "13.15", "14.00", "14.46", "14.14", "13.90", "14.12", "14.10", "12.98", "13.80", "14.52", "14.01", "13.57", "13.55", "14.15", "13.73", "FOUL", "14.08", "14.28", "14.62", "14.48", "14.96", "FOUL", "14.95"];
    const labels = new Array(marks.length);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Distance (meters)",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: marks,
                spanGaps: false,
            }
        ]
    };

    let context = document.getElementById('tjChart');
    let tjChart = new Chart(context, {
        type: 'line',
        data: data,
        height: 300
    });

}());
