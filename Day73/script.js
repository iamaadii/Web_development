// let t = document.getElementsByClassName("title");
// let c = document.getElementsByClassName("cname");
// let v = document.querySelector(".views");
// let m = document.querySelector(".months");
// let d = document.querySelector(".duration");
function createCard(title, cname, v, m, duration, url) {
    let views;
    if (v < 1000) {
        views = v;
    }
    else if (v >= 1000 && v < 1000000) {
        views = `${Math.floor(v / 1000)}k`;
    }
    else {
        views = `${Math.floor(v / 1000000)}M`;
    }

    let months;
    if (m <= 12) months = `${m} months`;
    else months = `${Math.floor(m / 12)} years`;

    let html = `<div id="container">
                    <div class="image">
                        <img src="${url}">
                        <span class="duration">${duration}</span>
                    </div>
                    <div class="details">
                        <h1 class="title">${title}</h1>
                        <p>
                            <span class="cname">${cname}</span> &bull;
                            <span class="views">${views}</span> views &bull;
                            <span class="months">${months}</span> ago
                        </p>
                    </div>    
                </div>`
    document.getElementById("bdy").innerHTML += html;
}

createCard("Installing VS Code & How Websites Works | Web-dev Course - Tutorial #2", "AdityaPatel", 10000000, 23, "10:00", "img.webp");