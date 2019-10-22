var userTotal = 0;
    var winTotal = 0;
    var loseTotal = 0;
    var crystal1 = Math.floor(Math.random()*12)+1;
    var crystal2 = Math.floor(Math.random()*12)+1;
    var crystal3 = Math.floor(Math.random()*12)+1;
    var crystal4 = Math.floor(Math.random()*12)+1;
    var guessNumber = Math.floor(Math.random()*102)+19;
    
    $('#crystalOne').on('click', function(){
        //we need to grab crystal1 value and add to total
        userTotal = userTotal + crystal1;
    $('#scoreArea').html(userTotal);
    
    if (userTotal === guessNumber) {
        winTotal = winTotal + 1;
        $('#gameWinCount').html('');
        $('#gameWinCount').html('Wins:'+winTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
    
    }
    else if (userTotal > guessNumber) {
        loseTotal = loseTotal + 1;
        $('#gameLossCount').html('');
        $('#gameLossCount').html('Losses:'+loseTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
        
    }  
    });

    $('#crystaltwo').on('click', function(){
        //we need to grab crystal1 value and add to total
        userTotal = userTotal + crystal2;
    $('#scoreArea').html(userTotal);
    
    if (userTotal === guessNumber) {
        winTotal = winTotal + 1;
        $('#gameWinCount').html('');
        $('#gameWinCount').html('Wins:'+winTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
    
    }
    else if (userTotal > guessNumber) {
        loseTotal = loseTotal + 1;
        $('#gameLossCount').html('');
        $('#gameLossCount').html('Losses:'+loseTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
        
    }  
    });

    $('#crystalthree').on('click', function(){
        //we need to grab crystal1 value and add to total
        userTotal = userTotal + crystal3;
    $('#scoreArea').html(userTotal);
    
    if (userTotal === guessNumber) {
        winTotal = winTotal + 1;
        $('#gameWinCount').html('');
        $('#gameWinCount').html('Wins:'+winTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
    
    }
    else if (userTotal > guessNumber) {
        loseTotal = loseTotal + 1;
        $('#gameLossCount').html('');
        $('#gameLossCount').html('Losses:'+loseTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
        
    }  
    });

    $('#crystalfour').on('click', function(){
        //we need to grab crystal1 value and add to total
        userTotal = userTotal + crystal4;
    $('#scoreArea').html(userTotal);
    
    if (userTotal === guessNumber) {
        winTotal = winTotal + 1;
        $('#gameWinCount').html('');
        $('#gameWinCount').html('Wins:'+winTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
    
    }
    else if (userTotal > guessNumber) {
        loseTotal = loseTotal + 1;
        $('#gameLossCount').html('');
        $('#gameLossCount').html('Losses:'+loseTotal);
        crystal1 = Math.floor(Math.random()*12)+1;
        crystal2 = Math.floor(Math.random()*12)+1;
        crystal3 = Math.floor(Math.random()*12)+1;
        crystal4 = Math.floor(Math.random()*12)+1;
        guessNumber = Math.floor(Math.random()*102)+19;
        $("#guessNumber").html(guessNumber);
        userTotal=0;
        $('#scoreArea').html(userTotal);
        
    }  
    });
   //$("#R1").html(crystalNumber);
   $("#guessNumber").html(guessNumber);