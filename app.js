// THIS IS ONE WAY TO DO DE EXERCISE, BUT NOT THE CLEAREST
    // window.onload = function(){
    //     let number = Math.floor(Math.random() * 12-0) +1;
    //     let numberDiv = document.querySelector('#number');
    
    //     if(number==12){number = 'K'}
    //     if(number==11){number = 'Q'}
    //     if(number==10){number = 'J'}

    //     let suitDiv = document.querySelectorAll('.suit');
    //     let randomsuit = Math.floor(Math.random() * 4 - 1) +1
        
    //     if(randomsuit == 1){
    //         var suit = "<p style ='color:red'>♦</p>"
    //     }else if(randomsuit == 2){
    //         var suit = "<p style ='color:red'>♥</p>"
    //     }else if(randomsuit == 3){
    //         var suit = "<p style ='color:black'>♠</p>"
    //     }else{
    //         var suit = "<p style ='color:black'>♣</p>"
    //     }

    

    //     numberDiv.innerHTML = number;
    //     suitDiv[0].innerHTML = suit
    //     suitDiv[1].innerHTML = suit
        
    // };

//THIS IS A BETTER WAY TO SOLVE IT

let button = document.querySelector('#push_button');

button.addEventListener('click', function(){
    // here we program random numbres
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
    let numberDiv = document.querySelector('#number');
    let number = Math.floor(Math.random() * (11-0+1));

    
    
    if(number==11){numberDiv.innerHTML = 'K'}
    else if(number==0){numberDiv.innerHTML = 'A'}
    else if(number==10){numberDiv.innerHTML = 'Q'}
    else if(number==9){numberDiv.innerHTML = 'J'}
    else numberDiv.innerHTML = numbers[number]


//now we program random suits
    let suits = ['♦','♥','♠','♣']
    let randomsuit = Math.floor(Math.random() * (3-0+1));
    let suitsDiv= document.querySelectorAll('.suit');

       
     
        if(randomsuit == 1){
            var suit = "<p style ='color:red'>" + suits[randomsuit] + "</p>"
        }else if(randomsuit == 2){
            var suit = "<p style ='color:red'>" + suits[randomsuit] + "</p>"
        }else if(randomsuit == 3){
            var suit = "<p style ='color:black'>" + suits[randomsuit] + "</p>"
        }else{
            var suit = "<p style ='color:black'>" + suits[randomsuit] + "</p>"
        }

        suitsDiv[0].innerHTML = suit;
        suitsDiv[1].innerHTML = suit;
        console.log(number)
})



