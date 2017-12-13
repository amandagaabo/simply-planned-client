import {API_BASE_URL} from '../../config';

export default function getGroceriesFromDB(userId) {
  // GET request to /groceries endpoint with req.body.user set to userId
  return fetch(`${API_BASE_URL}/groceries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: {
      'user': `${userId}`
    }
  }).then(res => {
    console.log('response from fetct request', res)
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(data => {
    console.log(data)
    //return data.results.map(character => character.name)
  });
};
