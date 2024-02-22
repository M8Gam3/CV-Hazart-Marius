Vue.component('presentation-card', {
    template:   `
    <div class="home-card">
    <div class="home-card-header">
      <div class="home-card-header-banner">
        <img class="home-card-banner-img" src="home-card-banner-img0.png" />
      </div>
      <div class="home-card-title">Marius Hazart</div>
    </div>
    <div class="home-card-content">
      <div class="home-card-item">
        <div class="home-card-item-tittle">Profil.</div>
        <div class="home-card-item-text">
          <div class="home-card-item-text-p">Aspirant Architecte Data</div>
          <div class="home-card-item-text-p">
            2ème année de Master à LA MANU, Établissement d&#039;Enseignement
            Supérieur des Métiers du Numérique
          </div>
        </div>
      </div>
      <div class="home-card-items">
        <div class="home-card-item2">
          <div class="home-card-item-tittle">Address</div>
          <div class="home-card-item-text">
            <div class="home-card-item-text-p">
              France : 6 bis allée des tilleuls, 80330, Longueau
            </div>
            <div class="home-card-item-text-p">
              Malerhaugveien 20 C, 0661 Oslo
            </div>
          </div>
        </div>
        <div class="home-card-item2">
          <div class="home-card-item-tittle">Langues</div>
          <div class="home-card-item-text">
            <div class="home-card-item-text-frame">
              <div class="home-card-item-text-slot">
                <img
                  class="home-card-item-text-img"
                  src="home-card-item-text-img0.png"
                />
              </div>
              <div class="home-card-item-text-p2">
                Francais : Langue maternelle
              </div>
            </div>
            <div class="home-card-item-text-frame2">
              <div class="home-card-item-text-slot">
                <img
                  class="home-card-item-text-img"
                  src="home-card-item-text-img1.png"
                />
              </div>
              <div class="home-card-item-text-p2">Anglais : Niveau B1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    `,
      props: ['level', 'name', 'progresscolor'],
  });