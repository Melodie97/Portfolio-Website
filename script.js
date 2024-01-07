(function () {
  const allBtn = document.querySelector("#all");
  // const projectsNav = document.querySelector("#projects-nav");
  const dataAnalyticsBtn = document.querySelector("#data-analytics");
  const dataEngineeringBtn = document.querySelector("#data-engineering");
  const dataScienceBtn = document.querySelector("#data-science");
  let gridContainer = document.querySelector(".grid-container");
  
  const dataAnalyticsHTML = `<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/alexander-shatov-k1xf2D7jWUs-unsplash.jpg" height="150" width="180" />
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/covid-19.jpg" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/Revenue Dashboard.png" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/william-hook-9e9PD9blAto-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div></div>
</div>`;
  
  const allHTML = `<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/alexander-shatov-k1xf2D7jWUs-unsplash.jpg" height="150" width="180" />
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/covid-19.jpg" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/Revenue Dashboard.png" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/william-hook-9e9PD9blAto-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div></div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Engineering/ETL Project.png" alt="" height="150" width="180"></div>
  <div></div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Science/BOE.jpg" alt="" height="150" width="180"></div>
  <div></div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Science/mojahid-mottakin-f2MlXoFMy54-unsplash.jpg" height="150" width="180"></div>
  <div></div>
</div>
</div>`;

  const dataEngineeringHTML = `<div class="grid-item">
  <div><img src="assets/Data Engineering/ETL Project.png" alt="" height="150" width="180"></div>
  <div></div>
</div>`;

  const dataScienceHTML = `<div class="grid-item">
  <div><img src="assets/Data Science/BOE.jpg" alt="" height="150" width="180"></div>
  <div></div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Science/mojahid-mottakin-f2MlXoFMy54-unsplash.jpg" height="150" width="180"></div>
  <div></div>
</div>`;

  dataAnalyticsBtn.addEventListener("click", function () {
    if (allBtn.className === 'selected') {
      allBtn.className = undefined;
    } else if (dataEngineeringBtn.className === 'selected') {
      dataEngineeringBtn.className = undefined;
    } else if (dataScienceBtn.className === 'selected') {
      dataScienceBtn.className = undefined;
    }

    dataAnalyticsBtn.className = "selected";
    gridContainer.innerHTML = dataAnalyticsHTML;
  });

  dataScienceBtn.addEventListener("click", function () {
    if (allBtn.className === 'selected') {
      allBtn.className = undefined;
    } else if (dataEngineeringBtn.className === 'selected') {
      dataEngineeringBtn.className = undefined;
    } else if (dataAnalyticsBtn.className === 'selected') {
      dataAnalyticsBtn.className = undefined;
    }

    dataScienceBtn.className = "selected";
    gridContainer.innerHTML = dataScienceHTML;
  });

  dataEngineeringBtn.addEventListener("click", function () {
    if (allBtn.className === 'selected') {
      allBtn.className = undefined;
    } else if (dataScienceBtn.className === 'selected') {
      dataScienceBtn.className = undefined;
    } else if (dataAnalyticsBtn.className === 'selected') {
      dataAnalyticsBtn.className = undefined;
    }

    dataEngineeringBtn.className = "selected";
    gridContainer.innerHTML = dataEngineeringHTML;
  });

  allBtn.addEventListener("click", function () {
    if (dataEngineeringBtn.className === 'selected') {
      dataEngineeringBtn.className = undefined;
    } else if (dataScienceBtn.className === 'selected') {
      dataScienceBtn.className = undefined;
    } else if (dataAnalyticsBtn.className === 'selected') {
      dataAnalyticsBtn.className = undefined;
    }

    allBtn.className = "selected";
    gridContainer.innerHTML = allHTML;
  });  
})();