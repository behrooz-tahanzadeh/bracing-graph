Main = 
{	
	bracingConsole:false,
	
	
	
	
	init:function()
	{
		GBracing.canvas	= jQuery('#bracingDrawingArea').eq(0);
		GBracing.ctx	= jQuery('#bracingDrawingArea').get(0).getContext("2d");
		
		GGraph.canvas	= jQuery('#graphDrawingArea').eq(0);
		GGraph.ctx		= jQuery('#graphDrawingArea').get(0).getContext("2d");
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
	
};//eo Main{}


jQuery(document).ready(function(){
	Main.init();
});