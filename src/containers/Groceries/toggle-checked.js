import {API_BASE_URL} from '../../config';

export default function toggleCheckedInDB(token, itemID, checked) {
  // POST request to /groceries endpoint
  return fetch(`${API_BASE_URL}/groceries/update`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      itemID,
      checked
    })
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(data => {
    return data
  });
};
