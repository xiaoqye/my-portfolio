export interface Project {
  slug: string;
  title: string;
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
  {
    slug: "ev-dashboard",
    title: "EV Market Dashboard",
    category: "Data Visualization",
    cover: "/covers/vehicle.png",
    summary: "Dashboard analyzing EV pricing, sales, and charging behavior.",
    links: {
      dashboard:
        "https://public.tableau.com/views/ElectricVehicleMarketAnalysis_17664609244120/Dashboard4?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
  },
  {
    slug: "loan-default-ml",
    title: "Loan Default Prediction",
    category: "Machine Learning",
    cover: "/covers/lending.png",
    summary: "Built ML models to predict loan default risk.",
    links: {
      report:
        "https://www.canva.com/design/DAG6UInwOoE/ymHDFTuXOnOfatSkU11aqg/edit?utm_content=DAG6UInwOoE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  },
  {
    slug: "sql-analysis",
    title: "SQL Bluebike Analysis",
    category: "SQL",
    cover: "/covers/sql.png",
    summary: "SQL queries for share bikes reporting and insights.",
    links: {
      github: "https://github.com/xiaoqye/BA775_Toolbox_Bluebikes-Analysis",
    },
  },
  {
    slug: "la-crime-unemployment",
    title: "LA Crime & Unemployment Analysis",
    category: "Python / Analytics",
    cover: "/covers/crime.png",
    summary:
      "Analyzed the relationship between unemployment and crime trends in Los Angeles using Python to assess economic impact on public safety.",
    links: {
      github: "https://github.com/xiaoqye/BA780_A06_Crime-Unemployment-Analysis",
    },
  },
  {
    slug: "financial-analysis-pepsi-coke",
    title: "Financial Analysis: PepsiCo vs Coca-Cola",
    category: "Financial Analysis (MBA)",
    cover: "/covers/fr.png",
    summary:
      "Conducted comparative financial analysis of PepsiCo and Coca-Cola, focusing on profitability, liquidity, solvency, and value creation.",
    links: {
      report:
        "https://docs.google.com/presentation/d/1iXMofNZOu3AUj5AB1t2vztJJ8OCk6JCH63MsgCLz1C4/edit?usp=sharing",
    },
  },
  {
    slug: "digital-innovation-asset-renting",
    title: "Digital Innovation for Asset Renting",
    category: "Digital Innovation / Strategy",
    cover: "/covers/digital.png",
    summary:
      "Proposed digital solutions to improve asset renting efficiency by leveraging platforms, data, and automation to enhance utilization and user experience.",
    links: {
      report:
        "https://www.canva.com/design/DAGUcQlHdzM/TIv38YpSxTqmCz8-VAutrQ/edit?utm_content=DAGUcQlHdzM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  },
];