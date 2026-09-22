//The user will enter a cocktail. 
// Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink=document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res =>res.json())
.then(data=>{
    // Loop through each drink to get its name, photo, and instructions
    //I still gotta work on making this a menu that loops in the list of arrays and provides the list by inputed value
    data.drinks.forEach(drink=>{ 
    console.log(data.drinks)
    document.querySelector('h2').textContent=drink.strDrink
    document.querySelector('img').src=drink.strDrinkThumb
    document.querySelector('h3').textContent=drink.strInstructions
})
})
.catch(err=>{
    console.log(`error ${err}`)
    });
}

