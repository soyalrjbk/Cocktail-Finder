# 🍸 Cocktail Finder

Type in the name of a drink, like *margarita* or *mojito*, and get its name, a photo, and step-by-step instructions for making it. The recipes come live from [TheCocktailDB](https://www.thecocktaildb.com/), a free, open database of drinks from around the world.

## How It's Made:

**Tech used:**

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/🍹_TheCocktailDB_API-B5179E?style=for-the-badge" alt="TheCocktailDB API" />
</p>

The page has a text input, a **Get Cocktail** button, and empty elements for the drink's name (`<h2>`), photo (`<img>`), and instructions (`<h3>`).

When the button is clicked, `getDrink()`:

- reads the drink name the user typed,
- adds it to TheCocktailDB's search URL with a template literal and sends the request with `fetch()`,
- converts the response to JSON, which includes a `drinks` array of every cocktail matching the search, and
- loops through the results with `forEach()` and fills the page with each drink's name (`strDrink`), photo (`strDrinkThumb`), and instructions (`strInstructions`).

## Optimizations

- Show every matching drink, not just one. Right now each loop overwrites the same elements, so only the last result stays on the page. Creating a card for each drink, or cycling through them with Next/Previous buttons, would turn this into the menu I planned.
- Handle searches with no results. When nothing matches, the API returns `drinks: null`, which causes an error in the console instead of a message on the page.
- Let users press **Enter** to search, and trim extra spaces from the input.
- Show the ingredients and measurements (`strIngredient1`–`15` and `strMeasure1`–`15` in the response).
- Fix the HTML: the first line is `<DOCTYPE html>` instead of `<!DOCTYPE html>`, and there's a stray `<!` at the end of the file.
- Remove the unused images in the `img` folder, replace the starter title and meta tags, and add styling.

## Lessons Learned:

This project built on what I learned from my earlier API projects. This time the API returned an array of results, so I practiced looping through it with `forEach()` and pulling specific properties out of each object. Seeing only the last drink appear on the page taught me something important about the DOM: setting the same element inside a loop overwrites it each time, so showing multiple results means creating new elements for each one. I also learned how to build a request URL from user input with template literals.
