



function handleclick() {
    var x = 0;
    var count = 0;
    var countdec = 0

    var dollars = document.getElementById('dollars')
    var div = document.createElement('div');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    var button = document.createElement('button')
    button.textContent += 'click'
    var paid = document.createElement('p');

    div.setAttribute('style', 'border:1px solid darkblue;padding:12px;background-image: linear-gradient(to left top, #e0b02b, #d46b48, #98405a, #492b4c, #0d111f);')

    paid.innerHTML += 'not paid'
    paid.setAttribute('style', 'display:flex;color:red;font-size:12px')

    img.src = 'https://media.gettyimages.com/photos/portrait-of-smiling-young-man-wearing-eyeglasses-picture-id985138634?s=612x612';
    img.setAttribute('style', 'border-radius:5px;border:2px;background-color:dodgerblue;width:50px')

    var p = document.createElement('p');
    p.textContent += 'santy'

    var money = document.createElement('p');
    money.innerHTML += 0

    button.addEventListener('click', function () {

        for (var i = 0; i < 2; i++) {
            count += i;
            countdec += 400;
            if (i >= 0) {
                paid.style.color = 'khaki'
                money.innerHTML = count
                paid.innerHTML = 'paid'
                dollars.innerHTML = '$' + countdec
            }
            else {
                paid.style.color = 'red'
                money.innerHTML += count
            }

        }
    })
    res.append(div, img, p, money, paid, button)

}
window.onload = function () {
    var plusbutton = document.getElementById('adding');
    plusbutton.addEventListener('click', handleclick)
    var seemore = document.querySelectorAll('input')
    
}


// always start with  id not class

