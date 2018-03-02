$( document ).ready(function() {

	setInterval(function(){

		var backgroundColor = ['#F0433A','#C9283E','#820333','#540032','2E112D','lightgreen','darkgreen','lightblue','darkblue','yellow','white'];
		var backgroundImage = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'];

	    $('#morph').css('background-color',backgroundColor[Math.floor(Math.random()*backgroundColor.length)]);
	    $('#morph').css('background-image','url("'+ backgroundImage[Math.floor(Math.random()*backgroundImage.length)]+'")');
	    $('#morph').css('width', Math.floor(Math.random() * 300) + 50)
	    $('#morph').css('height', Math.floor(Math.random() * 300) + 50)
	    $('#morph').css('border-top-left-radius', Math.floor(Math.random() * 300) + 0)
	    $('#morph').css('border-top-right-radius', Math.floor(Math.random() * 300) + 0)
	    $('#morph').css('border-bottom-left-radius', Math.floor(Math.random() * 300) + 0)
	    $('#morph').css('border-bottom-right-radius', Math.floor(Math.random() * 300) + 0)

	}, 500);

});
