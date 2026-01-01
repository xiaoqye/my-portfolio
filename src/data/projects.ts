export interface Project {
  slug: string;
  title: string;
  section:
    | "Analytics & Decision Support"
    | "Financial Performance & Reporting"
    | "Business Strategy & Innovation";
  category: string;
  cover: string;
  summary: string;
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
    title: "EV Market Dashboard",
    section: "Analytics & Decision Support",
    category: "Data Visualization",
    cover: "/covers/vehicle.png",
    summary:
      "Built an interactive dashboard analyzing EV pricing, sales, and charging behavior to support market and product decisions.",
    links: {
      dashboard:
        "https://public.tableau.com/views/ElectricVehicleMarketAnalysis_17664609244120/Dashboard4?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
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
    links: {
      report:
        "https://www.canva.com/design/DAG6UInwOoE/ymHDFTuXOnOfatSkU11aqg/edit?utm_content=DAG6UInwOoE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  },
  {
    slug: "sql-analysis",
    title: "SQL Bluebike Analysis",
    section: "Analytics & Decision Support",
    category: "SQL",
    cover: "/covers/sql.png",
    summary:
      "Used SQL to analyze Bluebikes trip data, generating insights on usage patterns and operational performance.",
    links: {
      github: "https://github.com/xiaoqye/BA775_Toolbox_Bluebikes-Analysis",
    },
  },
  {
    slug: "la-crime-unemployment",
    title: "LA Crime & Unemployment Analysis",
    section: "Analytics & Decision Support",
    category: "Python / Analytics",
    cover: "/covers/crime.png",
    summary:
      "Analyzed the relationship between unemployment and crime trends in Los Angeles using Python to assess economic and social impact.",
    links: {
      github: "https://github.com/xiaoqye/BA780_A06_Crime-Unemployment-Analysis",
    },
  },
  {
    slug: "smart-city-logistics",
    title: "Smart City Logistics Platform",
    section: "Analytics & Decision Support",
    category: "Logistics / Decision Analytics",
    cover: "/covers/logistics.png",
    summary:
      "Designed a data-driven logistics platform concept integrating multi-source data to identify bottlenecks, compare scenarios, and support city-wide operational decisions.",
    links: {},
  },

  // --------------------
  // Financial Performance & Reporting
  // --------------------
  {
    slug: "financial-analysis-pepsi-coke",
    title: "Financial Analysis: PepsiCo vs Coca-Cola",
    section: "Financial Performance & Reporting",
    category: "Financial Analysis",
    cover: "/covers/fr.png",
    summary:
      "Conducted comparative financial analysis of PepsiCo and Coca-Cola, focusing on profitability, liquidity, solvency, and value creation.",
    links: {
      report:
        "https://docs.google.com/presentation/d/1iXMofNZOu3AUj5AB1t2vztJJ8OCk6JCH63MsgCLz1C4/edit?usp=sharing",
    },
  },
  {
    slug: "powerbi-vehicle-sales",
    title: "Vehicle Sales Dashboard (Power BI)",
    section: "Financial Performance & Reporting",
    category: "Power BI / Reporting",
    cover: "/covers/powerbi.png",
    summary:
      "Built a Power BI dashboard to track vehicle sales performance, key financial KPIs, and trends for executive reporting.",
    links: {},
  },

  // --------------------
  // Business Strategy & Innovation
  // --------------------
  {
    slug: "digital-innovation-asset-renting",
    title: "Digital Innovation for Asset Renting",
    section: "Business Strategy & Innovation",
    category: "Digital Innovation / Strategy",
    cover: "/covers/digital.png",
    summary:
      "Proposed platform-based digital solutions to improve asset renting efficiency by enhancing utilization, automation, and user experience.",
    links: {
      report:
        "https://www.canva.com/design/DAGUcQlHdzM/TIv38YpSxTqmCz8-VAutrQ/edit?utm_content=DAGUcQlHdzM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  },
  {
    slug: "warby-parker-strategy",
    title: "Warby Parker Strategic Case",
    section: "Business Strategy & Innovation",
    category: "Strategy Case Study",
    cover: "/covers/warby.png",
    summary:
      "Conducted a strategic analysis of Warby Parker’s business model, competitive positioning, and growth opportunities with actionable recommendations.",
    links: {},
  },
];
