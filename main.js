var large = false;
$(document).ready(function() {
	$('#resize').on('click', function(e) {
		var gui = require('nw.gui');
		var win = gui.Window.get();
		if (large) {
			win.resizeBy(-350, 0);
			$('#right').hide();
			$('#left').css('width', '100%');
		} else {
			win.resizeBy(350, 0);
			$('#right').show();
			$('#left').css('width', 'calc(100% - 350px)');
		}
		
		large = !large;
		
	});
});