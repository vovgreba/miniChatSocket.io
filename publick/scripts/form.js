// const loginForm = document.forms.login;
const loginForm = document.forms.login;


// console.log(loginForm)

loginForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const formdata = new FormData(ev.target);
  const { data } = await axios.post('/login', formdata);

})