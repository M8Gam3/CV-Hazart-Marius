Vue.component('icons-card', {
  template:   `
<div class="icons-card">
  <div class="icons-card-header">
    <div class="icons-card-header-content">
      <div class="icons-card-header-content-container">
        <div class="icons-card-header-frame">
          <img
            class="icons-card-header-frame-img"
            src="icons-card-header-frame-img0.png"
          />
        </div>
        <div class="card-icons-header-text">Compétences principales</div>
      </div>
    </div>
  </div>
  <div class="icons-card-content">
    <div class="icons-card-content-container">
      <div class="icons-card-item">
        <img class="icons-card-item-img" src="icons-card-item-img0.png" />
      </div>
      <div class="icons-card-item">
        <img class="icons-card-item-img" src="icons-card-item-img1.png" />
      </div>
      <div class="icons-card-item">
        <img class="icons-card-item-img" src="icons-card-item-img2.png" />
      </div>
    </div>
  </div>
</div>
`,
props: ['level', 'name', 'progresscolor'],
});