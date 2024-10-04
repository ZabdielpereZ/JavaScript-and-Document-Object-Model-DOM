//  array containing information about different products, including their names, prices, and descriptions.
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
console.log(products);

// Mapping Products 
let sortedProducts = products.map(product => "Product: " + product.name + " Costs: $" + product.price + " Description: " + product.description); 
console.log(sortedProducts);

function updateParagraph() {
  const paragraph = document.getElementById("message")
  paragraph.innerHTML = "<b>Laptop</b> costs $999.99, Powerful computing on the go. <br> <b>Smartphone</b> costs $699, Stay connected wherever you are. <br> <b>Headphones</b> costs $149.99, Immersive audio experience."
  
  const newParagraph = document.createElement("p")
  newParagraph.innerHTML = "More products are available on our website."
  document.getElementById("container").appendChild((newParagraph))
}

// Event listener for the form submission / Mapping
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('Textarea').value;

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Email: ${email}`);
    console.log(`Comments: ${comments}`);
});

function changecolor(){
const box = document.getElementById('box');

box.classList.add("highlight");

box.style.backgroundColor = "blue";
box.style.color = "yellow";

}
  function changecolor2(){
  const Textarea = document.getElementById('Textarea');
  
  Textarea.classList.add("highlight");
  
  Textarea.style.backgroundColor = "blue";
  Textarea.style.color = "yellow";
  }
  
  function changecolor3(){
    const email = document.getElementById('email');
    
    email.classList.add("highlight");
    
    email.style.backgroundColor = "blue";
    email.style.color = "yellow";
    }

    function changecolor4(){
      const password = document.getElementById('password');
      
      password.classList.add("highlight");
      
      password.style.backgroundColor = "blue";
      password.style.color = "yellow";
      }

      function changecolor5(){
        const username = document.getElementById('username');
        
        username.classList.add("highlight");
        
        username.style.backgroundColor = "blue";
        username.style.color = "yellow";
        }