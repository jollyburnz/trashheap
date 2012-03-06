var jQT = new $.jQTouch({
	icon: 'jqtouch.png',
	addGlossToIcon: false,
	startupScreen: 'jqt_startup.png',
	statusBar: 'black',
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
		this.slides = Array.prototype.concat(main,slides);
		this.current = 0;

		this.lock = false;

		this.default_animation = 'dissolve';

	};

		Slider.prototype.left = function(animation){
			if(this.is_locked()){return;}
			animation = animation || this.default_animation;

			if(!this.current){
				this.current = this.slides.length;
			}else{
				this.current = this.current - 1 ;
			}
				jQT.goTo(this.slides[this.current],animation);

		};

		Slider.prototype.right = function(animation){
			if(this.is_locked()){return;}
			animation = animation || this.default_animation;

			if(this.current + 1 > this.slides.length){
				this.current = 0;
			}else{
				this.current = this.current + 1 ;
			}
				jQT.goTo(this.slides[this.current],animation);	

		};

		Slider.prototype.on_extra = false;


		Slider.prototype.extra_go = function(animation){
			this.lock = true;
			animation = animation || this.default_animation;
				if(!this.on_extra){
					jQT.goTo('#artist',animation);
					this.on_extra = !this.on_extra;
				}
		};

		Slider.prototype.extra_leave = function(animation){
			this.lock = false;
			animation = animation || this.default_animation;
				if(this.on_extra){
					jQT.goTo(this.slides[this.current],animation);
					this.on_extra = !this.on_extra;
				}
		};

		Slider.prototype.home = function(animation){
			animation = animation || this.default_animation;
			
			jQT.goTo(this.slides[0],animation);
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



	// var $main $slides Slider slider

	$main	= $('#main');
	$slides = $('.slide');


	slider = new Slider($main,$slides);

	Slider.prototype.sponser = function(){
		slider.goTo('#sponser');
	};


	$('#jqt').swipe(function(evt,data){

		if(data){
			if(data.direction == "right"){
			slider.left('slideright');
			console.log(data);
			}
		}

	});
	/*
	$('#jqt').swipeRight(function(evt,data){
	
		
	});
	
	$('#jqt').swipeLeft(function(evt,data){

		slider.right('slideleft');

	});

	$('#jqt').swipeUp(function(evt,data){

		slider.extra_leave('slideup');

	});

	$('#jqt').swipeDown(function(evt,data){

		slider.extra_go('pop');

	});

	*/

});
