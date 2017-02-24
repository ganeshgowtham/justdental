$(function() {

	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true,
		events: [
			{
				title: 'Ganesh,Gowtham - Dental Implants',
				start: YM + '-01'
			},
			{
				title: 'Ujjwal Kohli - Root canal',
				start: YM + '-07',
				end: YM + '-08'
			},
			{
				id: 999,
				title: 'Sumant - Genral Checkup',
				start: YM + '-09T16:00:00'
			},
			{
				id: 999,
				title: 'Rama - Crown Fixing',
				start: YM + '-16T16:00:00'
			},
            {
                title: 'Santosh - Crown Fixing',
                start: YM + '-16T10:00:00'
            },
            {
                title: 'RAM (INFOSYS) (C) - Crown Fixing',
                start: YM + '-16T12:00:00'
            },
			{
				title: 'Ujjwal (Series)- Teeth Cavity removal',
				start: YESTERDAY,
				end: TOMORROW
			},
			{
				title: 'Ujjwal (Series)- Chipped teeth fixing',
				start: YM + '-16',
				end: YM + '-10'
			},
			{
				title: 'Aashish - Hyperdontia',
				start: YM + '-14',
				end: YM + '-10'
			},
			{
				title: 'Sudhindra - Brace fixing',
				start: YM + '-21',
				end: YM + '-10'
			},
			{
				title: 'Naidu A - Gum issue',
				start: YM + '-28',
				end: YM + '-10'
			},
			{
				title: 'Mrs. Naidu S - Clenching',
				start: YM + '-11',
				end: YM + '-10'
			}
		]
	});
});