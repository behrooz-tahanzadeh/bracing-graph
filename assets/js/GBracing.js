GBracing = {
	canvas:false,
	ctx:false,
	bc: false,
	
	draw: function(bc)
	{
		this.bc = bc;
		
		this.drawRods();
		this.drawRows();
		this.drawCols();
	},
	
	drawRows: function()
	{
		for(var i=0; i<this.bc.rows; ++i)
		{
			this.ctx.font="10px Georgia";
			this.ctx.fillText("R "+i,10,(i*30)+50);
		}
	},
	
	drawCols: function()
	{
		for(var i=0; i<this.bc.cols; ++i)
		{
			this.ctx.font="10px Georgia";
			this.ctx.fillText("C "+i,(i*30)+50, 20);
		}
	},
	
	drawRods: function()
	{
		var ctx = this.ctx;
		
		for(var i=0; i<this.bc.rows; ++i)
		for(var j=0; j<this.bc.cols; ++j)
		{
		//-------------------------------------------------
			ctx.lineWidth = 1;
			ctx.strokeStyle = 'black';
			
			ctx.moveTo(i*10		,(j+1)*10	);
			ctx.lineTo(i*10		,j*10		);
			ctx.lineTo((i+1)*10	,j*10		);
			
			ctx.stroke();
			
			if(this.bc.bracingArr[i][j])
			{
				ctx.strokeStyle = 'red';
				
				ctx.moveTo(i*10		,j*10		);
				ctx.lineTo((i+1)*10	,(j+1)*10	);
				
				ctx.stroke();
			}
		//-------------------------------------------------
		}
	}//eof
};