function getDrinkByProfession(param){
  const drinkMenu = {
  "jabroni":  "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal",
  }
  
  if(param.toLowerCase() in drinkMenu) return drinkMenu[param.toLowerCase()]
  return "Beer"
}