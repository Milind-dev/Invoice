



function handleclick() {
    var div = document.createElement('div');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    var paid = document.createElement('p');
    paid.textContent += 'not paid'
    paid.setAttribute('style','display:flex;color:red')

    img.src = 'https://media.gettyimages.com/photos/portrait-of-smiling-young-man-wearing-eyeglasses-picture-id985138634?s=612x612';
    img.setAttribute('style', 'border-radius:5px;border:2px;background-color:dodgerblue;width:50px')
    
    var p = document.createElement('p');
    p.textContent += 'santy'
    
    var money = document.createElement('p');
    money.textContent += 0
    res.append(img,p,money,paid) 
    update(money);
}
window.onload = function () {
    var plusbutton = document.getElementById('adding');
    plusbutton.addEventListener('click', handleclick)
}


// always start with  id not class

