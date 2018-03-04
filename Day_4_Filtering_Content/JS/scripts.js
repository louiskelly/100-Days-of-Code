$( document ).ready(function() {

    var select = document.getElementById('valueselect');

    $('#valueselect').change(function(){
    	console.log(select.value)

    	var class1 = $('.class1');
    	var class2 = $('.class2');
    	var class3 = $('.class3');

    switch(select.value) {
    case '1':
        class1.fadeIn(400);
        class2.fadeOut(400);
        class3.fadeOut(400);
        break;
    case '2':
    	class1.fadeOut(400);
        class2.fadeIn(400);
        class3.fadeOut(400);
        break;
    case '3':
    	class1.fadeOut(400);
        class2.fadeOut(400);
        class3.fadeIn(400);
   		break;
    case 'ALL':
    	class1.fadeIn(400);
        class2.fadeIn(400);
        class3.fadeIn(400);    
	}
})

});
