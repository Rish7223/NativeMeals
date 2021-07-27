export function getMealsUsingCategory(categoryId, mealsList, setLoading) {
  setLoading(true);
  const newMealsList = mealsList.filter(
    (meal) => meal.categoryIds.includes(categoryId) && meal
  );
  setLoading(false);
  return newMealsList;
}

export function getMealData(mealId, mealsList, setLoading = (value) => {}) {
  setLoading(true);
  const mealData = mealsList.find((meal) => meal.id === mealId);
  setLoading(false);
  return mealData;
}
