import { FAVORITES } from '../data/dummy-data';

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

export function removeElementFromFavList(itemId, list) {
  let index = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === itemId) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    list.splice(index, 1);
  }
}

export function addElementToFavList(item, list) {
  list.push(item);
}

export function isPresentInFavList(itemId, list) {
  const newList = list.filter((item) => item.id === itemId);
  if (newList.length > 0) {
    return true;
  }
  return false;
}
