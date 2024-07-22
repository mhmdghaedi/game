"use strict";

var RandomNumber = Random();
document.querySelector(".number").value = RandomNumber;

var score = document.querySelector('.score').textContent;


document.querySelector(".check").addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);
    
    if(guess==""){
        alert("please enter a number");

    }
    else
    {
        if(guess >20 || guess<1)
            {
                alert("please enter a number between 1 and 20");
            }

        else{
               
            if(RandomNumber==guess)
                {
                    document.querySelector('.message').textContent = "😁 Correct Number";
                    document.querySelector('.hint').textContent = "............";
                    document.querySelector(".number").textContent = RandomNumber;
                    document.querySelector('.score').textContent = score;
                    const number = document.querySelector('.number');
                    number.style.background = 'rgb(114, 215, 14)';
                    
                    
                }
            else if(0>guess>20)
                {
                    document.querySelector('.message').textContent = "please enter a number between 1 and 20";
                    document.querySelector('.score').textContent = score;
                }  
        
            else
            {
                document.querySelector('.message').textContent = "⛔ No Number";
                        score--;
                         document.querySelector('.score').textContent = score;
                         if(score == 0)
                            {
                                document.querySelector('.message').textContent = "Game Over";
                                document.querySelector('.check').addEventListener('click',function(){
                                    document.querySelector('.score').textContent = 20;
                                    document.querySelector('.message').textContent = "Start guessing...";
                                    document.querySelector('.hint').textContent = "............";
                                    document.querySelector(".number").textContent = "?";
                                    document.querySelector('.guess').value = "";
                                })
                                
                            }
        
                 
                if(RandomNumber>guess)
                    {
                        document.querySelector('.hint').textContent = "Enter a larger number";
        
                    }
                else if(RandomNumber<guess)
                    {
                        document.querySelector('.hint').textContent = "Enter a smaller number";
        
                    }  
                  
            }   
        }    
    
    }
}) 


document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.hint').textContent = "............";
    document.querySelector(".number").textContent = "?";
    document.querySelector('.guess').value = "";
    const number = document.querySelector('.number');
    number.style.background = '#eee';
    window.location.reload();

})

 function  Random (){
   return Math.floor(Math.random() * 20) + 1;
    
}

