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
	this.draw();
};//eof

bracingConsole.prototype.removeRod = function(i,j)
{
	this.bracingArr[i][j] = false;
	this.draw();
};//eof

bracingConsole.prototype.toggleRod = function(i,j)
{
	this.bracingArr[i][j] = !this.bracingArr[i][j];
	this.draw();
	
	jQuery('#isRigid').html(this.isRigid()? 'Rigid' : 'NotRigid');
};//eof

bracingConsole.prototype.draw = function()
{
	GBracing.draw(this);
	GGraph.draw(this);
};//eof

bracingConsole.prototype.isRigid = function()
{
	return Checker.isRigid(this);
};