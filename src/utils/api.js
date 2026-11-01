export const API = 'https://new-stellarburgers.education-services.ru/api/ingredients';

export function getIngredients() {
  return fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((res) => {
      if (res.data && res.data.length) {
        return res.data;
      }
      return [];
    });
}
