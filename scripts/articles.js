// renders articles summary feed at the bottom of each page

import { articles } from "./data.js"
const articlesSection = document.getElementById("articles")
const articlePath = window.location.pathname
let articleIndex

if (articlePath === "/posts/2022-12-27.html") {articleIndex = 0}
if (articlePath === "/posts/2023-01-01.html") {articleIndex = 1}
if (articlePath === "/posts/2023-01-15.html") {articleIndex = 2}
if (articlePath === "/posts/2023-02-01.html") {articleIndex = 3}
if (articlePath === "/posts/2023-02-15.html") {articleIndex = 4}
if (articlePath === "/posts/2023-03-01.html") {articleIndex = 5}
if (articlePath === "/posts/2023-03-15.html") {articleIndex = 6}

// only include articles that aren't the current main displayed article
const filteredArticles = articles.filter(function(article) {
    return article.id != articleIndex
})

filteredArticles.forEach(function(article) {
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