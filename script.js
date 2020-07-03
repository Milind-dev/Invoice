



function handleclick() {
     var x = 0;
     var count  = 0;
    var res = document.getElementById('res');
    var img = document.createElement('img');
    var button = document.createElement('button')
    button.textContent += 'click'
    var paid = document.createElement('p');

    
    paid.textContent += 'not paid'
    paid.setAttribute('style','display:flex;color:red')

    img.src = 'https://media.gettyimages.com/photos/portrait-of-smiling-young-man-wearing-eyeglasses-picture-id985138634?s=612x612';
    img.setAttribute('style', 'border-radius:5px;border:2px;background-color:dodgerblue;width:50px')
    
    var p = document.createElement('p');
    p.textContent += 'santy'
    
    var money = document.createElement('p');
    money.innerHTML += 0
    res.append(img,p,money,paid,button)
    
    button.addEventListener('click',function(){
        
        for(var i=0;i<20;i++){
            count += i;
            if(i>=50){
             paid.style.color = 'green'
             money.innerHTML += count
            }
            else{
                paid.style.color = 'red'
                money.innerHTML += count
            }

        }
    })
}
window.onload = function () {
    var plusbutton = document.getElementById('adding');
    plusbutton.addEventListener('click', handleclick)
}


// always start with  id not class

