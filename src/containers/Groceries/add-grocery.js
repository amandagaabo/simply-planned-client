import {API_BASE_URL} from '../../config';

export default function addGroceryToDB(token, itemName) {
  // POST request to /groceries endpoint with req.body.user set to userId
  return fetch(`${API_BASE_URL}/groceries/add`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body:  JSON.stringify({
      itemName: `${itemName}`
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
