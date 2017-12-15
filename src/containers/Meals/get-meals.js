import {API_BASE_URL} from '../../config';

export default function getMealsFromDB(token) {
  return fetch(`${API_BASE_URL}/meals`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(data => {
    console.log('data returned from GET reqest for meals', data)
    return data.meals
  });
};
