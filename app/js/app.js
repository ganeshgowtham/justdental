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
});