class Recipes {
  constructor(
    id,
    categoryIds,
    title,
    img,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegetarian,
    isVegan,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.img = img;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    (this.isVegan = isVegan), (this.isLactoseFree = isLactoseFree);
  }
}

export default Recipes;
