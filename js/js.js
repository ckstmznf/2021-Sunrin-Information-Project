//matching

let allBoardList = document.querySelector(".all-board-list")
let bestBoardList = document.querySelector(".best-board-list")
let ideaBoardList = document.querySelector(".idea-board-list")
let projectBoardList = document.querySelector(".project-board-list")


data.forEach((i, n) => {
    let boardList = document.createElement("li")
    boardList.innerText = i.title
    boardList.addEventListener("click", () => {
        location.href = "./board.html?id=" + n
    })

    allBoardList.appendChild(boardList)
})

data.forEach((i, n) => {
    let boardList = document.createElement("li")
    boardList.innerText = i.title
    boardList.addEventListener("click", () => {
        location.href = "./board.html?id=" + n
    })

    bestBoardList.appendChild(boardList)
})

data.forEach((i, n) => {
    let boardList = document.createElement("li")
    boardList.innerText = i.title
    boardList.addEventListener("click", () => {
        location.href = "./board.html?id=" + n
    })

    ideaBoardList.appendChild(boardList)
})

data.forEach((i, n) => {
    let boardList = document.createElement("li")
    boardList.innerText = i.title
    boardList.addEventListener("click", () => {
        location.href = "./board.html?id=" + n
    })

    projectBoardList.appendChild(boardList)
})