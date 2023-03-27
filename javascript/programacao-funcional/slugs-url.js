// Altere apenas o código abaixo desta linha
function urlSlug(title) {
  return title
    .split(" ")
    .filter(el => el !== "")
    .join("-")
    .toLowerCase();
};
// Altere apenas o código acima desta linha
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
//a-mind-needs-books-like-a-sword-needs-a-whetstone
console.log(urlSlug(" Winter Is  Coming"));
//winter-is-coming
