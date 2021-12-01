function getUrlParams() {
    var params = {};

    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (str, key, value) {
            params[key] = value;
        }
    );

    return params;
}

const id = getUrlParams()["id"] * 1

//matching
let title = document.querySelector(".title")
let writer = document.querySelector(".writer")
let viewCount = document.querySelector(".viewCount")
let content = document.querySelector(".content")

let prevBtn = document.querySelector(".buttons .prev")
let nextBtn = document.querySelector(".buttons .next")

if(id == 0){
    prevBtn.hidden = true;
}   else if(id == data.length - 1){
    nextBtn.hidden = true;
}

prevBtn.addEventListener("click", () => {
    location.href = `./board.html?id=${id - 1}`
})

nextBtn.addEventListener("click", () => {
    location.href = `./board.html?id=${id + 1}`
})

title.innerText = data[id].title
writer.innerText = data[id].writer
viewCount.innerText = data[id].viewCount
content.innerText = data[id].content
