const data = [
  { id: "a", news: "pok cannot be found since 2 days" },
  { id: "b", news: "charan kaya found on north korean border" },
  { id: "c", news: "from monday nepal will be state of india" },
  { id: "d", news: " assam government introduce ucc bill 2026" },
];
function findbyid(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i].news;
    }
  }
}
console.log(findbyid("c"));

function topnews(n) {
  for (let i = 0; i < n; i++) {
    console.log(data[i].news);
  }
}
topnews(2);

function lastnews(n) {
  for (i = data.length - n; i < data.length; i++) {
    console.log(data[i].news);
  }
}
lastnews(2);

function searchnews(keyword) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].news.includes(keyword)) {
      console.log(data[i].news);
    }
  }
}
searchnews("nepal");
