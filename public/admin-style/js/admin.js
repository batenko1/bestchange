// SALES CHART
var ctx = document.getElementById('saleschart').getContext('2d');
ctx.height = 10;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Total Sales',
            data: [19, 15, 17, 14, 13, 15, 16],
            backgroundColor: [
                'rgba(5, 195, 251, 0.2)',
                'rgba(5, 195, 251, 0.2)',
                '#05c3fb',
                'rgba(5, 195, 251, 0.2)',
                'rgba(5, 195, 251, 0.2)',
                '#05c3fb',
                '#05c3fb'
            ],
            borderColor: [
                'rgba(5, 195, 251, 0.5)',
                'rgba(5, 195, 251, 0.5)',
                '#05c3fb',
                'rgba(5, 195, 251, 0.5)',
                'rgba(5, 195, 251, 0.5)',
                '#05c3fb',
                '#05c3fb'
            ],
            pointBorderWidth: 2,
            pointRadius: 2,
            pointHoverRadius: 2,
            borderWidth: 1
        }, ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            enabled: false,
        },
        scales: {
            xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                barDatasetSpacing: 0,
                display: false,
                barThickness: 5,
                barRadius: 0,
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }
});

// CHARTJS SALES CHART CLOSED

// LEADS CHART
var ctx = document.getElementById('leadschart').getContext('2d');
ctx.height = 10;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6', 'Date 7', 'Date 8', 'Date 9', 'Date 10', 'Date 11', 'Date 12', 'Date 13', 'Date 14', 'Date 15'],
        datasets: [{
            label: 'Total Sales',
            data: [45, 23, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 36, 36, 32, 48, 54],
            backgroundColor: 'transparent',
            borderColor: '#f46ef4',
            borderWidth: '2.5',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
        }, ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            enabled: false,
        },
        scales: {
            xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                barDatasetSpacing: 0,
                display: false,
                barThickness: 5,
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
    }
});
// CHARTJS LEADS CHART CLOSED

// PROFIT CHART
var ctx = document.getElementById('profitchart').getContext('2d');
ctx.height = 10;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Total Sales',
            barGap: 0,
            barSizeRatio: 1,
            data: [14, 17, 12, 13, 11, 15, 16],
            backgroundColor: '#4ecc48',
            borderColor: '#4ecc48',
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#4ecc48',
            pointBorderColor: '#4ecc48',
            pointHoverBorderColor: '#4ecc48',
            pointBorderWidth: 2,
            pointRadius: 2,
            pointHoverRadius: 2,
            borderWidth: 1
        }, ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            enabled: false,
        },
        scales: {
            xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                barDatasetSpacing: 0,
                display: false,
                barThickness: 5,
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
    }
});
// PROFIT CHART CLOSED

// COST CHART
var ctx = document.getElementById('costchart').getContext('2d');
ctx.height = 10;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6', 'Date 7', 'Date 8', 'Date 9', 'Date 10', 'Date 11', 'Date 12', 'Date 13', 'Date 14', 'Date 15', 'Date 16', 'Date 17'],
        datasets: [{
            label: 'Total Sales',
            data: [28, 56, 36, 32, 48, 54, 37, 58, 66, 53, 21, 24, 14, 45, 0, 32, 67, 49, 52, 55, 46, 54, 130],
            backgroundColor: 'transparent',
            borderColor: '#f7ba48',
            borderWidth: '2.5',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
        }, ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        responsive: true,
        tooltips: {
            enabled: false,
        },
        scales: {
            xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                barDatasetSpacing: 0,
                display: false,
                barThickness: 5,
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent'
                }
            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                }
            }]
        },
        title: {
            display: false,
        },
    }
});
// COST CHART CLOSED


let myVarVal, myVarVal1, myVarVal2, myVarVal3

const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") { return a / 255 }
    if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
        return 1
    }
    return alpha
}

