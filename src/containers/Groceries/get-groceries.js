import {API_BASE_URL} from '../../config';

export default function getGroceriesFromDB(token) {
  // GET request to /groceries endpoint with req.body.user set to userId
  return fetch(`${API_BASE_URL}/groceries`, {
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
    return data.groceries
  });
};
