import {API_BASE_URL} from '../../config';

export default function removeCheckedInDB(token) {
  // POST request to /groceries endpoint
  return fetch(`${API_BASE_URL}/groceries/delete`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.status;
  })
};
