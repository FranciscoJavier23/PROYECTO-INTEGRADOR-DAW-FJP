/*Asrchivo donde indicamos como trabaja el slider (rangos que tiene y posición del texto para que este sincornizado con el slider*/
/*Slider 1*/
$(window).load(function(){
	$("#slider").slider({
		range: true,
		min: 0,
		max: 280,
		step: 10,
		values: [0, 280],
		slide: function(event, ui) {
			var delay = function() {
				var handleIndex = $(ui.handle).data('index.uiSliderHandle');
				var label = handleIndex == 0 ? '#min' : '#max';
				$(label).html(ui.value).position({
					my: 'center top',
					at: 'center bottom',
					of: ui.handle,
					offset: "0, 10"
				});
			};
			
			// wait for the ui.handle to set its position
			setTimeout(delay, 5);
		}
	});

	$('#min').html($('#slider').slider('values', 0)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider a:eq(0)'),
		offset: "0, 10"
	});

	$('#max').html($('#slider').slider('values', 1)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider a:eq(1)'),
		offset: "0, 10"
	});
});

/*Slider 2*/
$(window).load(function(){
	$("#slider2").slider({
		range: true,
		min: 0,
		max: 280,
		step: 10,
		values: [0, 280],
		slide: function(event, ui) {
			var delay = function() {
				var handleIndex = $(ui.handle).data('index.uiSliderHandle');
				var label = handleIndex == 0 ? '#min2' : '#max2';
				$(label).html(ui.value).position({
					my: 'center top',
					at: 'center bottom',
					of: ui.handle,
					offset: "0, 10"
				});
			};
			
			// wait for the ui.handle to set its position
			setTimeout(delay, 5);
		}
	});

	$('#min2').html($('#slider2').slider('values', 0)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider2 a:eq(0)'),
		offset: "0, 10"
	});

	$('#max2').html($('#slider2').slider('values', 1)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider2 a:eq(1)'),
		offset: "0, 10"
	});
});

/*Slider 3*/
$(window).load(function(){
	$("#slider3").slider({
		range: true,
		min: 0,
		max: 280,
		step: 10,
		values: [0, 280],
		slide: function(event, ui) {
			var delay = function() {
				var handleIndex = $(ui.handle).data('index.uiSliderHandle');
				var label = handleIndex == 0 ? '#min3' : '#max3';
				$(label).html(ui.value).position({
					my: 'center top',
					at: 'center bottom',
					of: ui.handle,
					offset: "0, 10"
				});
			};
			
			// wait for the ui.handle to set its position
			setTimeout(delay, 5);
		}
	});

	$('#min3').html($('#slider3').slider('values', 0)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider3 a:eq(0)'),
		offset: "0, 10"
	});

	$('#max3').html($('#slider3').slider('values', 1)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider3 a:eq(1)'),
		offset: "0, 10"
	});
});

/*Slider 4*/
$(window).load(function(){
	$("#slider4").slider({
		range: true,
		min: 0,
		max: 280,
		step: 10,
		values: [0, 280],
		slide: function(event, ui) {
			var delay = function() {
				var handleIndex = $(ui.handle).data('index.uiSliderHandle');
				var label = handleIndex == 0 ? '#min4' : '#max4';
				$(label).html(ui.value).position({
					my: 'center top',
					at: 'center bottom',
					of: ui.handle,
					offset: "0, 10"
				});
			};
			
			// wait for the ui.handle to set its position
			setTimeout(delay, 5);
		}
	});

	$('#min4').html($('#slider4').slider('values', 0)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider4 a:eq(0)'),
		offset: "0, 10"
	});

	$('#max4').html($('#slider4').slider('values', 1)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider4 a:eq(1)'),
		offset: "0, 10"
	});
});

/*Slider 5*/
$(window).load(function(){
	$("#slider5").slider({
		range: true,
		min: 0,
		max: 280,
		step: 10,
		values: [0, 280],
		slide: function(event, ui) {
			var delay = function() {
				var handleIndex = $(ui.handle).data('index.uiSliderHandle');
				var label = handleIndex == 0 ? '#min5' : '#max5';
				$(label).html(ui.value).position({
					my: 'center top',
					at: 'center bottom',
					of: ui.handle,
					offset: "0, 10"
				});
			};
			
			// wait for the ui.handle to set its position
			setTimeout(delay, 5);
		}
	});

	$('#min5').html($('#slider5').slider('values', 0)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider5 a:eq(0)'),
		offset: "0, 10"
	});

	$('#max5').html($('#slider5').slider('values', 1)).position({
		my: 'center top',
		at: 'center bottom',
		of: $('#slider5 a:eq(1)'),
		offset: "0, 10"
	});
});