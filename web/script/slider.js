/*Asrchivo donde indicamos como trabaja el slider (rangos que tiene y posición del texto para que este sincornizado con el slider*/
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