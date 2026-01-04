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
      "1. Cleaned and prepared EV data in Python using Google Colab\n" +
      "2. Handled missing values and standardized key attributes\n" +
      "3. Created calculated fields and aggregated metrics in Tableau\n" +
      "4. Designed two interactive dashboards with consistent visual themes",
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
  dashboard: "https://public.tableau.com/..."
},
  },


{
  slug: "loan-default-ml",
  title: "Loan Default Prediction",
  section: "Analytics & Decision Support",
  category: "Machine Learning",
  cover: "/covers/lending.png",
  summary:
    "Developed machine learning models to predict loan default risk and evaluate model performance for risk assessment.",

  sections: [
    {
      title: "Overview",
      content:
        "This project analyzes borrower and loan characteristics from the Lending Club peer-to-peer lending platform to predict loan default risk. The goal was to understand key default drivers through exploratory analysis and build predictive models to estimate default likelihood.\n\n" +
        "Tools: Python, Google Colab\n" +
        "Data: Lending Club Loan Dataset\n" +
        "Type: Group Project",
      images: [
        {
          src: "/projects/loan-default-ml/model.png",
        }
      ]
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
        "• Cleaned and explored Lending Club data using Python\n" +
        "• Selected 16 features based on exploratory data analysis\n" +
        "• Trained Logistic Regression, SVM, Decision Tree, and Random Forest models\n" +
        "• Compared models using Accuracy, Precision, and F1 score",
      images: [
        {
          src: "/projects/loan-default-ml/eda.png",
        }
      ]
    },

    {
      title: "Key Insights",
      content:
        "• Accuracy was similar across models at approximately 0.81, making F1 score critical for evaluation\n" +
        "• SVM and Logistic Regression showed very low F1 scores, indicating poor detection of default cases\n" +
        "• Random Forest performed best overall with the highest F1 score and balanced precision\n" +
        "• Higher interest rates, lower FICO scores, and high revolving credit utilization were strongly associated with default\n" +
        "• Borrowers with mid-range DTI (20–40%) showed higher default risk than very high DTI borrowers, revealing non-linear effects\n" +
        "• 60-month loans consistently carried higher interest rates and higher default risk compared to 36-month loans"
    }
  ],

  links: {
    report:
      "https://www.canva.com/design/DAG6UInwOoE/ymHDFTuXOnOfatSkU11aqg/edit?utm_content=DAG6UInwOoE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
},

  {
    slug: "sql-analysis",
    title: "Bluebike Usage Analysis",
    section: "Analytics & Decision Support",
    category: "SQL & Looker",
    cover: "/covers/sql.png",
    summary:
      "Used SQL to analyze Bluebikes trip data, generating insights on usage patterns and operational performance.",
     
  sections: [
     {
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

      links: {
      github: "https://github.com/xiaoqye/BA775_Toolbox_Bluebikes-Analysis",
    },
  },

  {
    slug: "powerbi-vehicle-sales",
    title: "Automotive Sales & Pricing Dashboard",
    section: "Analytics & Decision Support",
    category: "Power BI",
    cover: "/covers/powerbi.png",
    summary:
      "Built a Power BI dashboard to track vehicle sales performance, key financial KPIs, and trends for executive reporting.",
    
  sections: [
     {
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

      links: {},
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
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

      links: {
      github: "https://github.com/xiaoqye/BA780_A06_Crime-Unemployment-Analysis",
    },
  },
{
  slug: "marketing-analytics-plan",
  title: "Marketing Analytics Plan",
  section: "Analytics & Decision Support",
  category: "Marketing Analytics",
  cover: "/covers/marketing.png",
  summary:
    "Developed a data-driven marketing analytics plan to evaluate customer behavior, channel performance, and campaign effectiveness, translating insights into actionable recommendations.",
  
   
  sections: [
     {
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

    links: {},
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
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
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
    "Conducted financial analysis of a real estate investment, evaluating cash flows, returns, and risk factors to support investment decision-making.",
   
  sections: [
     {
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

    links: {},
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
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

      links: {},
  },

{
    slug: "smart-city-logistics",
    title: "Smart City Logistics Platform",
    section: "Product Development",
    category: "Big Data Platform Design",
    cover: "/covers/logistics.png",
    summary:
      "Designed a data-driven logistics platform concept integrating multi-source data to identify bottlenecks, compare scenarios, and support city-wide operational decisions.",
  
  sections: [
     {
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],
 
      links: {},
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
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

      links: {},
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
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

    links: {},
},
{
    slug: "digital-innovation-asset-renting",
    title: "Digital Innovation for Asset Renting",
    section: "Business Strategy & Innovation",
    category: "Digital Innovation / Strategy",
    cover: "/covers/digital.png",
    summary:
      "Proposed platform-based digital solutions to improve asset renting efficiency by enhancing utilization, automation, and user experience.",
  
  sections: [
     {
      title: "bacground",
      content:
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: ""
        },
        {
          src: "/screenshots/ev-pricing.png",
          caption: "EV pricing and range comparison by manufacturer"
        }
       ]
      },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

      links: {
      report:
        "https://www.canva.com/design/DAGUcQlHdzM/TIv38YpSxTqmCz8-VAutrQ/edit?utm_content=DAGUcQlHdzM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  },
];
