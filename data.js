fetch('https://zsk-poznan.github.io/szczesliwy-numerek-backend', {
  method: 'GET'
})
.then(res => res.json())
.then(data => {
  const tk = document.getElementById("tk");
  const lo = document.getElementById("lo");
  tk.innerHTML = data["TK"];
  lo.innerHTML = data["LO"];
})
.catch((error) => {
  console.error('Error:', error);
});