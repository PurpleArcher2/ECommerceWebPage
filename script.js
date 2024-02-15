console.log("FUCK world!");
let number = 0;
let result = document.getElementById("Result");
let total = document.getElementById("total")
const additional = document.getElementById("Add");
const deduct = document.getElementById("Deduct");
const addcart = document.getElementById("addCart");
let showCart = document.getElementById("showCart");
let float = document.getElementById("float")
const title = document.getElementById("title");
let contPara = document.getElementById("containerParagraph")
let contTrash = document.createElement('img');
contTrash.src = "/images/icon-delete.svg";
contTrash.alt = "Delete Cart"

additional.addEventListener('click', function(){

    number++;
    result.innerHTML = number;

})

deduct.addEventListener('click', function(){


    number--;
    result.innerHTML = number;

    if (number < 0){
        number = 0 ;

    }
})

addcart.addEventListener('click', function(){

    if(number > 0)

    total.innerHTML = number;


})

showCart.addEventListener('mouseover', function(){

    if(result.innerText === "0"){

        float.classList.toggle('hidden');

    }

    if (result.innerText > 0){

        let totalPrice = number * 125;

        // Added image
        let imgElement = document.createElement('img');
        imgElement.src = "/images/image-product-1-thumbnail.jpg";
        imgElement.alt = "Product Image";
        imgElement.style.position = "absolute";
        imgElement.style.width = "15%"
        imgElement.style.marginRight = '1rem'
        imgElement.style.borderRadius = "0.5rem"
        contPara.innerHTML = "";
        contPara.appendChild(imgElement);

        // Changed the Paragraph

        contPara.innerHTML += "Fall Limited Edition<br>" + "$" + 125 + " x " + number + " " + "<strong>" + totalPrice
        contPara.style.textAlign = "center";
        contPara.style.padding = '2rem'  
        float.classList.toggle('hidden');

        // Added Button
        let contButton = document.createElement('button');
        contButton.style.width = "100%";
        contButton.style.borderRadius = "0.5rem";
        contButton.style.padding = "1rem";
        contButton.style.color = "white";
        contButton.style.backgroundColor = 'hsl(26, 100%, 55%)';
        contButton.textContent = "Checkout";
        contButton.style.marginTop = '2rem'
        contPara.appendChild(contButton);

        // Add Trash Emoticon

        contTrash.style.position = "absolute";
        contTrash.style.top = "7rem";
        contTrash.style.right = "2rem";
        contTrash.style.cursor = "pointer";
        contPara.appendChild(contTrash);

        setTimeout(function() {
            float.classList.add('hidden');
        }, 5000);

        setTimeout(() => {
            
        }, timeout);



    }

function resetContainer() {
    contPara.innerHTML = "Your cart is empty";
    contPara.style.opacity = '0.6';
    contPara.style.padding = '1.4rem';
    contPara.style.textAlign = 'center';


}

// ...

contTrash.addEventListener('click', function(){
    total.innerText = 0;
    result.innerText = 0;
    number = 0;
    float.classList.add('hidden');

    // Reset the container to its original state
    resetContainer();
});
})

