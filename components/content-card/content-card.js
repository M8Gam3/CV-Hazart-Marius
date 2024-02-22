Vue.component('content-card', {
  template:   `
<div class="card-content color-blue">
  <div class="card-content-container">
    <div class="card-content-header">
      <div class="card-content-header-icon">
        <img
          class="card-content-header-img"
          src="card-content-header-img0.png"
        />
      </div>
      <div class="card-content-header-content">
        <div class="card-content-headere-text">Lorem ipsum</div>
      </div>
    </div>
    <div class="card-content-1">
      <div class="card-content-1-title">
        <div class="card-content-1-title-text">Lorem Ipsum dolor sit amet</div>
      </div>
      <div class="card-content-1-content">
        <div class="card-content-1-content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin dolor libero, quis semper arcu varius sit amet. Cras
          vitae aliquam neque. Sed placerat felis nec quam consequat gravida.
          Aenean sit amet purus pharetra, maximus sem eget, maximus ligula. Duis
          est tortor, tincidunt facilisis placerat congue, pulvinar in nibh.
          Praesent ut sem sit amet neque ultrices viverra. Nam dui lectus,
          vulputate vel cursus volutpat, semper eget libero. In metus ligula,
          hendrerit non tellus vel, cursus vehicula erat. Suspendisse venenatis
          sollicitudin scelerisque. Aenean faucibus sollicitudin purus nec
          congue.
        </div>
      </div>
    </div>
    <div class="card-content-2">
      <div class="card-content-field">
        <div class="card-content-field-title">Field</div>
        <div class="card-content-field-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin dolor libero, quis semper arcu varius sit amet. Cras
          vitae aliquam neque. Sed placerat felis nec quam consequat gravida.
        </div>
      </div>
      <div class="card-content-field">
        <div class="card-content-field-title">Field</div>
        <div class="card-content-field-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sollicitudin dolor libero, quis semper arcu varius sit amet. Cras
          vitae aliquam neque. Sed placerat felis nec quam consequat gravida.
        </div>
      </div>
    </div>
    <div class="card-content-banner">
      <img class="card-content-banner-img" src="card-content-banner-img0.png" />
    </div>
    <div class="card-content-footer">
      <div class="card-content-footer-icon">
        <img
          class="card-content-footer-icon-img"
          src="card-content-footer-icon-img0.png"
        />
      </div>
      <div class="card-content-footer-name">Marius Hazart</div>
      <div class="card-content-footer-separator">•</div>
      <div class="card-content-footer-date">date</div>
    </div>
  </div>
</div>
`,
    props: ['level', 'name', 'progresscolor'],
});
