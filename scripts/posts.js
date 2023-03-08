console.log("posts")
console.log(window.location.pathname)

import { articles } from "./data.js"
const articlePath = window.location.pathname
let articleIndex

if (articlePath === "/posts/2022-12-27.html") {articleIndex = 0}
if (articlePath === "/posts/2023-01-01.html") {articleIndex = 1}

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
            <div>Home</div>
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
                    <div class="article-img" style="background-image: url(/img/${article.img});"></div>
                    <div class="article-date">${article.date}</div>
                    <div class="article-title">${article.title}</div>
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