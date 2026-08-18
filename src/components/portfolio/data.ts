export type Category = "Backend" | "Cloud/DevOps" | "IT Support" | "Automation";

export const CATEGORIES: Category[] = ["Backend", "Cloud/DevOps", "IT Support", "Automation"];

export const PROFILE = {
  name: "Kester Madanga",
  role: "Software Engineer & IT Support Specialist",
  email: "madangakester@gmail.com",
  phone: "+254 705 928 104",
  location: "Nairobi, Kenya",
  timezone: "EAT / UTC+3",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/kester-madanga-87225338a",
};

export type Role = {
  title: string;
  company: string;
  place: string;
  period: string;
  categories: Category[];
  points: string[];
  badges: string[];
  commit: string;
};

export const ROLES: Role[] = [
  {
    title: "Junior Software Engineer",
    company: "JP Innovate",
    place: "London, UK — Remote",
    period: "Jun 2025 – Jan 2026",
    categories: ["Backend", "Cloud/DevOps", "Automation"],
    commit: "a91f4c2",
    points: [
      "Progressed from Apprentice to Junior Software Engineer.",
      "Engineered application reliability and performance features across .NET services.",
      "Authored unit and API test suites to harden critical business flows.",
      "Maintained monitoring and observability dashboards for production health.",
      "Managed CI/CD build pipelines using Azure DevOps.",
      "Used AI-assisted tooling for debugging and documentation in Agile Scrum teams.",
    ],
    badges: [
      "C#",
      ".NET 10",
      "SQL Server",
      "PostgreSQL",
      "Azure DevOps",
      "Azure Service Bus",
      "Grafana",
      "xUnit",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
  {
    title: "ICT Attachment & Lab Support Assistant",
    company: "Harvard Institute of Technical Studies",
    place: "Thika, Kenya",
    period: "Jan 2026 – Apr 2026",
    categories: ["IT Support"],
    commit: "5c07be1",
    points: [
      "Instructed units in DBMS, OOP, Operating Systems and software packages.",
      "Provisioned, secured and maintained lab network infrastructure and servers.",
      "Diagnosed and repaired computer hardware across teaching labs.",
      "Managed asset inventory and day-to-day system administration.",
    ],
    badges: ["Windows Admin", "Networking", "Hardware Diagnostics", "DBMS", "System Maintenance"],
  },
  {
    title: "Financial Agent",
    company: "Finn Kenya",
    place: "Thika, Kenya",
    period: "Apr 2026 – Jul 2026",
    categories: ["Automation", "IT Support"],
    commit: "1d8ea30",
    points: [
      "Drove client acquisition through structured negotiation outreach.",
      "Delivered financial advisory tailored to client risk profiles.",
      "Managed CRM application records and data hygiene.",
    ],
    badges: ["CRM", "Financial Advisory", "Data Analytics", "Client Acquisition"],
  },
];

export type StackGroup = {
  title: string;
  category: Category;
  cmd: string;
  items: string[];
};

export const STACK: StackGroup[] = [
  {
    title: "Backend & Engineering",
    category: "Backend",
    cmd: "dotnet --list-sdks",
    items: [
      "C#",
      ".NET 10",
      "RESTful APIs",
      "Asynchronous Programming",
      "DDD",
      "TDD",
      "HTML5/CSS3",
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    category: "Cloud/DevOps",
    cmd: "az resource list",
    items: [
      "Azure DevOps",
      "Azure Service Bus",
      "Azure CosmosDB",
      "SQL Server",
      "PostgreSQL",
      "Redis",
      "CI/CD",
    ],
  },
  {
    title: "IT & Systems Administration",
    category: "IT Support",
    cmd: "systeminfo | more",
    items: [
      "Windows Administration",
      "Computer Networking",
      "Hardware Troubleshooting",
      "Software Deployment",
    ],
  },
  {
    title: "AI & Data Operations",
    category: "Automation",
    cmd: "run automation.pipeline",
    items: [
      "AI-Assisted Tools",
      "Prompt Engineering",
      "Workflow Automation",
      "Advanced Excel / Data Analysis",
    ],
  },
];

export const NAV_LINKS = [
  { label: "~/about", href: "#about" },
  { label: "~/experience", href: "#experience" },
  { label: "~/stack", href: "#stack" },
  { label: "~/education", href: "#education" },
  { label: "~/contact", href: "#contact" },
];

export const CODE_SNIPPET = `// Program.cs — resilient .NET 10 minimal API
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHealthChecks()
    .AddSqlServer(builder.Configuration["Sql:Conn"]!)
    .AddAzureServiceBusQueue("orders");

builder.Services.AddResiliencePipeline("retry", pipeline =>
    pipeline.AddRetry(new RetryStrategyOptions
    {
        MaxRetryAttempts = 3,
        BackoffType = DelayBackoffType.Exponential,
        Delay = TimeSpan.FromMilliseconds(250)
    }));

var app = builder.Build();
app.MapHealthChecks("/health");
app.Run();`;

export const PIPELINE_SNIPPET = `# azure-pipelines.yml
trigger: [ main ]

stages:
  - stage: Build
    jobs:
      - job: dotnet
        steps:
          - task: UseDotNet@2
            inputs: { version: '10.x' }
          - script: dotnet test --collect:"XPlat Code Coverage"
            displayName: xUnit + coverage
  - stage: Deploy
    dependsOn: Build
    jobs:
      - deployment: azure
        environment: production
        strategy:
          runOnce:
            deploy:
              steps:
                - script: az webapp deploy --name api-prod`;
