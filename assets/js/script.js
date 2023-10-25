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

Vue.component('object-category-skills', {
    template:   `<div class="skill-object">
                    <h4> {{name}} </h4>
                    <progress v-bind:class="progresscolor(level)" id="file" max="100" v-bind:value="level * 20"></progress>
                </div>`,
    props: ['level', 'name', 'progresscolor'],
});

Vue.component('content-block0', {
    template:   `<div class="content-block0"><slot></div>`,
});

Vue.component('content-block1', {
    template:   `<div class="content-block1"><slot></div>`,
});

Vue.component('content-block2', {
    template:   `<div class="content-block2"><slot></div>`,
});

Vue.component('content-block3', {
    template:   `<div class="content-block3"><slot></div>`,
});

Vue.component('chat-content', {
    template:   `<div class="chat-content"><slot></div>`,
});

var app = new Vue({
    el: '#app',
    data: {

        section_one: true,
        home: true,
        profil: false,
        skills: false,
        experience: false,

        section_two: false,
        branly: true,
        laManu1: false,
        laManu2: false,

        skillsList : {
            Languages: [
                {
                    name: 'HTML',
                    level: 3,
                    more:[
                        
                    ],
                },
                {
                    name: 'CSS',
                    level: 2,
                    more:[
                        {
                            name: 'flex',
                            level: 3,
                        },
                        {
                            name: 'grid',
                            level: 1
                        },
                        {
                            name: 'reponsive',
                            level: 2
                        },
                    ],
                },
                {
                    name: 'Python',
                    level: 4,
                    more:[
                        {
                            name: 'optimisation',
                            level: 4,
                        },
                    ],
                },
                {
                    name: 'JavaScript',
                    level: 4,
                    more:[
                        {
                            name: 'optimisation',
                            level: 4,
                        },
                        {
                            name: 'local storage',
                            level: 3,
                        },
                    ],
                },
                {
                    name: 'PHP',
                    level: 3.5,
                    more:[
                        {
                            name: 'procédural',
                            level: 4,
                        },
                        {
                            name: 'optimisation',
                            level: 3,
                        },
                        {
                            name: 'GET/POST',
                            level: 2,
                        },
                    ],
                },
                {
                    name: 'mySQl',
                    level: 3.20,
                    more:[
                        {
                            name: 'SELECT',
                            level: '3',
                        },
                    ],
                },
            ],
            framework: [
                {
                    name: 'Vue.js',
                    level: 4,
                    more:[
                        {
                            name: 'optimisation',
                            level: 3,
                        },
                        {
                            name: 'templates',
                            level: 4,
                        },
                    ],
                },
                {
                    name: 'Bootstrap',
                    level: 3,
                    more:[
                        {
                            name: 'style',
                            level: 3,
                        },
                    ],
                },
            ],
            design: [
                {
                    name: 'Figma',
                    level: 2.5,
                    more:[
                        {
                            name: 'UI',
                            level: 1,
                        },
                        {
                            name: 'UX',
                            level: 2,
                        },
                        {
                            name: 'maquettage',
                            level: 3,
                        },
                    ],
                },
                {
                    name: 'Adobe XD',
                    level: 2,
                    more:[
                        {
                            name: 'UI',
                            level: 1,
                        },
                        {
                            name: 'UX',
                            level: 2,
                        },
                        {
                            name: 'maquettage',
                            level: 2,
                        },
                    ],
                },
                {
                    name: 'Photoshop',
                    level: 1,
                    more:[
                        {
                            name: 'UI',
                            level: 1,
                        },
                        {
                            name: 'UX',
                            level: 2,
                        },
                        {
                            name: 'modification d\'images',
                            level: 1,
                        },
                    ],
                },
                {
                    name: 'Adobe Illustrator',
                    level: 1,
                    more:[
                        {
                            name: 'création de logo',
                            level: 1,
                        },
                        {
                            name: 'création de bannière',
                            level: 1,
                        },
                        {
                            name: 'illustration',
                            level: 1,
                        },
                    ],
                },
            ],
            Autre: [
                {
                    name: 'Git',
                    level: 3.5,
                    more:[
                        {
                            name: 'Serveur GitHub',
                            level: 4,
                        },
                        {
                            name: 'Desktop',
                            level: 4,
                        },
                        {
                            name: 'Console',
                            level: 1,
                        },
                        {
                            name: 'Versionning',
                            level: 3,
                        },
                        {
                            name: 'Branch',
                            level: 3,
                        },
                    ],
                },
                {
                    name: 'Trello',
                    level: 3,
                    more:[
                        {
                            name: 'Lecture',
                            level: '5',
                        },
                        {
                            name: 'Gestion',
                            level: '2',
                        },
                    ],
                },
                {
                    name: 'XML',
                    level: 3,
                    more:[
                        {
                            name: 'RSS',
                            level: 1,
                        },
                    ],
                },
            ],
        },

    },
    computed: {

    },
    methods: {
        navOne: function () {
            this.section_one = true;
            this.section_two = false;
        },
        navHome: function () {
            this.home = true;
            this.profil = false;
            this.skills = false;
            this.experience = false;
        },
        navProfil: function () {
            this.home = false;
            this.profil = true;
            this.skills = false;
            this.experience = false;
        },
        navSkills: function () {
            this.home = false;
            this.profil = false;
            this.skills = true;
            this.experience = false;
        },
        navExperience: function () {
            this.home = false;
            this.profil = false;
            this.skills = false;
            this.experience = true;
        },


        navTwo: function () {
            this.section_one = false;
            this.section_two = true;
        },
        navDistrict: function () {
            this.branly = true;
            this.laManu1 = false;
            this.laManu2 = false;
        },
        navAddressage: function () {
            this.branly = false;
            this.laManu1 = true;
            this.laManu2 = false;
        },
        navShifumi: function () {
            this.branly = false;
            this.laManu1 = false;
            this.laManu2 = true;
        },


        // navSkills: function () {
        //     this.home = false;
        //     this.portfolio = false;
        //     this.presentation = false;
        //     this.skills = true;
        // },



        progressColor: function (level) {
            if (level <= 1) {
                return "progress-red";
            } else if (level <= 2) {
                return "progress-orange";
            } else if (level <= 3) {
                return "progress-yellow";
            } else if (level <= 4) {
                return "progress-green";
            } else if (level <= 5) {
                return "progress-succes";
            }
            // switch (level) {
            //     case 1:
            //         return "progress-red";
            //     case 2:
            //         return "progress-orange";
            //     case 3:
            //         return "progress-yellow";
            //     case 4:
            //         return "progress-green";
            //     case 5:
            //         return "progress-succes";
            // };
        },
    },
})

let btnOne = document.querySelector("#btn_one")
let btnTwo = document.querySelector("#btn_two")

btnOne.addEventListener("click", function(){
    btnOne.classList.add("logo");
    btnTwo.classList.remove("logo");
})
btnTwo.addEventListener("click", function(){
    btnOne.classList.remove("logo");
    btnTwo.classList.add("logo");
})