function names() {
    'use strict'

    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

    //get variable
    myVarVal = localStorage.getItem("sashprimaryColor") || localStorage.getItem("sashdarkPrimary") || localStorage.getItem("sashtransparentPrimary") || localStorage.getItem("sashtransparentBgImgPrimary")  || primaryColorVal;
    myVarVal1 = localStorage.getItem("sashprimaryColor") || localStorage.getItem("sashdarkPrimary") || localStorage.getItem("sashtransparentPrimary") || localStorage.getItem("sashtransparentBgImgPrimary")  || "#05c3fb";
    myVarVal2 = localStorage.getItem("sashprimaryColor") || localStorage.getItem("sashdarkPrimary") || localStorage.getItem("sashtransparentPrimary") || localStorage.getItem("sashtransparentBgImgPrimary")  || null;
    myVarVal3 = localStorage.getItem("sashprimaryColor") || localStorage.getItem("sashdarkPrimary") || localStorage.getItem("sashtransparentPrimary") || localStorage.getItem("sashtransparentBgImgPrimary") || null;

    if(document.querySelector('#transactions') !== null){
        index();
    }

    let colorData = hexToRgba(myVarVal || "#6c5ffc", 0.1)
    document.querySelector('html').style.setProperty('--primary01', colorData);

    let colorData1 = hexToRgba(myVarVal || "#6c5ffc", 0.2)
    document.querySelector('html').style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || "#6c5ffc", 0.3)
    document.querySelector('html').style.setProperty('--primary03', colorData2);

    let colorData3 = hexToRgba(myVarVal || "#6c5ffc", 0.6)
    document.querySelector('html').style.setProperty('--primary06', colorData3);

    let colorData4 = hexToRgba(myVarVal || "#6c5ffc", 0.9)
    document.querySelector('html').style.setProperty('--primary09', colorData4);

    let colorData5 = hexToRgba(myVarVal || "#6c5ffc", 0.05)
    document.querySelector('html').style.setProperty('--primary005', colorData5);

}
names()


function index() {


    let days
    let countUsers

    $.ajax({
        type: 'get',
        url: '/get-grafic-users',
        success:function (result) {
            days = result.days
            countUsers = result.countUsers


            var myCanvas = document.getElementById("transactions");
            myCanvas.height = "330";

            var myCanvasContext = myCanvas.getContext("2d");
            var gradientStroke1 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
            gradientStroke1.addColorStop(0, hexToRgba(myVarVal, 0.8) || 'rgba(108, 95, 252, 0.8)');
            gradientStroke1.addColorStop(1, hexToRgba(myVarVal, 0.2) || 'rgba(108, 95, 252, 0.2) ');


            document.getElementById('transactions').innerHTML = '';

            myChart = new Chart(myCanvas, {

                type: 'line',
                data: {
                    labels: days,
                    type: 'line',
                    datasets: [{
                        label: 'Total Sales',
                        data: countUsers,
                        backgroundColor: gradientStroke1,
                        borderColor: myVarVal,
                        pointBackgroundColor: '#fff',
                        pointHoverBackgroundColor: gradientStroke1,
                        pointBorderColor: myVarVal,
                        pointHoverBorderColor: gradientStroke1,
                        pointBorderWidth: 0,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        borderWidth: 3,
                        fill: 'origin'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: false,
                    },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: false,
                        },
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: 'rgba(119, 119, 142, 0.08)'
                            },
                            ticks: {
                                fontColor: '#b0bac9',
                                autoSkip: true,
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Month',
                                fontColor: 'transparent'
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 1050,
                                stepSize: 150,
                                fontColor: "#b0bac9",
                            },
                            display: true,
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                zeroLineColor: 'rgba(142, 156, 173,0.1)',
                                color: "rgba(142, 156, 173,0.1)",
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'sales',
                                fontColor: 'transparent'
                            }
                        }]
                    },
                    title: {
                        display: false,
                        text: 'Normal Legend'
                    }
                }
            });
        }
    })


}




function hexToRgba(hexValue, alpha) {
    'use strict'

    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}



