const name = document.querySelector('.message-input-name');
const form = document.getElementById('send-message');
const text = document.querySelector('.message-input');
const dialoges = document.querySelector('.dialoges');
const chatScroll = document.querySelector('.dialoges');




const socket = io('http://localhost:3002/');


form.addEventListener('submit', ev => {
  ev.preventDefault();

  if(text.value ) {
    socket.emit('messeges', {name: name.value, messege: text.value})
    text.value = '';
  }



})





socket.on('messeges', (socket) => {
  const { name, messege } = socket
  
  const elem = createMessage(name, messege);

  dialoges.insertAdjacentHTML('beforeend', elem);
  chatScroll.scrollTo(0, chatScroll.scrollHeight);
  
})


const createMessage = (name, message, id = 'dialouge') => {
  const createElem = `
  <div id="${id}">
  <div class="p1 outline-light-grey rounded w-100 m-v-1  bg-white">
      <div class="row">
          <div class="col-8 p0">
              <div class="row">
                  <div class="col-4 col-md-2 col-lg-1 p0">
                      <img src="./images/avatar.png" class="circle icon-sm">
                  </div>
                  <div class="col left">
                      <p class="m0 p0 black font-weight-400">${name}</p>
                      <p class="font-weight-400 dark italic small m0">May 24, 2020 at 10:46 am
                      </p>
                  </div>
              </div>
          </div>
          <div class="right col-3 col-md-4">
              <a href="#">
                  <svg viewBox="0 0 24 24" class="icon-s img-responsive hover-shadow">
                      <path fill="#ccc" d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"></path>
                  </svg>
              </a>
          </div>
      </div>
      <div class="m-v-1">
          <p class="font-weight-400 m0">
            ${message}
          </p>
      </div>
  </div>

</div>
  `
  return createElem;
}
