import moment from 'moment';
import {API_BASE_URL} from '../../config';

export default function getMealsFromDB(token, sunday) {
  const saturday = moment(`${sunday}`).add(6, 'd').toISOString()

  return fetch(`${API_BASE_URL}/meals?startDate=${sunday}&endDate=${saturday}`, {
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
    const results = {
      meals: data.meals,
      sunday: `${sunday}`
    }

    return results
  });
};
