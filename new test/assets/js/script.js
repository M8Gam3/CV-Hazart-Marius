// const form = document.querySelector("form")
// const chatMessages = document.querySelector(".chat__messages")
// const input = document.querySelector(".sendMessage")

// form.addEventListener("submit", sendMessage)

// function sendMessage(e) {
//     e.preventDefault()

//     if(input.value !== "") {
//         var messageDiv = document.createElement("div")
//         messageDiv.className = "message"

//         var avatar = document.createElement("img")
//         avatar.src = "assets/user4.jpg"

//         var messageInfo = document.createElement("div")
//         messageInfo.className = "message__info"

//         var userInfo = document.createElement("h4")
//         userInfo.innerHTML = "Gamer"

//         var messageTimestamp = document.createElement("span")
//         messageTimestamp.className = "message__timestamp"

//         const date = new Date()
//         const year = date.getFullYear()
//         const month = String(date.getMonth()).padStart(2, "0")
//         const day = String(date.getDate()).padStart(2, "0")

//         messageTimestamp.innerHTML = month + "/" + day + "/" + year

//         const message = document.createElement("p")
//         message.innerHTML = input.value
//         input.value = ""

//         userInfo.appendChild(messageTimestamp)
//         messageInfo.appendChild(userInfo)
//         messageInfo.appendChild(message)

//         messageDiv.appendChild(avatar)
//         messageDiv.appendChild(messageInfo)

//         chatMessages.appendChild(messageDiv)
//         chatMessages.scrollBy(0, 10000)
//     }
// }

const btn_one = document.querySelector("#btn_one")
    const menu_one = document.querySelector("#menu_one")
    const section_one = document.querySelector("#section_one")
        const home_icon = document.querySelector("#home_icon")
        const home_content = document.querySelector("#home_content")

        const profile_icon = document.querySelector("#profile_icon")
        const profile_content = document.querySelector("#profile_content")


const btn_two = document.querySelector("#btn_two")
    const menu_two = document.querySelector("#menu_two")
    const section_two = document.querySelector("#section_two")



profile_content.classList.add("invisible");

section_two.classList.add("invisible");

menu_two.classList.add("invisible");

btn_one.addEventListener("click", function(){
    section_two.classList.add("invisible");
    section_one.classList.remove("invisible");
    menu_two.classList.add("invisible");
    menu_one.classList.remove("invisible");
})
    home_icon.addEventListener("click", function(){
        profile_content.classList.add("invisible");
        home_content.classList.remove("invisible");
    })
    profile_icon.addEventListener("click", function(){
        home_content.classList.add("invisible");
        profile_content.classList.remove("invisible");
    })

btn_two.addEventListener("click", function(){
    section_one.classList.add("invisible");
    section_two.classList.remove("invisible");
    menu_one.classList.add("invisible");
    menu_two.classList.remove("invisible");
})