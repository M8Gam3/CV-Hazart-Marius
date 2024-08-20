Vue.component('profil-card', {
  template:   `
    <div class="profil-card">
      <div class="profil-card-header">
        <div class="profil-card-header-banner">
          <img
            class="profil-card-header-banner-img"
            src="profil-card-header-banner-img0.png"
          />
        </div>
        <div class="profil-card-header-icons">
          <div class="profil-card-header-icons-item">
            <img
              class="profil-card-header-icons-item-img"
              src="profil-card-header-icons-item-img0.png"
            />
          </div>
          <div class="profil-card-header-icons-item">
            <img
              class="profil-card-header-icons-item-img"
              src="profil-card-header-icons-item-img1.png"
            />
          </div>
          <div class="profil-card-header-icons-item">
            <img
              class="profil-card-header-icons-item-img"
              src="profil-card-header-icons-item-img2.png"
            />
          </div>
          <div class="profil-card-header-icons-item">
            <img
              class="profil-card-header-icons-item-img"
              src="profil-card-header-icons-item-img3.png"
            />
          </div>
          <div class="profil-card-header-icons-item">
            <img
              class="profil-card-header-icons-item-img"
              src="profil-card-header-icons-item-img4.png"
            />
          </div>
          <div class="profil-card-header-icons-item">
            <img
              class="profil-card-header-icons-item-img"
              src="profil-card-header-icons-item-img5.png"
            />
          </div>
        </div>
        <div class="profil-card-header-user">
          <div class="profil-card-header-user-profil">
            <div class="profil-card-header-user-profil-container">
              <img
                class="profil-card-header-user-profil-img"
                src="profil-card-header-user-profil-img0.png"
              />
            </div>
          </div>
          <div class="profil-card-header-user-status">
            <div class="profil-card-header-user-status-2"></div>
            <div class="profil-card-header-user-status-1"></div>
          </div>
        </div>
      </div>
      <div class="profil-card-content">
        <div class="profil-card-username">
          <div class="profil-card-username-content">
            <div class="profil-card-username-name">Marius Hazart</div>
            <div class="profil-card-username-username">#m8gam3</div>
          </div>
        </div>
        <div class="profil-card-divider"></div>
        <div class="profil-card-about">
          <div class="profil-card-title">
            <div class="profil-card-title-text">ABOUT AME</div>
          </div>
          <div class="profil-card-bio">
            <div class="profil-card-bio-text">
              <span>
                <span class="profil-card-bio-text-span">
                  graphic/ui designer
                  <br />
                </span>
                <span class="profil-card-bio-text-span">
                  https://www.muatex.uk
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="profil-card-roles">
          <div class="profil-card-title2">
            <div class="profil-card-title-text2">ROLES</div>
          </div>
          <div class="profil-card-roles-list">
            <div class="profil-card-roles-role">
              <div class="profil-card-roles-role-color color-1"></div>
              <div class="profil-card-roles-role-text">Python</div>
            </div>
            <div class="profil-card-roles-role">
              <div class="profil-card-roles-role-color color-2"></div>
              <div class="profil-card-roles-role-text">Data</div>
            </div>
            <div class="profil-card-roles-role">
              <div class="profil-card-roles-role-color color-3"></div>
              <div class="profil-card-roles-role-text">JavaScript</div>
            </div>
            <div class="profil-card-roles-role">
              <div class="profil-card-roles-role-color color-4"></div>
              <div class="profil-card-roles-role-text">Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div class="profil-card-note">
          <div class="profil-card-title">
            <div class="profil-card-title-text">NOTE</div>
          </div>
          <div class="profil-card-note-content">
            <div class="profil-card-note-content-container">
              <div class="profil-card-note-content-text">
                Lorem ipsum dolor sit amet consectetur. Sed posuere libero neque
                bibendum. Pulvinar augue imperdiet volutpat ornare egestas enim
                quisque orci. Sed molestie proin aliquam netus scelerisque laoreet
                enim a mattis. Congue eu ornare porta eu interdum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['level', 'name', 'progresscolor'],
  });


  Vue.component('portfolio-card', {
    template:   `
      <div class="portfolio-card">
        <div class="portfolio-card-banner">
          <img
            class="portfolio-card-banner-img"
            :src="img"
          />
        </div>
        <div class="portfolio-card-content">
          <div class="portfolio-card-container">
            <div class="portfolio-card-head">
              <svg
                class="portfolio-card-head-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 8.00002C16 8.79002 14.72 9.38002 14.48 10.09C14.24 10.8 14.92 12.09 14.48 12.68C14.04 13.27 12.64 13.03 12.02 13.48C11.4 13.93 11.23 15.32 10.48 15.57C9.73 15.82 8.81 14.77 8.01 14.77C7.21 14.77 6.26 15.77 5.54 15.57C4.82 15.37 4.62 13.93 4 13.48C3.38 13.03 2 13.3 1.54 12.68C1.08 12.06 1.77 10.84 1.54 10.09C1.31 9.34002 0 8.79002 0 8.00002C0 7.21002 1.28 6.62002 1.52 5.91002C1.76 5.20002 1.08 3.91002 1.52 3.32002C1.96 2.73002 3.37 2.97002 4 2.52002C4.63 2.07002 4.78 0.68002 5.53 0.40002C6.28 0.12002 7.2 1.23002 8 1.23002C8.8 1.23002 9.75 0.23002 10.47 0.43002C11.19 0.63002 11.38 2.07002 12 2.52002C12.62 2.97002 14 2.70002 14.46 3.32002C14.92 3.94002 14.23 5.16002 14.46 5.91002C14.69 6.66002 16 7.21002 16 8.00002Z"
                  fill="#23A559"
                />
                <path
                  d="M7.42519 11.5361L4.03516 8.9936L5.03223 7.63759L7.02636 9.16311L10.6557 4.38715L12.0117 5.38421L7.42519 11.5361Z"
                  fill="white"
                />
              </svg>
              <div class="portfolio-card-head-tittle">
                <div class="portfolio-card-head-text">{{name}}</div>
              </div>
            </div>
            <div class="portfolio-card-container-content">
              <div class="portfolio-card-container-text">
                {{ desc }}
              </div>
            </div>
          </div>
          <div class="portfolio-card-footer">
            <a class="portfolio-card-footer-button" :href="link" target="_blank">
            <svg
              class="link"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_98_405)">
                <path
                  d="M9.56873 5.43138C11.3191 7.18359 11.2951 9.99284 9.57927 11.7182C9.57605 11.7217 9.57224 11.7255 9.56873 11.729L7.59998 13.6978C5.86355 15.4342 3.03848 15.434 1.30232 13.6978C-0.434107 11.9616 -0.434107 9.13626 1.30232 7.40013L2.38941 6.31304C2.67769 6.02476 3.17416 6.21636 3.18904 6.62376C3.20802 7.14296 3.30113 7.66459 3.47293 8.16832C3.53111 8.33889 3.48954 8.52756 3.3621 8.655L2.97869 9.0384C2.15761 9.85948 2.13186 11.1964 2.94485 12.0255C3.76587 12.8628 5.11534 12.8678 5.94265 12.0405L7.9114 10.072C8.73731 9.24609 8.73385 7.91115 7.9114 7.0887C7.80298 6.98048 7.69376 6.8964 7.60844 6.83766C7.54809 6.79621 7.49826 6.74124 7.46292 6.67712C7.42758 6.61299 7.40772 6.5415 7.40492 6.46834C7.39332 6.15876 7.503 5.83975 7.74763 5.59512L8.36445 4.97828C8.5262 4.81653 8.77994 4.79667 8.9675 4.92756C9.18229 5.07755 9.38348 5.24614 9.56873 5.43138ZM13.6977 1.30223C11.9615 -0.433959 9.13645 -0.434193 7.40003 1.30223L5.43128 3.27098C5.42776 3.27449 5.42395 3.2783 5.42073 3.28181C3.70493 5.00716 3.68087 7.81641 5.43128 9.56862C5.61651 9.75385 5.81769 9.92243 6.03248 10.0724C6.22004 10.2033 6.47381 10.1834 6.63552 10.0217L7.25234 9.40485C7.49697 9.16022 7.60666 8.84121 7.59506 8.53163C7.59225 8.45847 7.57239 8.38698 7.53705 8.32285C7.50172 8.25873 7.45188 8.20376 7.39153 8.16231C7.30622 8.10357 7.197 8.01949 7.08857 7.91127C6.26612 7.08882 6.26266 5.75388 7.08857 4.92797L9.05732 2.95952C9.88464 2.13221 11.2341 2.13719 12.0551 2.97446C12.8681 3.80356 12.8424 5.14049 12.0213 5.96157L11.6379 6.34497C11.5104 6.47241 11.4689 6.66109 11.527 6.83165C11.6988 7.33538 11.792 7.85701 11.8109 8.37621C11.8258 8.78361 12.3223 8.97521 12.6106 8.68693L13.6977 7.59984C15.4341 5.86374 15.4341 3.03836 13.6977 1.30223Z"
                  fill="#72767D"
                />
              </g>
              <defs>
                <clipPath id="clip0_98_405">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
              <div class="portfolio-card-footer-button-content">
                <div class="portfolio-card-footer-button-content-text">Projet</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `,
    props: ['name', 'img', 'link', 'desc'],
  });


  Vue.component('icons-card', {
    template:   `
      <div class="icons-card">
        <div class="icons-card-header">
          <div class="icons-card-header-content">
            <div class="icons-card-header-content-container">
              <div class="icons-card-header-frame">
                <img
                  class="icons-card-header-frame-img"
                  :src="url"
                />
              </div>
              <div class="card-icons-header-text">{{ name }}</div>
            </div>
          </div>
        </div>
        <div class="icons-card-content">
          <div class="icons-card-content-container">
            <slot></slot> 
          </div>
        </div>
      </div>
    `,
    props: ['name', 'url'],
  });
  
  Vue.component('icon-card-skill', {
    template: `
      <div class="icons-card-item">
        <img class="icons-card-item-img" :src="url" />
      </div>
    `,
    props: ['url'],
  });  


  // Vue.component('content-card', {
  //   template:   `
  //     <div class="card-content color-blue">
  //       <div class="card-content-container">
  //         <div class="card-content-header">
  //           <div class="card-content-header-icon">
  //             <img
  //               class="card-content-header-img"
  //               src="img"
  //             />
  //           </div>
  //           <div class="card-content-header-content">
  //             <div class="card-content-headere-text">Lorem ipsum</div>
  //           </div>
  //         </div>
  //         <div class="card-content-1">
  //           <div class="card-content-1-title">
  //             <div class="card-content-1-title-text">Lorem Ipsum dolor sit amet</div>
  //           </div>
  //           <div class="card-content-1-content">
  //             <div class="card-content-1-content-text">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  //               sollicitudin dolor libero, quis semper arcu varius sit amet. Cras
  //               vitae aliquam neque. Sed placerat felis nec quam consequat gravida.
  //               Aenean sit amet purus pharetra, maximus sem eget, maximus ligula. Duis
  //               est tortor, tincidunt facilisis placerat congue, pulvinar in nibh.
  //               Praesent ut sem sit amet neque ultrices viverra. Nam dui lectus,
  //               vulputate vel cursus volutpat, semper eget libero. In metus ligula,
  //               hendrerit non tellus vel, cursus vehicula erat. Suspendisse venenatis
  //               sollicitudin scelerisque. Aenean faucibus sollicitudin purus nec
  //               congue.
  //             </div>
  //           </div>
  //         </div>
  //         <div class="card-content-2">
  //           <div class="card-content-field">
  //             <div class="card-content-field-title">Field</div>
  //             <div class="card-content-field-text">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  //               sollicitudin dolor libero, quis semper arcu varius sit amet. Cras
  //               vitae aliquam neque. Sed placerat felis nec quam consequat gravida.
  //             </div>
  //           </div>
  //           <div class="card-content-field">
  //             <div class="card-content-field-title">Field</div>
  //             <div class="card-content-field-text">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
  //               sollicitudin dolor libero, quis semper arcu varius sit amet. Cras
  //               vitae aliquam neque. Sed placerat felis nec quam consequat gravida.
  //             </div>
  //           </div>
  //         </div>
  //         <div class="card-content-banner">
  //           <img class="card-content-banner-img" src="banner" />
  //         </div>
  //         <div class="card-content-footer">
  //           <div class="card-content-footer-icon">
  //             <img
  //               class="card-content-footer-icon-img"
  //               src="img"
  //             />
  //           </div>
  //           <div class="card-content-footer-name">Marius Hazart</div>
  //           <div class="card-content-footer-separator">•</div>
  //           <div class="card-content-footer-date">{{date}}</div>
  //         </div>
  //       </div>
  //     </div>
  //     `,
  //     props: ['img', 'banner', 'date', 'color', 'title-1', 'text-1'],
  // });

  Vue.component('content-card', {
    template:   `
      <div class="card-content" :class="color">
        <div class="card-content-container">
          <div class="card-content-top">
            <div class="card-content-header">
              <div class="card-content-header-icon">
                <img
                  class="card-content-header-img"
                  :src="img"
                />
              </div>
              <div class="card-content-header-content">
                <p class="card-content-headere-text">{{title1}}</p>
              </div>
            </div>
            <div class="card-content-1">
              <div class="card-content-1-content">
                <p class="card-content-1-content-text">
                  {{text1}}
                  congue.
                </p>
              </div>
            </div>
            <div class="card-content-banner">
              <img class="card-content-banner-img" :src="banner" />
            </div>
          </div>
          <div class="card-content-footer">
            <div class="card-content-footer-icon">
              <img
                class="card-content-footer-icon-img"
                :src="img"
              />
            </div>
            <div class="card-content-footer-name">Marius Hazart</div>
            <div class="card-content-footer-separator">•</div>
            <div class="card-content-footer-date">{{date}}</div>
          </div>
        </div>
      </div>  
    `,
    props: ['img', 'banner', 'date', 'color', 'title1', 'text1'],
  });

  Vue.component('presentation-card', {
    template:   `
    <div class="home-card">
    <div class="home-card-header">
      <div class="home-card-header-banner">
        <img class="home-card-banner-img" :src="banner" />
      </div>
      <div class="home-card-title">{{username}}</div>
    </div>
    <div class="home-card-content">
      <div class="home-card-item">
        <div class="home-card-item-tittle">{{ trad === 'fr' ? 'Profil' : 'Profile' }}</div>
        <div class="home-card-item-text">
          <div class="home-card-item-text-p">{{work}}</div>
          <div class="home-card-item-text-p">
            {{school}}
          </div>
        </div>
      </div>
      <div class="home-card-items">
        <div class="home-card-item2">
          <div class="home-card-item-tittle">{{ trad === 'fr' ? 'Addresse' : 'Address' }}</div>
          <div class="home-card-item-text">

            <div class="home-card-item-text-p" v-for="value in address">
              {{value.name}} : {{value.add}}
            </div>

          </div>
        </div>
        <div class="home-card-item2">
          <div class="home-card-item-tittle">{{ trad === 'fr' ? 'Langues' : 'Languages' }}</div>
          <div class="home-card-item-text">

            <div class="home-card-item-text-frame" v-for="value in language">
              <div class="home-card-item-text-slot">
                <img
                  class="home-card-item-text-img"
                  :src="value.img"
                />
              </div>
              <div class="home-card-item-text-p2">
                {{value.name}} : {{value.level}}
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    `,
      props: ['username', 'school', 'work', 'address', 'language', 'banner', 'trad'],
  });

// function fetchData(url) {
//     // Replace 'data.json' with the path to your JSON file
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             // Assign the fetched data to the 'items' property
//             return data.items;
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }


