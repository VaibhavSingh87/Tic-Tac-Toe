var grid=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    var chance=true;
        document.getElementById("chance").innerText="Player 1's turn";
    var finished=false;
    function put(x,y)
    {
        var s="m"+x+y;
        if(chance && !finished)
        {
            document.getElementById("chance").innerText="Player 2's turn";
            if(grid[x][y]===-1)
            {   
                grid[x][y]=1;
                document.getElementById(s).value="X";
                chance=false;
            }
        }
        else
        if(!chance && !finished)
        {
            document.getElementById("chance").innerText="Player 1's turn";
            if(grid[x][y]===-1)
            {
                grid[x][y]=0;
                document.getElementById(s).value="O";
                chance=true;
            }
        }
        var res=checkWin(grid);
        if(res === 1)
        {
            document.getElementById("result").innerHTML="<h2>Player 1 Wins!</h2>";
            finished=true;
            document.getElementById("chance").remove();
        }
        else
        if(res === 2)
        {
            document.getElementById("result").innerHTML="<h2>Player 2 Wins!</h2>";
            finished=true;
            document.getElementById("chance").remove();
        }
        else
        if(res === 0)
        {
            document.getElementById("result").innerHTML="<h2>Its a DRAW!</h2>";
            finished=true;
            document.getElementById("chance").remove();
        }
    }
    function checkWin(mat)
    {
        for(var i=0;i<3;i++)
        {
            var c1=0,c2=0;
            for(var j=0;j<3;j++)
            {
                if(mat[i][j]===1)
                {
                    c1++;
                }
                else
                if(mat[i][j]===0)
                {
                    c2++;
                }
            }
            if(c1===3)
            return 1;
            if(c2===3)
            return 2;
        }
        for( j=0;j<3;j++)
        {
             c1=0;c2=0;
            for( i=0;i<3;i++)
            {
                if(mat[i][j]===1)
                {
                    c1++;
                }
                else
                if(mat[i][j]===0)
                {
                    c2++;
                }
            }
            if(c1===3)
            return 1;
            if(c2===3)
            return 2;
        }
         c1=0;c2=0;
        for( i=0;i<3;i++)
        {
                if(mat[i][i]===1)
                {
                    c1++;
                }
                else
                if(mat[i][i]===0)
                {
                    c2++;
                }
        }
        if(c1===3)
        return 1;
        if(c2===3)
        return 2;
        c1=0;c2=0;
        for( i=0,j=2;i<3;i++,j--)
        {
                if(mat[i][j]===1)
                {
                    c1++;
                }
                else
                if(mat[i][j]===0)
                {
                    c2++;
                }
        }
        if(c1===3)
        return 1;
        if(c2===3)
        return 2;
        for( i=0;i<3;i++)
        {
            for( j=0;j<3;j++)
            {
                if(mat[i][j]===-1)
                {
                    return -1;
                }
            }
        }
        return 0;
    }