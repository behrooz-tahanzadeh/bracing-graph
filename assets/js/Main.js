Main = 
{	
	bracingConsole:false,
	
	
	
	
	init:function()
	{
		GBracing.canvas	= jQuery('#bracingDrawingArea').get(0);
		GBracing.ctx	= jQuery('#bracingDrawingArea').get(0).getContext("2d");
		GBracing.init();
		
		GGraph.canvas	= jQuery('#graphDrawingArea').get(0);
		GGraph.ctx		= jQuery('#graphDrawingArea').get(0).getContext("2d");
		GGraph.init();
	},
	
	
	
	
	windowOnKeyDown: function(e)
	{
		switch (e.keyCode)
		{
		case Keyboard.Right:
			var v = parseFloat(jQuery('input#tail').val())+(e.shiftKey?0.1:0.01);
			jQuery('input#tail').val(v);
			Main.tailChange(null);
			
			break;
			
		case Keyboard.Left:
			var v = parseFloat(jQuery('input#tail').val())-(e.shiftKey?0.1:0.01);
			jQuery('input#tail').val(v);
			Main.tailChange(null);
			
			break;
			
		case Keyboard.Space:
			Main.pp();
			break;
		
		default:
			console.log(e.keyCode);
		}
	},
	
	
	drawBtnOnClick: function()
	{
		Main.bracingConsole = new bracingConsole(parseInt(jQuery('input#rowsNumber').val()), parseInt(jQuery('input#colsNumber').val()));
		Main.bracingConsole.draw();
	}
	
};//eo Main{}


jQuery(document).ready(function(){
	Main.init();
});