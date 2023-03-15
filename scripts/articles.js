// renders articles summary feed at the bottom of each page

import { articles } from "./data.js"
const articlesSection = document.getElementById("articles")

articles.forEach(function(article) {
    if (article.id > 0) {
        articlesSection.innerHTML += `
            <div class="article">
                <a href="/posts/${article.link}">
                    <div class="article-img" style="background-image: url(/img/${article.img});"></div>
                </a>
                <div class="article-date">${article.date}</div>
                <a class="article-title" href="/posts/${article.link}">
                    <div>${article.title}</div>
                </a>
                <div class="article-blurb">${article.blurb}</div>
            </div>
        `
    }
})