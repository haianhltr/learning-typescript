const button = document.querySelector("button");

function clickHandler(message: string) 
{
   console.log('Clicked' + message)
}

//check if button exist
if (button) {
  button.addEventListener("click", clickHandler.bind(null,'Youre good'))
  
}
