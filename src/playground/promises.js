const promeca = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is my resolved data");
    reject("Deu ruim");
  }, 5000);
});

console.log("before");

promeca
  .then(dados => {
    console.log("1", dados);
  })
  .catch(problema => {
    console.log("erro: ", problema);
  });

console.log("after");
