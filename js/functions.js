$(window).load(function() { // makes sure the whole site is loaded
		



	function evento() {
		
		$('#elements').animate({
			     opacity: 0,
			     marginTop:'100px'
			   }, 800);
		$('#header').delay(500).animate({
			     opacity: 0,
			     marginTop:'-80px'
			   }, 800)
		$('#menu').addClass('hidden')
	}
		$('#elements a.link').click(function(){
			$(this).each(function(event){
				var link = $(this).data('link')
				evento()
				$('#menu li:hover > a:after').hide();
				var timer = setTimeout(function() {
	            window.location= link
	        	}, 1200);
			})
		})


		$('#elements a.exLink').click(function(){
			$(this).each(function(event){
				var link = $(this).data('link')
				$('a.menuBtn').addClass('closed');
				$('a.menuBtn').removeClass('open');
				$('#header').addClass('closed')
				$('#header').removeClass('open')
				$('#menu').removeClass('on')
				$('ul#social').animate({
					marginTop:'-100px',
					opacity:0
				},500)
				setTimeout(function() { $('#menu').css({height:0,width:0}); }, 800);
				window.open(link);
				window.location= 'index.html'
			})
		})

		$('#elements a.current').click(function(){
				$('a.menuBtn').addClass('closed');
				$('a.menuBtn').removeClass('open');
				$('#header').addClass('closed')
				$('#header').removeClass('open')
				$('#menu').removeClass('on')
				$('ul#social').animate({
					marginTop:'-100px',
					opacity:0
				},500)
				setTimeout(function() { $('#menu').css({height:0,width:0}); }, 800);
		});

		})
