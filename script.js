const apikey = `4ca425a159bd43a289c043cea9990748`
const blogcontainer = document.getElementById("blog-container");


async function fetchrandomnews(){
  try{
const apiurl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=7&apikey=${apikey}`
   const response= await fetch(apiurl)
   const data = await response.json()
   return data.articles;
   console.log(data);

  }catch(error){
     console.error("error fetching random news",error)
     return[]
  }
}




function displayblogs(articles){
  blogcontainer.innerHTML=""
  articles.forEach((article) => {
    const blogcard = document.createElement("div");
    blogcard.classList.add("blog-card");
    const img = document.createElement("img");
    img.src = article.urlToImage;
    img.alt = article.title;
    const title = document.createElement("h2");
    title.textcontent = article.title;
    const description = document.createElement("P");
    description.textContent = article.description;

    blogcard.appendChild(img);
    blogcard.appendChild(title);
    blogcard.appendChild(description);
    blogcard.addEventListener("click" , () => {
      window.open(article.url, "_blank");
    })
    blogcontainer.appendChild(blogcard);
  });
}


(async () => {
  try{
  const articles = await fetchrandomnews();
  displayblogs(articles);
  }catch(error){
    console.error("error fetching random news",error);

  }
})();