export async function callAuth() {
  return fetch('https://stage-api.serw.io/v1/auth/local/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'qxkeb06yat@buy-blog.com',
      password: 'test@123',
    }),
  }).then(resp => resp.json());
}

export async function getItunes(props) {
  let que = !!!props ? 'all' : props.replaceAll(' ', '+');
  return fetch('https://itunes.apple.com/search?term=' + que, {
    method: 'GET',
  }).then(resp => resp.json());
}