var app = new Vue({
  el: '#app',
  data: {
    language: "fr",
      json_files: {
          content: "./assets/data/content.json",
          portfolio: "./assets/data/portfolio.json",
          profil: "./assets/data/profil.json",
          skills: "./assets/data/skills.json",
          presentation: "./assets/data/presentation.json",
      },
      section_one: true,
      home: true,
      experience: false,
      section_two: false,
      branly: true,
      laManu1: false,
      laManu2: false,
      content_data: null, // Initialize to null
      portfolio_data: null, // Initialize to null
      profil_data: null, // Initialize to null
      skills_data: null, // Initialize to null
      presentation_data: null, // Initialize to null

      showMenu: false
  },
  created() {
      // Fetch data asynchronously when the Vue instance is created
      this.fetchContentData();
      this.fetchPortfolioData();
      this.fetchProfilData();
      this.fetchSkillsData();
      this.fetchPresentationData();
  },
  methods: {
      async fetchData(url) {
          try {
              const response = await fetch(url);
              const data = await response.json();
              return data;
          } catch (error) {
              console.error('Error fetching data:', error);
              throw error;
          }
      },
      async fetchContentData() {
          this.content_data = await this.fetchData(this.json_files['content']);
      },
      async fetchPortfolioData() {
          this.portfolio_data = await this.fetchData(this.json_files['portfolio']);
      },
      async fetchProfilData() {
          this.profil_data = await this.fetchData(this.json_files['profil']);
      },
      async fetchSkillsData() {
          this.skills_data = await this.fetchData(this.json_files['skills']);
      },
      async fetchPresentationData() {
        this.presentation_data = await this.fetchData(this.json_files['presentation']);
    },
      navOne() {
          this.section_one = true;
          this.section_two = false;
      },
      navHome() {
          this.home = true;
          this.experience = false;
      },
      navExperience() {
          this.home = false;
          this.experience = true;
      },
      navTwo() {
          this.section_one = false;
          this.section_two = true;
      },
      navBranly() {
          this.branly = true;
          this.laManu1 = false;
          this.laManu2 = false;
      },
      navManu1() {
          this.branly = false;
          this.laManu1 = true;
          this.laManu2 = false;
      },
      navManu2() {
          this.branly = false;
          this.laManu1 = false;
          this.laManu2 = true;
      },

      changeLanguage(newLanguage) {
        this.language = newLanguage;
        // Re-fetch data for the new language
        // this.fetchContentData();
        // this.fetchPortfolioData();
        // this.fetchProfilData();
        // this.fetchSkillsData();
        // this.fetchPresentationData();
      },



      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
  },
});


// let btnOne = document.querySelector("#btn_one")
// let btnTwo = document.querySelector("#btn_two")

// btnOne.addEventListener("click", function(){
//     btnOne.classList.add("logo");
//     btnTwo.classList.remove("logo");
// })
// btnTwo.addEventListener("click", function(){
//     btnOne.classList.remove("logo");
//     btnTwo.classList.add("logo");
// })

// function mobileOpen() {
//     let navbar = document.querySelector('#navbar');
//     navbar.classList.toggle("mobile");
// }

// function mobileClose() {
//     let navbar = document.querySelector('#navbar');
//     navbar.classList.toggle("mobile");
// }

{/* <div class="navbar-cursor"><div class="navbar-cursor-div"></div></div> */}