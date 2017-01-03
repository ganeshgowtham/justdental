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
				title: 'Dr Baskar - Gowtham',
				start: YM + '-01'
			},
			{
				title: 'Dr Baskar - Root canal',
				start: YM + '-07',
				end: YM + '-10'
			},
			{
				id: 999,
				title: 'Dr Suman - Genral Checkup',
				start: YM + '-09T16:00:00'
			},
			{
				id: 999,
				title: 'Dr Rama - Crown Fixing',
				start: YM + '-16T16:00:00'
			},
			{
				title: 'Dr Siva - Teeth Cavity removal',
				start: YESTERDAY,
				end: TOMORROW
			},
			{
				title: 'Dr Baskar - Chipped teeth fixing',
				start: YM + '-16',
				end: YM + '-10'
			},
			{
				title: 'Dr Rama - Hyperdontia',
				start: YM + '-14',
				end: YM + '-10'
			},
			{
				title: 'Dr Sangeetha - Brace fixing',
				start: YM + '-21',
				end: YM + '-10'
			},
			{
				title: 'Dr Kumar - Gum issue',
				start: YM + '-28',
				end: YM + '-10'
			},
			{
				title: 'Dr Suresh - Clenching',
				start: YM + '-11',
				end: YM + '-10'
			}
		]
	});
});