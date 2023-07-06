var form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let fname = form.name.value;
  let email = form.email.value;
  let phone = form.phone.value;
  let destination = form.destination.value;
  let checkin = form.checkin.value;
  let checkout = form.checkout.value;

  if (fname === '' || email === '' || phone === '' || destination === '' || checkin === '' || checkout === '') {
    alert('Please fill in all fields.');
  } else {
    alert('Your booking has been confirmed. Thank you!');
    form.reset();
  }
});




