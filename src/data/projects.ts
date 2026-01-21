export interface Project {
  slug: string;
  title: string;
  section:
    | "Analytics & Decision Support"
    | "Financial Performance & Reporting"
    | "Product Development"
    | "Business Strategy & Innovation";
  category: string;
  cover: string;
  summary: string;

  sections?: {
    title: string;      // e.g. "Overview", "Background", "Key Insights"
    content: string;    // the actual text (any kind)
    images?: {
      src: string;
      caption?: string;
    }[];
  }[];

  links: {
    dashboard?: string;
    report?: string;
    github?: string;
  };
}


export const projects: Project[] = [
  // --------------------
  // Analytics & Decision Support
  // --------------------
 
{
  slug: "powerbi-advertising-performance",
  title: "Meta Advertising Performance Dashboard",
  section: "Analytics & Decision Support",
  category: "Power BI | Marketing Analytics",
  cover: "/covers/powerbi.png",
  summary:
    "Built an interactive Power BI dashboard to analyze Meta advertising performance across the full funnel—from impressions and engagement to conversions and purchases.",

  sections: [
    {
      title: "Overview",
      content:
        "This Power BI dashboard analyzes Meta advertising campaign performance using key marketing and conversion metrics, including impressions, clicks, engagements, and purchases. The goal was to understand how users move through the advertising funnel and identify where performance drops off.\n\n" +
        "Tools: Power BI\n" +
        "Data: Meta Advertisement Dataset",
      images: [
        {
          src: "/projects/powerbi-ads/ad-performance-dashboard.jpg",
        },
      ],
    },

    {
      title: "Key Questions",
      content:
        "1. How effective are the campaigns at each stage of the funnel—from impressions to purchases?\n" +
        "2. What are the overall CTR, engagement rate, conversion rate, and purchase rate?\n" +
        "3. Which age groups, genders, and countries drive the most engagement and conversions?\n" +
        "4. When do users engage the most across hourly and weekly trends?",
    },

    {
      title: "Approach",
      content:
        "• Cleaned and standardized the raw advertising dataset, including creating structured date fields (year, month, week, and hour)\n" +
        "• Built calculated measures using DAX to compute CTR, engagement rate, conversion rate, and purchase rate\n" +
        "• Designed a dynamic metric selector to allow users to switch between impressions, clicks, shares, engagements, and purchases\n" +
        "• Created interactive visuals to analyze performance by age, gender, country, ad type, and time", 
   
        images: [
        {
          src: "/projects/powerbi-ads/model-view.jpg",
        }
      ]
      },

    {
      title: "Key Insights",
      content:
        "• The campaigns generated approximately 339K impressions and 40K clicks, resulting in a very high CTR of about 11.8%, indicating strong ad creatives and targeting\n" +
        "• Engagement rate was around 13.6%, showing that users interacted actively with the ads\n" +
        "• Despite strong top-of-funnel performance, the purchase rate was only about 0.6%, revealing a significant drop-off between engagement and conversion\n" +
        "• Users aged 18–30 drove the majority of shares and engagements, with female users contributing a higher share of total interactions\n" +
        "• Hourly trends peaked in the afternoon and evening, suggesting optimal times for budget allocation", 
    },

    {
      title: "Business Takeaways",
      content:
        "The analysis shows that while the ads are highly effective at generating awareness and engagement, the purchase funnel is leaking. This suggests opportunities to optimize landing pages, retarget engaged users, and refine offers. Budget reallocation toward higher-performing ad formats and peak engagement times could further improve ROI.",
    },
  ],

  links: {
    dashboard:
      "https://1drv.ms/f/c/c4f892a68e984fb3/IgCSJXGA1m2VQrNmQVoIcf1fAbA3xva3z1rUKdQzj5NEzFg?e=dQ62xb",
  },
},

{
  slug: "marketing-analytics-plan",
  title: "Marketing Analytics Plan",
  section: "Analytics & Decision Support",
  category: "Marketing Analytics",
  cover: "/covers/marketing.png",
  summary:
    "Developed a marketing analytics plan to evaluate customer behavior and campaign effectiveness, translating insights into actionable recommendations.",

  sections: [
    {
      title: "Background and Goal",
      content:
        "We completed this plan for a local restaurant in Spokane that has been facing profit challenges. We aimed to convert online research opportunities into real business outcomes such as reservations, takeout orders, and event bookings.\n\n" +
        "Tools: Google Search Console, Google Business Profile\n" +
        "Type: Group Project",
    },

    {
      title: "Data Used",
      content:
        "We analyzed Google Search Console and Google Business Profile data to understand how customers discover the restaurant and what actions they take. In June, the website received approximately 15,000 impressions and 1,100 clicks, with most traffic coming from mobile devices.\n\n" +
        "Traffic was heavily concentrated on the homepage and menu page, suggesting that visitors primarily confirm the restaurant and review the menu. Fewer users reached high-intent pages such as contact or catering, highlighting an opportunity to better guide users toward action.",
      images: [
        {
          src: "/projects/marketing-analytics-plan/google.png",
        }
      ]
    },

    {
      title: "Actions",
      content:
        "1) Help customers find the restaurant online\n" +
        "Update menu and contact pages to clearly communicate location, offerings, and visit information so search users can find the restaurant more easily.\n\n" +
        "2) Increase activity on Google and social platforms\n" +
        "Post regular updates on Google and Instagram, share content on local platforms such as VisitSpokane, and launch a TikTok account to expand local awareness.\n\n" +
        "3) Leverage events as a growth opportunity\n" +
        "Promote small parties and events on the website to encourage group bookings and special occasions, especially during Spokane’s busy summer season.\n\n" +
        "4) Hire a student intern\n" +
        "Assign a Gonzaga University marketing intern to handle weekly tracking, content updates, and incremental improvements using a short checklist and clear performance metrics.",
    },

    {
      title: "Metrics for Success",
      content:
        "Revenue Targets:\n" +
        "• August goal: $120K total revenue (approximately $4K per day)\n" +
        "  – Based on an average ticket of $86, this requires around 46 tickets per day\n" +
        "• Fall/Winter goal: $60K–$80K in monthly revenue\n" +
        "  – Revenue below $50K signals financial stress",
    },

    {
      title: "Outcome and Value",
      content:
        "The analysis revealed that demand already existed through search and homepage visits. The primary opportunity was not increasing traffic volume, but converting existing visitors toward calls, directions, and reservations.",
    }
  ],

  links: {},
},


 {
    slug: "powerbi-vehicle-sales",
    title: "Sales & Pricing Dashboard",
    section: "Analytics & Decision Support",
    category: "Power BI",
    cover: "/covers/powerbi.png",
    summary:
      "Built a Power BI dashboard to track vehicle sales performance, key financial KPIs, and trends for executive reporting.",
    

  sections: [
  {
    title: "Overview",
    content:
      "I built this Power BI dashboard to analyze vehicle sales performance, pricing trends, and dealer distribution. The dashboard includes year-to-date metrics and comparisons across body style, color, and geography.\n\n" +
      "Tools: Power BI\n" +
      "Data: Electric Vehicle Open Dataset",
    images: [
      {
        src: "/projects/powerbi-vehicle-sales/powerbi1.png",
      },
      {
        src: "/projects/powerbi-vehicle-sales/powerbi2.png",
      }
    ]
  },

  {
    title: "Here are the questions I was interested in answering",
    content:
      "1. What are total sales, average price, and vehicles sold year to date?\n" +
      "2. How do sales trends vary by body style and color?\n" +
      "3. How are vehicle sales distributed across dealers in the United States?"
  },

  {
    title: "I took these steps to create my analysis",
    content:
      "• Standardized date fields for year, month, and day analysis\n" +
      "• Used DAX to calculate MTD and YTD metrics, price changes, and growth rates\n" +
      "• Designed interactive dashboards with consistent visual themes and filters"
  },

  {
    title: "Key Takeaways",
    content:
      "• Year-to-date total sales reached $371.2M, with average vehicle prices around $28K, showing stable pricing despite volume growth\n" +
      "• Sales vary week by week but follow an overall upward trend, with stronger performance in the second half of the year\n" +
      "• SUVs and sedans contribute the largest share of total sales, while color preferences are concentrated in black and white\n" +
      "• Higher sales volumes are clustered around major regional dealer hubs, including Austin and Janesville"
  }
],

links: {
  dashboard:
    "https://1drv.ms/u/c/c4f892a68e984fb3/IQD7BjI1N40qT6WjZRZmJq5CASGooIbNUv9hCu9RnCd3NkU?e=OAkvJH",
},
  },

 

 
  {
  slug: "ev-dashboard",
  title: "Electric Vehicle Market Analysis",
  section: "Analytics & Decision Support",
  category: "Data Visualization",
  cover: "/covers/vehicle.png",
  summary: "Interactive dashboard analyzing EV pricing and sales.",

  sections: [
    
  {
    title: "Overview",
    content:
      "I built this dashboard to analyze the electric vehicle market across manufacturers, focusing on pricing trends, sales performance, and charging characteristics.\n\n" +
      "Tools: Python, Tableau, Google Colab\n" +
      "Data: Kaggle Electric Vehicle Dataset",
    images: [
      {
        src: "/projects/ev-dashboard/ev_1.png",
      },
      {
        src: "/projects/ev-dashboard/ev_2.png",
      }
    ],
  },

  {
    title: "Here are the questions I was interested in answering:",
    content:
      "1. How many EV manufacturers and models are in the market?\n" +
      "2. How has the average EV price changed over time?\n" +
      "3. How do prices vary by manufacturer and year?\n" +
      "4. Which factors are associated with higher EV sales?\n" +
      "5. How do charging time and battery range influence adoption?",
  },

  {
    title: "I took these steps to create my analysis:",
    content:
      "• Cleaned and prepared EV data in Python using Google Colab\n" +
      "• Handled missing values and standardized key attributes\n" +
      "• Created calculated fields and aggregated metrics in Tableau\n" +
      "• Designed two interactive dashboards with consistent visual themes",
  },

  {
    title: "Key Takeaways",
    content:
      "1. The average EV price across years was approximately $75,386, dropping significantly to around $62,000 in 2024 before returning closer to the average in 2025\n" +
      "2. Most EVs have charging times between 3 and 6 hours, followed by around 9 hours\n" +
      "3. Rivian recorded the highest overall sales volume among manufacturers\n" +
      "4. Tesla and Porsche show more concentrated pricing ranges, while Lucid, BMW, and Mercedes Benz exhibit wider distributions",
  }
],

links: {
  dashboard: "https://public.tableau.com/app/profile/quency.ye1021/viz/ElectricVehicleMarketAnalysis_17664609244120/Dashboard5"
},
  },


{
  slug: "loan-default-ml",
  title: "Loan Default Prediction",
  section: "Analytics & Decision Support",
  category: "Supervised Machine Learning",
  cover: "/covers/lending.png",
  summary:
    "Developed machine learning models to predict loan default risk and evaluate model performance for risk assessment.",

  sections: [
    {
      title: "Overview",
      content:
        "This project analyzes borrower and loan characteristics from the Lending Club peer-to-peer lending platform to predict loan default risk. The goal was to understand key default features through exploratory analysis and build predictive models to estimate default likelihood.\n\n" +
        "Tools: Python, Google Colab\n" +
        "Data: Lending Club Loan Dataset\n" +
        "Type: Group Project",
      
    },

    {
      title: "Key Questions",
      content:
        "1. Which borrower and loan factors are most associated with default?\n" +
        "2. How do interest rate, loan term, FICO score, and DTI affect default risk?\n" +
        "3. Which model best balances accuracy and default detection?"
    },

    {
  title: "Approach",
  content:
    "• Cleaned and prepared LendingClub data using Python by dropping irrelevant columns, standardizing data types, and filtering records to ensure data quality and consistency.\n" +
    "• Performed exploratory data analysis (EDA) to assess feature distributions and correlations.\n" +
    "• Applied feature preprocessing using scikit-learn Pipelines, including imputation, scaling for numerical features, and one-hot encoding for categorical variables.\n" +
    "• Used EDA-informed filtering and model-based techniques to select a final feature set for training.\n" +
    "• Trained Logistic Regression, SVM, Decision Tree, and Random Forest models and evaluated performance using Accuracy, Precision, and F1-score under class imbalance conditions.",
  
},


    {
      title: "Key Insights",
      content:
        "• Accuracy was similar across models at approximately 0.81, making F1 score critical for evaluation\n" +
        "• SVM and Logistic Regression showed very low F1 scores, indicating poor detection of default cases\n" +
        "• Random Forest performed best overall with the highest F1 score and balanced precision\n" +
        "• Higher interest rates, lower FICO scores, and high revolving credit utilization were strongly associated with default\n" +
        "• Borrowers with mid-range DTI (20–40%) showed higher default risk than very high DTI borrowers, revealing non-linear effects\n" +
        "• 60-month loans consistently carried higher interest rates and higher default risk compared to 36-month loans",
    images: [
        {
          src: "/projects/loan-default-ml/model.png",
        }
      ]
    }
  ],

  links: {
  report: "https://www.canva.com/design/DAG6UInwOoE/ymHDFTuXOnOfatSkU11aqg/edit",
  github: "https://github.com/xiaoqye/BA810_Supervised-machine-learning/tree/main",
},

},

 {
  slug: "sql-analysis",
  title: "Bluebike Usage Analysis",
  section: "Analytics & Decision Support",
  category: "BigQuery & Looker",
  cover: "/covers/sql.png",
  summary:
    "Used SQL to analyze Bluebikes trip data, generating insights on usage patterns and operational performance.",

  sections: [
    {
      title: "Overview",
      content:
        "Built a data-driven analysis to help Boston’s Bluebikes system improve station placement, bike availability, and rebalancing decisions by analyzing ridership patterns across time, location, user type, and weather conditions.\n\n" +
        "Tools: BigQuery, Google Cloud, Looker\n" +
        "Data: Bluebikes trip data, station data, NOAA weather data\n" +
        "Type: Group Project",
    },

    {
      title: "Key Questions",
      content:
        "1. How does ridership vary by time, location, and user type?\n" +
        "2. Which stations and corridors experience the highest demand?\n" +
        "3. How do weather and temperature affect usage?\n" +
        "4. How do member and casual rider behaviors differ?",
    },

    {
      title: "Approach",
      content:
        "• Cleaned and integrated trip, station, and weather data in BigQuery\n" +
        "• Analyzed ridership trends by time, location, bike type, and user type\n" +
        "• Built Looker dashboards to visualize demand patterns and high-throughput stations\n" +
        "• Identified operational insights to support rebalancing and capacity planning",
      images: [
        {
          src: "/projects/sql-analysis/structure.png",
        }
      ]
    },

    {
      title: "Key Insights",
      content:
        "• Demand is highly concentrated along the MIT–Harvard corridor and major transit hubs\n" +
        "• Nearly 75 percent of trips last under 20 minutes, indicating commuter-driven usage\n" +
        "• Members generate about three times more rides than casual users, while casual riders complete more round trips\n" +
        "• High-demand station pairs cluster around Cambridge and MIT, creating predictable rebalancing corridors",
      images: [
        {
          src: "/projects/sql-analysis/bluebike1.png",
        },
        {
          src: "/projects/sql-analysis/bluebike2.png",
        }
      ]
    }
  ],

  links: {
    github: "https://github.com/xiaoqye/BA775_Toolbox_Bluebikes-Analysis",
  },
},

  
 {
  slug: "la-crime-unemployment",
  title: "LA Crime & Unemployment Analysis",
  section: "Analytics & Decision Support",
  category: "Python",
  cover: "/covers/crime.png",
  summary:
    "Analyzed the relationship between unemployment and crime trends in Los Angeles using Python to assess economic and social impact.",

  sections: [
    {
      title: "Overview",
      content:
        "Used Python to analyze crime and labor market data in Los Angeles, exploring when and where crimes occur, how patterns differ by victim demographics, and whether unemployment trends relate to crime levels.\n\n" +
        "Tools: Python, Google Colab\n" +
        "Data: LAPD crime data, Los Angeles County employment and unemployment data\n" +
        "Type: Group Project",
    },

    {
      title: "Key Questions",
      content:
        "• How do crime patterns vary by time of day, location, and year?\n" +
        "• Which crime types show the strongest growth or decline?\n" +
        "• How does crime distribution differ across victim demographics?\n" +
        "• Do unemployment rates show seasonality, and how do they relate to crime trends?",
    },

    {
      title: "Approach",
      content:
        "• Cleaned and standardized large crime and labor datasets in Python\n" +
        "• Removed duplicates, handled missing values, and aligned time formats\n" +
        "• Conducted exploratory data analysis across time, geography, and demographics\n" +
        "• Integrated crime and labor data at a year-month level for comparison",
      images: [
        {
          src: "/projects/la-crime-unemployment/cleaning.png",
        }
      ]
    },

    {
      title: "Key Takeaways",
      content:
        "• Crime peaks around midday and evening hours, with Central and Downtown Los Angeles consistently showing the highest density\n" +
        "• Vehicle theft rose sharply in 2022 before easing in 2023, while identity theft increased significantly during the same period\n" +
        "• Men were more often victims of violent and street crimes, while women were disproportionately affected by domestic violence and identity-related offenses\n" +
        "• Unemployment showed clear seasonal patterns but limited overall correlation with total crime counts",
    }
  ],

  links: {
    github: "https://github.com/xiaoqye/BA780_A06_Crime-Unemployment-Analysis",
  },
},



  // --------------------
  // Financial Analysis & Investment
  // --------------------
  {
  slug: "financial-analysis-pepsi-coke",
  title: "PepsiCo vs Coca-Cola: Financial Performance Analysis",
  section: "Financial Performance & Reporting",
  category: "Financial Analysis",
  cover: "/covers/fr.png",
  summary:
    "Conducted comparative financial analysis of PepsiCo and Coca-Cola, focusing on profitability, liquidity, solvency, and value creation.",

  sections: [
  {
    title: "Background",
    content:
      "This project compares Coca-Cola and PepsiCo to understand their financial performance, risk profile, and long-term investment potential. Coca-Cola is more focused on beverages, while PepsiCo is more diversified across beverages and food products.\n\n" +
      "Data source: Form 10-K filings\n" +
      "Type: Group Project",
  },

  {
    title: "Objective",
    content:
      "Evaluate which company is better positioned for long-term value creation by analyzing profitability, liquidity, solvency, asset efficiency, and cash flows.",
  },

  {
    title: "What We Analyzed",
    content:
      "• Profitability metrics including gross margin, operating margin, and net margin",
    images: [{ src: "/projects/financial-analysis-pepsi-coke/pepsi1.png" }],
  },

  {
    title: "",
    content: "• Value creation using ROE and DuPont analysis",
    images: [{ src: "/projects/financial-analysis-pepsi-coke/pepsi2.png" }],
  },

  {
    title: "",
    content:
      "• Liquidity and solvency through current ratio and debt-to-equity",
    images: [{ src: "/projects/financial-analysis-pepsi-coke/pepsi3.png" }],
  },

  {
    title: "",
    content: "• Asset productivity and earnings quality",
    images: [{ src: "/projects/financial-analysis-pepsi-coke/pepsi4.png" }],
  },

  {
    title: "",
    content:
      "• Cash flow patterns across operating, investing, and financing activities",
    images: [{ src: "/projects/financial-analysis-pepsi-coke/pepsi5.png" }],
  },

    {
      title: "Key Takeaways",
      content:
        "• Profitability: Coca-Cola consistently generates higher margins, while PepsiCo shows improving margins.\n" +
        "• Value Creation: PepsiCo achieved higher ROE driven by asset turnover and leverage.\n" +
        "• Liquidity and Solvency: Both firms carry high leverage, with PepsiCo showing tighter liquidity.\n" +
        "• Cash Flows: Strong operating cash flows support reinvestment and shareholder returns.",
    },

    {
      title: "Conclusion",
      content:
        "From a financial accounting perspective, PepsiCo appears better positioned for long-term investment due to stable profitability, diversified revenue streams, and improved debt management.",
    },
  ],

  links: {
    report:
      "https://docs.google.com/presentation/d/1iXMofNZOu3AUj5AB1t2vztJJ8OCk6JCH63MsgCLz1C4/edit?usp=sharing",
  },
},


 {
  slug: "real-estate-investment-analysis-1",
  title: "Real Estate Investment Analysis",
  section: "Financial Performance & Reporting",
  category: "Real Estate Investment",
  cover: "/covers/real-estate.png",
  summary:
    "Selecting a profitable rental property in Spokane and conducting financial analysis of a real estate investment, evaluating cash flows, returns, and risk factors to support investment decision-making.",

  sections: [
    {
      title: "Overview",
      content:
        "This case evaluates the purchase of properties to be operated as long-term rental investments. Our goal is to identify which option offers the best balance between return and risk. Rather than focusing only on appreciation or returns, this analysis examines how each property would perform as a long-term rental investment.\n\n" +
        "Data source: Rent and sales data from Zillow\n" +
        "Type: Group Project",
      images: [
        {
          src: "/projects/real-estate-investment-analysis-1/property.png",
        },
      ],
    },

    {
      title: "What We Analyzed",
      content:
        "We used a financial model to analyze purchase prices, rental income assumptions, operating expenses, financing terms, and expected sale values using a structured Excel financial model. All properties were evaluated under the same assumptions to ensure a fair comparison.\n\n" +
        "We also compared three properties across two dimensions: return potential and risk protection.",
      images: [
        {
          src: "/projects/real-estate-investment-analysis-1/compare.png",
        },
      ],
    },

    {
      title: "Recommendations",
      content:
        "Property A showed stronger resale value but required very high occupancy to remain cash-flow positive. Property C generated steadier cash flows but offered less upside. Property B offers good returns while being more resilient to income changes. Overall, we selected Property B based on a balanced combination of return and risk. It offers a projected IRR of 13.72%, a breakeven occupancy rate of 94.97%, and the strongest debt coverage ratio (1.0) among the options.",
    },
  ],

  links: {
    report:
      "https://docs.google.com/spreadsheets/d/1aPbyGr5Cr_2di_l-8oyyn4Xp_J_m4aJQ/edit?usp=sharing&ouid=107468771705989937776&rtpof=true&sd=true",
  },
},


// --------------------
  // Product Development
  // --------------------
  {
  slug: "portfolio-website",
  title: "Personal Portfolio Website",
  section: "Product Development",
  category: "Product Design & Front-End Development",
  cover: "/covers/portfolio.png",
  summary:
    "Designed and built a personal portfolio website to organize projects clearly, improve storytelling, and present work in a product format.",

  sections: [
    {
      title: "Why",
      content:
        "I treated this portfolio website as a product, not just a place to list projects. My goal was to organize my work clearly and make it easy for you to understand what I’ve done and how I think.",
    },

    {
      title: "How",
      content:
        "I designed the structure to start with a personal photo and quick links to my social media, GitHub, and Tableau, followed by project highlights and detailed project pages.\n\n" +
        "I wanted a clean and flexible interface, so I chose Next.js and TypeScript, which give me more control over structure and storytelling compared to standard portfolio templates. Version control and deployment are managed through Git, GitHub, and Vercel.",
    },

    {
      title: "Challenge",
      content:
        "The biggest challenge was designing the project pages. Each project has a different structure, and I needed to balance clear content presentation with maintainable and reusable code.",
    },

    {
      title: "What I Gained",
      content:
        "• Organizing and summarizing my work helped me clearly explain my projects, which has also been valuable for job applications and interviews\n" +
        "• Becoming familiar with how products work in real-world settings, laying a foundation for collaborating with engineers or working on platforms in the future",
    },

    {
      title: "Next Steps",
      content:
        "I plan to add a dedicated section for additional Python and SQL practice and exercises.",
    },
  ],

  links: {
    report: "https://quencyye.vercel.app",
  },
},


{
  slug: "smart-city-logistics",
  title: "Smart City Logistics Platform",
  section: "Product Development",
  category: "Big Data Platform Design",
  cover: "/covers/logistics.png",
  summary:
    "I designed this data-driven logistics platform concept integrating multi-source data to identify bottlenecks, compare scenarios, and support city-wide operational decisions.",

  sections: [
    {
      title: "Background",
      content:
        "Most people have experienced this when ordering online. After you pay, the system tells you when the order is expected to arrive, but deliveries can still be delayed due to unexpected events such as severe weather. Today, most logistics platforms focus on tracking individual deliveries, but they are limited when city-wide disruptions occur.\n\n" +
        "To address this gap, I designed a city-scale logistics platform that goes beyond tracking by helping operators respond to emergencies and coordinate actions across the city. In this approach, logistics is treated as a core smart city function, reflecting how transportation, infrastructure, commerce, and daily life are tightly interconnected.", 
      images: [
        {
          src: "/projects/smart-city-logistics/1.png",
        },
        {
          src: "/projects/smart-city-logistics/2.png",
        },
      ],
    },

    {
      title: "My Thought Process",
      content:
        "As logistics volumes grow, there are opportunities for a centralized platform that enables real-time monitoring, early issue detection, and rapid response.\n\n" +
        "This architecture proposes a layered platform that integrates diverse data sources into a unified system, supporting operational applications across dashboards, large screens, and mobile devices.\n\n" +
        "This scenario demonstrates how the platform detects widespread delays, prioritizes critical deliveries, and enables coordinated responses during large-scale disruptions.",
      images: [
        {
          src: "/projects/smart-city-logistics/3.png",
        },
        {
          src: "/projects/smart-city-logistics/4.png",
        },
      ],
    },
  ],

  links: {
    report:
      "https://1drv.ms/p/c/c4f892a68e984fb3/IQC4Xu6uizrdQ4Wy4xJR_V9ZAccNxauU2pY1wNWpzL9AEeU?e=tWXDwJ",
  },
},




  // --------------------
  // Business Strategy & Innovation
  // --------------------
  
 {
  slug: "warby-parker-strategy",
  title: "Retail Strategy & Business Model Analysis",
  section: "Business Strategy & Innovation",
  category: "Warby Parker",
  cover: "/covers/warby.png",
  summary:
    "Conducted a strategic analysis of Warby Parker’s business model, competitive positioning, and growth opportunities with actionable recommendations.",

  sections: [
    {
      title: "Background",
      content:
        "This project is a strategic management paper that analyzes Warby Parker as a case study. Warby Parker operates in the eyewear industry by introducing a direct-to-consumer (DTC) model that moved away from traditional industry structures, lowered prices, and still maintained a strong focus on design and brand identity.",
    },

    {
      title: "SWOT Analysis",
      content:
        "Warby Parker’s strengths include efficient production and logistics, a strong brand with intellectual property, and a differentiated customer experience through programs such as Home Try-On and Virtual Try-On. However, the company faces weaknesses including limited investment in advanced eyewear technology, challenges in scaling customer service as the business grows, and persistent operating losses driven by high SG&A expenses.",
      images: [
        {
          src: "/projects/warby-parker-strategy/SWOT.png",
        },
      ],
    },

    {
      title: "Distinctive Competencies Analysis",
      content:
        "Warby Parker is known for its innovative sales strategies, such as the virtual try-on and home try-on programs, which distinguish it from other eyewear brands. These approaches enhance convenience and personalization for customers. While other eyewear brands often rely on traditional advertising or media-based promotion, Warby Parker has invested heavily in product design and new materials.",
      images: [
        {
          src: "/projects/warby-parker-strategy/distinctive.png",
        },
      ],
    },

    {
      title: "Porter Five Forces Model",
      content:
        "This Porter Five Forces analysis shows that Warby Parker operates in an environment with high rivalry among established players, strong buyer power due to many alternatives, high barriers to entry from brand loyalty and licensing, and a relatively low threat from true substitutes.",
      images: [
        {
          src: "/projects/warby-parker-strategy/porter5.png",
        },
      ],
    },
  ],

  links: {
    report:
      "https://1drv.ms/b/c/c4f892a68e984fb3/IQBPZqTo_bCBS6v-47IejssNAUViBrjS6ct0XR7rwzKtOGw?e=TTlUnw",
  },
},

 {
  slug: "cooperative-relationships-strategy",
  title: "Cooperative Relationships Strategy",
  section: "Business Strategy & Innovation",
  category: "Strategic Partnerships",
  cover: "/covers/strategy.png",
  summary:
    "Analyzed cooperative relationships between firms, focusing on strategic partnerships, value creation, and competitive advantage within inter-organizational ecosystems.",

  sections: [
    {
      title: "Editing",
      content: "",
      images: [],
    },
  ],

  links: {},
},

]
