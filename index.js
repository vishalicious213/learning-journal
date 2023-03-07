console.log("Learning journal")

const articles = [
    {
        id: 1,
        date: "January 1, 2023",
        title: "My new journey as a bootcamp student.",
        blurb: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
        img: "article-image-hero.png"
    },
    {
        id: 2,
        date: "January 15, 2023",
        title: "Blog one",
        blurb: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        img: "article-image-03.png"
    },
    {
        id: 3,
        date: "February 1, 2023",
        title: "Blog two",
        blurb: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        img: "article-image-02.png"
    },
    {
        id: 4,
        date: "February 15, 2023",
        title: "Blog three",
        blurb: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        img: "article-image-01.png"
    },
]

function renderArticles() {
    const articlesSection = document.getElementById("articles")
    let featured = articles[0]
    articlesSection.innerHTML = ""

    articlesSection.innerHTML += `
        <div class="article">
            <div class="article-img">
                <img src="/img/${featured.img}" alt="">
            </div>
            <div class="article-date">${featured.date}</div>
            <div class="article-title">${featured.title}</div>
            <div class="article-blurb">${featured.blurb}</div>
        </div>
    `

    articles.forEach(function(article) {
        if (article.id > 1) {
            articlesSection.innerHTML += `
                <div class="article">
                    <div class="article-img">
                        <img src="/img/${article.img}" alt="">
                    </div>
                    <div class="article-date">${article.date}</div>
                    <div class="article-title">${article.title}</div>
                    <div class="article-blurb">${article.blurb}</div>
                </div>
            `
        }
    })
}

renderArticles()