(function () {
  "use strict";

  // Get all the buttons
  const allBtn = document.querySelector("#all");
  const dataAnalyticsBtn = document.querySelector("#data-analytics");
  const dataEngineeringBtn = document.querySelector("#data-engineering");
  const dataScienceBtn = document.querySelector("#data-science");
  let gridContainer = document.querySelector(".grid-container");
  
  // Create arrays for all the projects 
  let dataAnalyticsProjects = [];
  let dataEngineeringProjects = [];
  let dataScienceProjects = [];
  let allProjects = [];

  // Create a function that creates the project
  function createProject(
    imgSrc,
    projectAddress,
    textNodeForHeader,
    textNodeForParagraph
  ) {

    // Creating all the elements
    const project = document.createElement("div");
    const innerDivForImg = document.createElement("div");
    const innerDivForText = document.createElement("div");
    const imgElement = document.createElement("img");
    const aElement = document.createElement("a");
    const h5Element = document.createElement("h5");
    const pElement = document.createElement("p");

    // Creating all the text nodes
    const textNodeForH5 = document.createTextNode(textNodeForHeader);
    const textNodeForP = document.createTextNode(textNodeForParagraph);

    // Setting class names and links
    project.className = "grid-item";
    imgElement.src = imgSrc;
    aElement.href = projectAddress;

    // Placing the text nodes where they belong
    h5Element.appendChild(textNodeForH5);
    pElement.appendChild(textNodeForP);

    // Placing header in anchor tags
    aElement.appendChild(h5Element); 

    // Placing the descendant elements in their respective divs
    innerDivForImg.appendChild(imgElement);
    innerDivForText.appendChild(aElement);
    innerDivForText.appendChild(pElement);

    // Placing the inner divs in the grid-item
    project.appendChild(innerDivForImg);
    project.appendChild(innerDivForText);

    // Return project div element
    return project;
  };

  function pushAllProjectsToGridContainer() {
    for (let project of allProjects) {
      gridContainer.appendChild(project);
    }
  };

  // Create the project div elements
  // Data Analytics
  const dataAnalyticsProject1 = createProject(
    "assets/Data Analytics/alexander-shatov-k1xf2D7jWUs-unsplash.jpg",
    "https://github.com/Melodie97/Data-Analytics-Projects/tree/main/WeRateDogs%20Project",
    "Twitter User(WeRateDogs) Analytics in Python",
    "Performed Analysis on twitter user (WeRateDogs) using data gotten from different independent sources(API, URL, and csv file)."
  );

  const dataAnalyticsProject2 = createProject(
    "assets/Data Analytics/covid-19.jpg",
    "https://github.com/Melodie97/SQL-Projects/tree/main/Covid19-Analytics",
    "Covid19 SQL Analytics",
    "An Exploratory Data Analysis on a covid19 dataset using SQL."
  );

  const dataAnalyticsProject3 = createProject(
    "assets/Data Analytics/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
    "https://app.powerbi.com/groups/65220fb0-93d6-4ef4-a918-5fa8ef8bd68f/reports/404877bf-2899-43eb-b50f-37f0dbe9035f/ReportSection0fd001d5e1ed0cac943d?experience=power-bi",
    "Restaurant Analytics in PowerBI",
    "Summary Dashboard in PowerBI showing insights into a restaurant's orders and sales in a quarter."
  );

  const dataAnalyticsProject4 = createProject(
    "assets/Data Analytics/Revenue Dashboard.png",
    "https://public.tableau.com/app/profile/melodie3267/viz/FinancialSheet/Dashboard1",
    "Revenue and Margin Analytics in Tableau",
    "Summary Dashboard in Tableau showing insights into a store's sales, highlighting the store's revenue and gross margin."
  );

  const dataAnalyticsProject5 = createProject(
    "assets/Data Analytics/william-hook-9e9PD9blAto-unsplash.jpg",
    "https://github.com/Melodie97/SQL-Projects/tree/main/Mobile%20Banking%20Analytics",
    "Customer Analytics on Mobile App Feature Usage in SQL",
    "Customers were grouped into frequency buckets based on how often they used a specific feature in a mobile app. The Analytics aims to aid Targeted Ad Campaigns."
  );
  
  // Data Engineering
  const dataEngineeringProject1 = createProject(
    "assets/Data Engineering/ETL Project.png",
    "https://github.com/Melodie97/Data-Engineering-Projects/tree/main/Accounts_ETL_Project",
    "ETL Project in Python",
    "Extracted data from a csv file, Transformed the data (cleaning, removal of duplicates and some missing values), and Loaded it into a Postgres Database."
  );
  
  // Data Science
  const dataScienceProject1 = createProject(
    "assets/Data Science/BOE.jpg",
    "https://github.com/Melodie97/Machine-Learning-Projects/tree/main/Bank%20Loan%20Classification%20Project",
    "Bank Loan Classification in Python",
    "Built several ML models to determine the one that best classifies bad loans based on the available features."
  );

  const dataScienceProject2 = createProject(
    "assets/Data Science/mojahid-mottakin-f2MlXoFMy54-unsplash.jpg",
    "https://github.com/Melodie97/Natural-Language-Processing-NLP-Projects/tree/main/Nasa-Project",
    "Custom Chatbot for Nasa Webpage",
    "Built a custom Chatbot using an openAI LLM. The process involved scraping the webpage and fine tuning the model with the data."
  );
  
  // Put the elements in their respective arrays
  dataAnalyticsProjects.push(dataAnalyticsProject1);
  dataAnalyticsProjects.push(dataAnalyticsProject2);
  dataAnalyticsProjects.push(dataAnalyticsProject3);
  dataAnalyticsProjects.push(dataAnalyticsProject4);
  dataAnalyticsProjects.push(dataAnalyticsProject5);

  dataEngineeringProjects.push(dataEngineeringProject1);

  dataScienceProjects.push(dataScienceProject1);
  dataScienceProjects.push(dataScienceProject2);
  
  // Put the  project elements in the gridContainer
  for (let project of dataAnalyticsProjects) {
    allProjects.push(project);
  };

  for (let project of dataEngineeringProjects) {
    allProjects.push(project);
  };

  for (let project of dataScienceProjects) {
    allProjects.push(project);
  };
  
  pushAllProjectsToGridContainer();
  allBtn.className = "selected";

  dataAnalyticsBtn.addEventListener("click", function () {
    if (allBtn.className) {
      allBtn.className = "";
    }
    else if (dataEngineeringBtn.className) {
      dataEngineeringBtn.className = "";
    }
    else if (dataScienceBtn.className) {
      dataScienceBtn.className = "";
    }

    dataAnalyticsBtn.className = "selected";

    gridContainer.innerHTML = "";
    
    for (let project of dataAnalyticsProjects) {
      gridContainer.appendChild(project);
    };
  });

  dataEngineeringBtn.addEventListener("click", function () {
    if (allBtn.className) {
      allBtn.className = "";
    }
    else if (dataAnalyticsBtn.className) {
      dataAnalyticsBtn.className = "";
    }
    else if (dataScienceBtn.className) {
      dataScienceBtn.className = "";
    }

    dataEngineeringBtn.className = "selected";

    gridContainer.innerHTML = "";

    for (let project of dataEngineeringProjects) {
      gridContainer.appendChild(project);
    }
  });

  dataScienceBtn.addEventListener("click", function () {
    if (allBtn.className) {
      allBtn.className = "";
    }
    else if (dataAnalyticsBtn.className) {
      dataAnalyticsBtn.className = "";
    }
    else if (dataEngineeringBtn.className) {
      dataEngineeringBtn.className = "";
    }

    dataScienceBtn.className = "selected";

    gridContainer.innerHTML = "";

    for (let project of dataScienceProjects) {
      gridContainer.appendChild(project);
    }
  });

  allBtn.addEventListener("click", function () {
    if (dataAnalyticsBtn.className) {
      dataAnalyticsBtn.className = "";
    }
    else if (dataEngineeringBtn.className) {
      dataEngineeringBtn.className = "";
    }
    else if (dataScienceBtn.className) {
      dataScienceBtn.className = "";
    }

    allBtn.className = "selected";

    gridContainer.innerHTML = "";

    pushAllProjectsToGridContainer();
  });
})();