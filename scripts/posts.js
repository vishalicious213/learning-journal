console.log("posts")
console.log(window.location.pathname)

import { articles } from "./data.js"
const articlePath = window.location.pathname
let articleIndex

if (articlePath === "/posts/2022-12-27.html") {articleIndex = 0}
if (articlePath === "/posts/2023-01-01.html") {articleIndex = 1}
if (articlePath === "/posts/2023-01-15.html") {articleIndex = 2}
if (articlePath === "/posts/2023-02-01.html") {articleIndex = 3}
if (articlePath === "/posts/2023-02-15.html") {articleIndex = 4}
if (articlePath === "/posts/2023-03-01.html") {articleIndex = 5}
if (articlePath === "/posts/2023-03-15.html") {articleIndex = 6}

function renderPost() {
    const postSection = document.getElementById("post")
    const moreSection = document.getElementById("more")
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")
    let post = articles[articleIndex]
    header.innerHTML = ""
    footer.innerHTML = ""
    postSection.innerHTML = ""
    moreSection.innerHTML = ""

    header.innerHTML = `
        <div id="title">
            <div id="logo">
                <img src="/img/logo.png" alt="chat icon logo">
            </div>
            <div>My learning journal</div>
        </div>
        <nav>
            <a href="../index.html">Home</a>
            <div>About Me</div>
        </nav>
    `

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
                    <a href="./${article.link}">
                        <div class="article-img" style="background-image: url(/img/${article.img});"></div>
                    </a>
                    <div class="article-date">${article.date}</div>
                    <a class="article-title" href="./${article.link}">
                        <div>${article.title}</div>
                    </a>
                    <div class="article-blurb posts-blurb">${article.blurb}</div>
                </div>
            `
        }
    })

    footer.innerHTML = `
        <div id="tagline">My Learning Journal</div>
        <div if="copyright">Copyright ©2023</div>
    `
}

renderPost()