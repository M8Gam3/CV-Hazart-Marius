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