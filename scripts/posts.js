// renders individual posts when that post's page is selected
// console.log(window.location.pathname)

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
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")
    let post = articles[articleIndex]
    header.innerHTML = ""
    footer.innerHTML = ""
    postSection.innerHTML = ""

    header.innerHTML = `
        <div id="title">
            <a href="../index.html">
                <div id="logo">
                    <img src="/img/logo.png" alt="chat icon logo">
                </div>

            </a>
            <a href="../index.html">
                <div>My learning journal</div>
            </a>
        </div>

        <nav>
            <a href="../index.html">Home</a>
            <a href="../about.html">About Me</a>
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

    footer.innerHTML = `
        <div id="tagline">My Learning Journal</div>
        <div if="copyright">Copyright ©2023</div>
    `
}

renderPost()