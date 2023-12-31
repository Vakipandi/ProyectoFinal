document.getElementById('login').addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  console.log({ email, password });
  axios
    .post('http://localhost:3000/api/users/login', {
      email: email,
      password: password,
    })

    .then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        const userRole = res.data.user.role;
        Swal.fire({
          title: res.data.message,
        });

        if (userRole === 1) {
          Swal.fire({
            title: 'You are admin',
          });
          window.location.href = 'http://localhost:3000/new_product';
        } else {
          window.location.href = 'http://localhost:3000/products';
        }
      }
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: err.data.message,
      });
      document.getElementById('password').value = '';
      document.getElementById('email').value = '';
    });
});
