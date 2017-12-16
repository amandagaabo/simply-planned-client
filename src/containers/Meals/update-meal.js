import {API_BASE_URL} from '../../config';

export default function updateMealInDB(token, date, name, item)  {
  return fetch(`${API_BASE_URL}/meals/update`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      date: `${date}`,
      mealName: `${name}`,
      mealItem: `${item}`
    })
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.status;
  });
};
