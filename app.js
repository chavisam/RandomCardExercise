// THIS IS ONE WAY TO DO DE EXERCISE, BUT NOT THE CLEAREST
    // window.onload = function(){
    //     let number = Math.floor(Math.random() * 12-0) +1;
    //     let numberDiv = document.querySelector('#number');
    
    //     if(number==12){number = 'K'}
    //     if(number==11){number = 'Q'}
    //     if(number==10){number = 'J'}

    //     let paloDiv = document.querySelectorAll('.palo');
    //     let randomPalo = Math.floor(Math.random() * 4 - 1) +1
        
    //     if(randomPalo == 1){
    //         var palo = "<p style ='color:red'>♦</p>"
    //     }else if(randomPalo == 2){
    //         var palo = "<p style ='color:red'>♥</p>"
    //     }else if(randomPalo == 3){
    //         var palo = "<p style ='color:black'>♠</p>"
    //     }else{
    //         var palo = "<p style ='color:black'>♣</p>"
    //     }

    

    //     numberDiv.innerHTML = number;
    //     paloDiv[0].innerHTML = palo
    //     paloDiv[1].innerHTML = palo
        
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


//now we program random palos
    let palos = ['♦','♥','♠','♣']
    let randomPalo = Math.floor(Math.random() * (3-0+1));
    let palosDiv= document.querySelectorAll('.palo');

       
     
        if(randomPalo == 1){
            var palo = "<p style ='color:red'>" + palos[randomPalo] + "</p>"
        }else if(randomPalo == 2){
            var palo = "<p style ='color:red'>" + palos[randomPalo] + "</p>"
        }else if(randomPalo == 3){
            var palo = "<p style ='color:black'>" + palos[randomPalo] + "</p>"
        }else{
            var palo = "<p style ='color:black'>" + palos[randomPalo] + "</p>"
        }

        palosDiv[0].innerHTML = palo;
        palosDiv[1].innerHTML = palo;
        console.log(number)
})



