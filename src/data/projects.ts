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
        "Built an interactive Tableau dashboard to analyze EV pricing, sales performance, and charging behavior.",
      images: [
        {
          src: "/screenshots/ev-overview.png",
          caption: "Overview of the EV market dashboard"
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
    },
    {
      title: "Key Takeaways",
      content:
        "• EV prices dropped in 2024\n• Charging time impacts adoption\n• Rivian leads sales volume"
    }
  ],

  links: {
    dashboard: "https://public.tableau.com/..."
  }
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
        title: " ",
        content: " "
      }
    ],

    links: {
      report: "https://www.canva.com/design/DAG6UInwOoE/ymHDFTuXOnOfatSkU11aqg/edit?utm_content=DAG6UInwOoE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
