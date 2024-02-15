const form = document.getElementById("form-agenda");

let newlinha = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const Nome = document.getElementById("NomeContato");
  const Numero = document.getElementById("NumeroContato");

  let linha = "<tr>";
  linha += `<td>${Nome.value}</td>`;
  linha += `<td>${Numero.value}</td>`;
  linha += "</tr>";

  newlinha += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = newlinha;

  Nome.value = "";
  Numero.value = "";
});