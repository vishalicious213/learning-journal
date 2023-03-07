console.log("Learning journal")

const articles = [
    {
        date: "January 1, 2023",
        title: "My new journey as a bootcamp student.",
        blurb: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
        img: "article-image-hero.png"
    },
    {
        date: "January 15, 2023",
        title: "Blog one",
        blurb: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        img: "article-image-03.png"
    },
    {
        date: "February 1, 2023",
        title: "Blog two",
        blurb: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        img: "article-image-02.png"
    },
    {
        date: "February 15, 2023",
        title: "Blog three",
        blurb: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        img: "article-image-01.png"
    },
]

function renderArticles() {
    const articlesSection = document.getElementById("articles")
    articlesSection.innerHTML = ""

    articles.forEach(function(article) {
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
    })
}

renderArticles()