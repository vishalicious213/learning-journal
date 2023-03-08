console.log("posts")
console.log(window.location.pathname)

import { articles } from "./data.js"
const articlePath = window.location.pathname
let articleIndex

if (articlePath === "/posts/2022-12-27.html") {articleIndex = 0}
if (articlePath === "/posts/2023-01-04.html") {articleIndex = 1}

function renderPost() {
    const postSection = document.getElementById("post")
    const moreSection = document.getElementById("more")
    let post = articles[articleIndex]
    postSection.innerHTML = ""
    moreSection.innerHTML = ""

    postSection.innerHTML += `
        <div class="post">
            <div class="article-date">${post.date}</div>
            <div class="article-title">${post.title}</div>
            <div class="article-blurb">${post.blurb}</div>
            <div class="article-img" style="background-image: url(/img/${post.img});"></div>
            <div class="post-body">${post.body}</div>
        </div>
    `

    articles.forEach(function(article) {
        if (article.id > 0) {
            moreSection.innerHTML += `
                <div class="article">
                    <div class="article-img" style="background-image: url(/img/${article.img});"></div>
                    <div class="article-date">${article.date}</div>
                    <div class="article-title">${article.title}</div>
                    <div class="article-blurb posts-blurb">${article.blurb}</div>
                </div>
            `
        }
    })
}

renderPost()