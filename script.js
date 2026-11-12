const form = document.querySelector("#recommendation-form");
const quoteList = document.querySelector("#quote-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const textarea = document.querySelector("#recommendation");
  const message = textarea.value.trim();

  if (message === "") {
    return;
  }

  const quote = document.createElement("blockquote");
  quote.textContent = "“" + message + "”";

  const author = document.createElement("cite");
  author.textContent = "— Portfolio visitor";
  quote.appendChild(author);

  quoteList.appendChild(quote);
  form.reset();

  alert("Thank you! Your recommendation has been added.");
});