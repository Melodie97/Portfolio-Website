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
  <div><a href="#"><h5>Twitter User(WeRateDogs) Analytics in Python</h5></a>
  <p> Performed Analysis on twitter user (WeRateDogs) using data gotten from different independent
     sources(API, URL, and csv file).</p></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/covid-19.jpg" alt="" height="150" width="180">
  </div>
  <div><a href="#"><h5>Covid19 SQL Analytics</h5></a>
  <p>An Exploratory Data Analysis on a covid19 dataset using SQL</p></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div><a href="#"><h5>Restaurant Analytics in PowerBI</h5></a>
  <p>Summary Dashboard in PowerBI showing insights into a restaurant's orders and sales in a quarter.</div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/Revenue Dashboard.png" alt="" height="150" width="180">
  </div>
  <div><a href="#"><h5>Revenue and Margin Analytics in Tableau</h5></a>
  <p>Summary Dashboard in Tableau showing insights into a store's sales, highlighting the store's revenue and
    gross margin.</p></div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/william-hook-9e9PD9blAto-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div><a href="#"><h5>Customer Analytics on Mobile App Feature Usage in SQL</h5></a>
  <p>Customers were grouped into frequency buckets based on how often they used a specific feature in a mobile app.
    The Analytics aims to aid Targeted Ad Campaigns. </p></div>
</div>`;
  
  const allHTML = `<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/alexander-shatov-k1xf2D7jWUs-unsplash.jpg" height="150" width="180" />
  </div>
  <div>
    <a href="#"><h5>Twitter User(WeRateDogs) Analytics in Python</h5></a>
    <p> Performed Analysis on twitter user (WeRateDogs) using data gotten from different independent
       sources(API, URL, and csv file).</p>
  </div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/covid-19.jpg" alt="" height="150" width="180">
  </div>
  <div>
    <a href="#"><h5>Covid19 SQL Analytics</h5></a>
    <p>An Exploratory Data Analysis on a covid19 dataset using SQL</p>
  </div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div>
    <a href="#"><h5>Restaurant Analytics in PowerBI</h5></a>
    <p>Summary Dashboard in PowerBI showing insights into a restaurant's orders and sales in a quarter.</p>
  </div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/Revenue Dashboard.png" alt="" height="150" width="180">
  </div>
  <div>
    <a href="#"><h5>Revenue and Margin Analytics in Tableau</h5></a>
    <p>Summary Dashboard in Tableau showing insights into a store's sales, highlighting the store's revenue and
      gross margin.</p>
  </div>
</div>
<div class="grid-item">
  <div>
    <img src="assets/Data Analytics/william-hook-9e9PD9blAto-unsplash.jpg" alt="" height="150" width="180">
  </div>
  <div>
    <a href="#"><h5>Customer Analytics on Mobile App Feature Usage in SQL</h5></a>
    <p>Customers were grouped into frequency buckets based on how often they used a specific feature in a mobile app.
      The Analytics aims to aid Targeted Ad Campaigns. </p>
  </div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Engineering/ETL Project.png" alt="" height="150" width="180"></div>
  <div>
    <a href="#"><h5>ETL Project in Python</h5></a>
    <p>Extracted data from a csv file, Transformed the data (cleaning, removal of duplicates and some missing values), and
      Loaded it into a Postgres Database.
    </p>
  </div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Science/BOE.jpg" alt="" height="150" width="180"></div>
  <div>
    <a href="#"><h5>Bank Loan Classification in Python</h5></a>
    <p> Built several ML models to determine the one that best classifies bad loans based on the available features.</p>
  </div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Science/mojahid-mottakin-f2MlXoFMy54-unsplash.jpg" height="150" width="180"></div>
  <div>
    <a href="#"><h5>Custom Chatbot for Nasa Webpage</h5></a>
    <p> Built a custom Chatbot using an openAI LLM. The process involved scraping the webpage and fine tuning the 
      model with the data.
    </p>
  </div>
</div>`;

  const dataScienceHTML = `<div class="grid-item">
  <div><img src="assets/Data Science/BOE.jpg" alt="" height="150" width="180"></div>
  <div><a href="#"><h5>Bank Loan Classification in Python</h5></a>
  <p> Built several ML models to determine the one that best classifies bad loans based on the available features.</p></div>
</div>
<div class="grid-item">
  <div><img src="assets/Data Science/mojahid-mottakin-f2MlXoFMy54-unsplash.jpg" height="150" width="180"></div>
  <div><a href="#"><h5>Custom Chatbot for Nasa Webpage</h5></a>
  <p> Built a custom Chatbot using an openAI LLM. The process involved scraping the webpage and fine tuning the 
    model with the data.
  </p></div>
</div>`;

const dataEngineeringHTML = `<div class="grid-item">
<div><img src="assets/Data Engineering/ETL Project.png" alt="" height="150" width="180"></div>
<div>
  <a href="#"><h5>ETL Project in Python</h5></a>
  <p>Extracted data from a csv file, Transformed the data (cleaning, removal of duplicates and some missing values), and
    Loaded it into a Postgres Database.
  </p>
</div>
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