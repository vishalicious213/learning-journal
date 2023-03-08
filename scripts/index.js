console.log("Learning journal")

import { articles } from "./data.js"

function renderArticles() {
    const featuredSection = document.getElementById("featured")
    const articlesSection = document.getElementById("articles")
    let featured = articles[0]
    featuredSection.innerHTML = ""
    articlesSection.innerHTML = ""

    featuredSection.innerHTML += `
        <div class="featured" style="background-image: url(/img/${featured.img});">
            <div class="featured-date">${featured.date}</div>
            <a class="featured-title" href="/posts/${featured.link}">
                <div>${featured.title}</div>
            </a>
            <div class="featured-blurb">${featured.blurb}</div>
        </div>
    `

    articles.forEach(function(article) {
        if (article.id > 0) {
            articlesSection.innerHTML += `
                <div class="article">
                    <div class="article-img" style="background-image: url(/img/${article.img});"></div>
                    <div class="article-date">${article.date}</div>
                    <a class="article-title" href="/posts/${article.link}">
                        <div>${article.title}</div>
                    </a>
                    <div class="article-blurb">${article.blurb}</div>
                </div>
            `
        }
    })
}

renderArticles()