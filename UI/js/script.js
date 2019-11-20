const handleMessage = (message) => {
    document.querySelector('#proform').addEventListener('submit', (event) => {
      event.preventDefault();
      const notify = document.querySelector('#notify');
      notify.innerHTML = '';
      notify.innerHTML = '<div class="alert success">'
        + `<strong>Success! </strong>${message}</div>`;
      const close = document.querySelectorAll('.closebtn');
      let i;
  
      for (i = 0; i < close.length; i += 1) {
        close[i].onclick = function closeNotify() {
          const div = this.parentElement;
          div.style.display = 'none';
        };
      }
    }, { once: true });
  };
// success Message

const LoginMdg = 'Successfully logged in';
const addIncidentMsg = 'Successfully incident added';
const deleteIncident = 'Successfully incident deleted';

// delete Incident

const deleteIncident = () => {
    const form = document.querySelector('#form1');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const notify = document.querySelector('#notify');
      notify.innerHTML = '';
  
      if (window.confirm('Delete this Incident?!')) {
        notify.innerHTML = '<div class="alert success">'
          + `<strong>Success! </strong>${deleteIncident}</div>`;
        notify.style.display = 'flex';
        setTimeout(() => { notify.style.display = 'none'; }, 2500);
      }
    }, { once: true });
    form.removeEventListener('submit');
  };