function bracingConsole(r,c)
{
	this.rows = r;
	this.cols = c;
	
	this.bracingArr = [];
	
	for(var i=0; i<r; ++i)
	{
		this.bracingArr.push([]);
		
		for(var j=0; j<c; ++j)
			this.bracingArr[i][j] = false;
	}
}//eof




bracingConsole.prototype.addRod = function(i,j)
{
	this.bracingArr[i][j] = true;
};//eof

bracingConsole.prototype.removeRod = function(i,j)
{
	this.bracingArr[i][j] = false;
};//eof




bracingConsole.prototype.draw = function()
{
	GBracing.draw(this);
};//eof




bracingConsole.prototype.drawBracing = function()
{
	//clear bracing at first!
	
	for(var i=0; i<this.rows; ++i)
	{
		for(var j=0; j<this.cols; ++j)
		{
			this.drawBracingCell(i,j);
		}
	}
};//eof


bracingConsole.prototype.drawBracingCell = function(i,j)
{
	var ctx = Main.bracingCtx;
	
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	
	ctx.moveTo(i*10		,(j+1)*10	);
	ctx.lineTo(i*10		,j*10		);
	ctx.lineTo((i+1)*10	,j*10		);
	
	ctx.stroke();
	
	if(this.bracingArr[i][j])
	{
		ctx.strokeStyle = 'red';
		
		ctx.moveTo(i*10		,j*10		);
		ctx.lineTo((i+1)*10	,(j+1)*10	);
		
		ctx.stroke();
	}
};




bracingConsole.prototype.drawGraph = function()
{
	var ctx = Main.graphCtx;
	
	//clear bracing at first!
	for(var i=0; i<this.rows; ++i)
	{
		ctx.fillRect(0,i*10, 2,2);
	}
	
	for(var i=0; i<this.cols; ++i)
	{
		ctx.fillRect(30,i*10, 2,2);
	}
	
	for(var i=0; i<this.rows; ++i)
	{
		for(var j=0; j<this.cols; ++j)
		{
			this.drawGraphCell(i,j);
		}
	}
};//eof




bracingConsole.prototype.drawGraphCell = function(i,j)
{
	var ctx = Main.bracingCtx;
	
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	
	ctx.moveTo(i*10		,(j+1)*10	);
	ctx.lineTo(i*10		,j*10		);
	ctx.lineTo((i+1)*10	,j*10		);
	
	ctx.stroke();
	
	if(this.bracingArr[i][j])
	{
		ctx.strokeStyle = 'red';
		
		ctx.moveTo(i*10		,j*10		);
		ctx.lineTo((i+1)*10	,(j+1)*10	);
		
		ctx.stroke();
	}
};


















