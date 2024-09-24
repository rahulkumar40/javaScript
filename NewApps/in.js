// const api_key = "7b3daa7190344866a0747da4804d439c";
// const url = "https://newsapi.org/v2/everything?q="

// window.addEventListener('load', ()=> fatchNews("India"));

// async function fatchNews(query) {
//     const res = await fetch(`${url}${query}&apikey=${api_key}`);
//     const data = await res.json();
//     // console.log(data)

//     bindData(data.articles);
// }

// function bindData(articles){
//     const cardsContainer = document.getElementById("cards-container");
//     const newsCardTemplate = document.getElementById("template-news-card");

//     cardsContainer.innerHTML = " ";

//     articles.forEach((article) => {
//         if(!article.urlToImage) return;
//         const cardClone = newsCardTemplate.content.cloneNode(true);

//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild(cardClone);
//     });
// }

// function fillDataInCard(cardClone, article){
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     const date = new Date(article.publishedAt).toLocalString("en-US", {timeZone:"Asia/Jakarta",});
//     newsSource.innerHTML = `${article.source.name} -> ${date}`;
// }