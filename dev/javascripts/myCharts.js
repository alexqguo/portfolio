'use strict';

// http://stackoverflow.com/questions/25362014/chartjs-line-graph-dataset-with-offset

(function() {
    if (typeof Chart === 'undefined') {
        console.error('Chart is not here, goodbye');
        return;
    }

    /*
    // yes, commented code not good but it's my website I can do what I want! also gulp kills it anyway
    
    Chart.defaults.global.legend.display = false;

    function addBefore(num, arr) {
        return new Array(num).fill(null).concat(arr);
    }

    let prevLen = 0;
    let datasets = [];
    const TJ_DATA = {
        'IND10': {
            marks: ['11.87', '12.47', '13.23', '13.25'],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)'
        },
        'OUT10': {
            marks: ['12.92', 'NP', '12.81', '12.19', '13.15'],
            backgroundColor: 'rgba(255,100,130,0.4)',
            borderColor: 'rgba(255,100,130,1)'
        },
        'IND11': {
            marks: ['13.44', '13.09', '13.77', '12.43', '13.54'],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)'
        },
        'OUT11': {
            marks: ['13.63', '12.96', '13.80', '13.88', '14.00', '13.51', '13.35'],
            backgroundColor: 'rgba(255,100,130,0.4)',
            borderColor: 'rgba(255,100,130,1)'
        },
        'IND12': {
            marks: ['13.52', '11.77', '12.87', '13.54'],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)'
        },
        'OUT12': {
            marks: ['13.52', '13.76', '13.59', '12.56', '13.62', '13.42', '13.34'],
            backgroundColor: 'rgba(255,100,130,0.4)',
            borderColor: 'rgba(255,100,130,1)'
        },
        'IND13': {
            marks: ['13.49', '13.17', '13.37', '13.67', '13.96'],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)'
        },
        'OUT13': {
            marks: ['13.49', '13.15', '14.00', '14.46', '14.14', '13.90', '14.12'],
            backgroundColor: 'rgba(255,100,130,0.4)',
            borderColor: 'rgba(255,100,130,1)'
        },
        'IND15': {
            marks: ['14.10', '12.98'],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)'
        },
        'OUT15': {
            marks: ['13.80', '14.52', '14.01', '13.57', '13.55'],
            backgroundColor: 'rgba(255,100,130,0.4)',
            borderColor: 'rgba(255,100,130,1)'
        },
        'IND16': {
            marks: ['14.15', '13.73', 'FOUL', '14.08', '14.28'],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)'
        },
        'OUT16': {
            marks: ['14.62', '14.48', '14.96', 'FOUL', '14.95'],
            backgroundColor: 'rgba(255,100,130,0.4)',
            borderColor: 'rgba(255,100,130,1)'
        },
    };

    for (let key in TJ_DATA) {
        datasets.push({
            label: key,
            fill: false,
            lineTension: 0.1,
            backgroundColor: TJ_DATA[key].backgroundColor,
            borderColor: TJ_DATA[key].borderColor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: TJ_DATA[key].borderColor,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: TJ_DATA[key].borderColor,
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: addBefore(prevLen, TJ_DATA[key].marks),
            spanGaps: true,
        });

        prevLen += TJ_DATA[key].marks.length;
    }

    const labels = ['Ind.10', 'Ind.10', 'Ind.10', 'Ind.10', 'Out.10', 'Out.10', 'Out.10', 'Out.10', 'Out.10', 'Ind.11', 'Ind.11', 'Ind.11', 'Ind.11', 'Ind.11', 'Out.11', 'Out.11', 'Out.11', 'Out.11', 'Out.11', 'Out.11', 'Out.11', 'Ind.12', 'Ind.12', 'Ind.12', 'Ind.12', 'Out.12', 'Out.12', 'Out.12', 'Out.12', 'Out.12', 'Out.12', 'Out.12', 'Ind.13', 'Ind.13', 'Ind.13', 'Ind.13', 'Ind.13', 'Out.13', 'Out.13', 'Out.13', 'Out.13', 'Out.13', 'Out.13', 'Out.13', 'Ind.15', 'Ind.15', 'Out.15', 'Out.15', 'Out.15', 'Out.15', 'Out.15', 'Ind.16', 'Ind.16', 'Ind.16', 'Ind.16', 'Ind.16', 'Out.16', 'Out.16', 'Out.16', 'Out.16', 'Out.16'];
    */

    const tjMarks = ['11.87', '12.47', '13.23', '13.25', '12.92', 'NP', '12.81', '12.19', '13.15', '13.44', '13.09', '13.77', '12.43', '13.54', '13.63', '12.96', '13.80', '13.88', '14.00', '13.51', '13.35', '13.52', '11.77', '12.87', '13.54', '13.52', '13.76', '13.59', '12.56', '13.62', '13.42', '13.34', '13.49', '13.17', '13.37', '13.67', '13.96', '13.49', '13.15', '14.00', '14.46', '14.14', '13.90', '14.12', '14.10', '12.98', '13.80', '14.52', '14.01', '13.57', '13.55', '14.15', '13.73', 'FOUL', '14.08', '14.28', '14.62', '14.48', '14.96', 'FOUL', '14.95'];
    const ljMarks = ['5.70', '5.38', '5.72', '5.83', '5.95', '6.01', '6.05', '6.06', '6.15', '5.96', '5.63', '5.77', '5.99', '5.98', '6.05', '5.88', '5.84', '6.51', '6.26', '6.14', '6.49', '6.41', '6.08', '6.45', '5.44', '5.99', '6.33', '6.51', '6.15', '6.53', '5.99', '6.31', '6.54', '6.41', '6.57', '5.65', '6.55', '6.42', '5.94', '6.18', '6.12', '6.54', '6.41', '6.31', '6.40', '6.32', '6.86', '6.08', '6.49', '6.49', '6.30', '6.42', '6.69', '6.60', '6.90', '6.83'];

    let chartData = {
        /* 'canvasId': marks */
        'ljChart': ljMarks,
        'tjChart': tjMarks
    }

    for (let key in chartData) {
        let chartContextData = {
            labels: new Array(chartData[key].length),
            datasets: [
                {
                    label: 'Distance (m)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 2,
                    pointHitRadius: 10,
                    data: chartData[key],
                    spanGaps: false,
                }
            ]
        }

        let context = document.getElementById(key);
        let chart = window[key] = new Chart(context, {
            type: 'line',
            data: chartContextData,
            height: 300
        });
    }

}());
