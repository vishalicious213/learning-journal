console.log("Learning journal")

function renderArticles() {
    const featuredSection = document.getElementById("featured")
    const articlesSection = document.getElementById("articles")
    let featured = articles[0]
    featuredSection.innerHTML = ""
    articlesSection.innerHTML = ""

    featuredSection.innerHTML += `
        <div class="featured" style="background-image: url(/img/${featured.img});">
            <div class="featured-date">${featured.date}</div>
            <a class="featured-title" href="${featured.link}">
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
                    <div class="article-title">${article.title}</div>
                    <div class="article-blurb">${article.blurb}</div>
                </div>
            `
        }
    })
}

renderArticles()

{/* <div class="article">
<div class="article-img">
    <img src="/img/${article.img}" alt="">
</div>
<div class="article-date">${article.date}</div>
<div class="article-title">${article.title}</div>
<div class="article-blurb">${article.blurb}</div>
</div> */}