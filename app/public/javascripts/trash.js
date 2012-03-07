var jQT = new $.jQTouch({
	icon: 'jqtouch.png',
	addGlossToIcon: false,
	startupScreen: 'jqt_startup.png',
	statusBar: 'black'
});

$(function(){
	// Custom Javascript (onReady)


	document.addEventListener(
	  'touchmove',
	  function(e) {
	      e.preventDefault();
	    },
	  false
	);
	

	Slider = function(main,slides){
		this.slides = main.concat(slides);
		this.current = 0;

		this.lock = false;

		this.default_animation = 'dissolve';

	};

		Slider.prototype.left = function(animation){
			if(this.is_locked()){return}
			animation = animation || this.default_animation;

			if(!this.current){
				this.current = this.slides.length;
			}else{
				this.current = this.current - 1 ;
			}
				jQT.goTo($(this.slides[this.current]),animation);

		};

		Slider.prototype.right = function(animation){
			if(this.is_locked()){return}
			animation = animation || this.default_animation;

			if(this.current + 1 > this.slides.length){
				this.current = 0;
			}else{
				this.current = this.current + 1 ;
			}
				jQT.goTo($(this.slides[this.current]),animation);	

		};



		Slider.prototype.extra_go = function(element,animation,lock){
			if(typeof lock != 'undefined'){
				this.lock = lock;
			}else{
				this.lock = true;
			}
			
			animation = animation || this.default_animation;
				jQT.goTo(element,animation);
		};

		Slider.prototype.extra_leave = function(animation){
			this.lock = false;
			animation = animation || this.default_animation;
					jQT.goTo($(this.slides[this.current]),animation);
		};

		Slider.prototype.home = function(animation){
			animation = animation || this.default_animation;
			
			jQT.goTo($(this.slides[0]),animation);
			this.lock = false;
		};

		Slider.prototype.goTo = function (name,animation){
			animation = animation || this.default_animation;
			
			jQT.goTo(name,animation);
			this.lock = false;
		};


		Slider.prototype.is_locked = function(){
			return this.lock;
		};

		Slider.prototype.lock_for_orientation = function(orientation){
		
		};


	////////////////////////// Application Logic

	overlayer = new Overlayer('body');

	
	 logo = $('#banner .logo');
	 center_element = function(element,to){
		var parent = {};
			if(to){
				parent.width  = to.width();
				parent.height = to.height();	
			}else{
				parent.width  = element.parent().width();
				parent.height = element.parent().height();
			}


		element.css('left', parent.width/2  - element.width() /2 );
		element.css('top' , parent.height/2 - element.height()/2 );
	};
	
		logo.one('load',function(){
			center_element(logo);	
		});


	_V_('video').ready(function(){
		center_element($('#video'));
	});


	$('#contact .submit').bind('click',function(){ overlayer.open($('.overlays .thank_you')).timer_close(2000); } );


	$('body').bind('turn',function(event,info){
		center_logo();
	});

	slider = new Slider($('#main') , $('.slide') );

	
	$('#jqt').swipeRight(function(evt,data){
		slider.left('slideright');
	});
	
	$('#jqt').swipeLeft(function(evt,data){
		slider.right('slideleft');
	});

	$('#jqt').swipeUp(function(evt,data){
		slider.extra_leave('slideup');
	});

	$('#jqt').swipeDown(function(evt,data){
		slider.extra_go('#contact','pop',false);
	});



});
