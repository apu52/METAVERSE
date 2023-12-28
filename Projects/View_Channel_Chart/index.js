const chartOptions = {
    chart: {
        type: 'area',
        height: 280,
        toolbar: {show: false},
        zoom: { enabled: false}
    },
    colors: ['#a134db'],
    series: [{name: 'Views', data: [13, 42, 39, 81, 41, 74, 56, 96, 32]}],
    dataLabels: {enabled: false},
    stroke: {width: 3, curve:'smooth'},
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        axisBorder: {show:false},
        labels: {style: {colors: '#a7a7a7', fontFamily: 'Poppins'}}

    },
    yaxis: {show: false},
    grid: {
        borderColor: 'rgba(0,0,0,0)',
        padding: { top: -30, bottom: -8, left: 12, right:12}
    },
    tooltip: {
        enabled:true,
        y: {formatter: value => `${value}K`},
        style: { fontFamily: 'Poppins'}

    },
    markers: { show:false}
};

const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();