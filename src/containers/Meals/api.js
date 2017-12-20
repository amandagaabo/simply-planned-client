import moment from 'moment';
import { API_BASE_URL } from '../../config';

export function getMealsFromDB(token, sunday) {
  const saturday = moment(`${sunday}`).add(6, 'd').toISOString();

  return fetch(`${API_BASE_URL}/meals?startDate=${sunday}&endDate=${saturday}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((data) => {
    const results = {
      meals: data.meals,
      sunday: `${sunday}`
    };
    return results;
  });
}

export function updateMealInDB(token, date, name, item) {
  return fetch(`${API_BASE_URL}/meals/update`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: `${date}`,
      mealName: `${name}`,
      mealItem: `${item}`
    })
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.status;
  });
}
