$(document).ready(function () {
    $('.forgot-pass').click(function (event) {
        $(".pr-wrap").toggleClass("show-pass-reset");
    });
    $('.pass-reset-submit').click(function (event) {
        $(".pr-wrap").removeClass("show-pass-reset");
    });
});
$(function () {
    Highcharts.chart('container', {
        title: {
            text: 'Clinical Data - By Numbers 2017'
            , x: -20 //center
        }
        , subtitle: {
            text: ''
            , x: -20
        }
        , xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
                , 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
        , yAxis: {
            title: {
                text: 'People'
            }
            , plotLines: [{
                value: 0
                , width: 1
                , color: '#808080'
            }]
        }
        , tooltip: {
            formatter: function () {
                return 'There are <b>' + this.y + '</b> '+this.series.name + ' registered in <b>'+ this.x + '</b>';
            }
        }
        , legend: {
            layout: 'vertical'
            , align: 'right'
            , verticalAlign: 'middle'
            , borderWidth: 0
        }
        , series: [{
            name: 'Clinics'
            , data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
        }, {
            name: 'Doctors'
            , data: [1, 2, 5, 8, 13, 21, 25, 26, 23, 89, 90, 100]
        }, {
            name: 'Patients'
            , data: [17, 26, 29, 34, 48, 51, 35, 56, 53, 78, 103, 110]
        }]
    });
    
    Highcharts.chart('appointmentChart', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Appointments'
        },        
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'appointments',
            data: [
                ['Consulted', 90],
                ['Cancelled', 10]
            ]
        }]
    });
    
    Highcharts.chart('patientChart', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Patient details'
        },        
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'patient(s)',
            data: [
                ['New', 90],
                ['Already registered', 10]
            ]
        }]
    });
    
    
   
    
    Highcharts.chart('doctorChart', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Specialization'
        },        
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'specialist',
            data: [
                ['Dentist', 35],
                ['Prosthodontist', 20],
                ['Orthodontist', 10],
                ['Endodontist', 20],
                ['Implantologist', 10]
            ]
        }]
    });
    
    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })
});

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});
