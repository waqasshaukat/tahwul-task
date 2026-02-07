export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  icon?: string;
};

export const timeline = [
  { label: "Kickoff Workshop", date: "Mar 17", status: "done" },
  { label: "Data Collection", date: "Mar 18", status: "done" },
  { label: "Initial Phase", date: "May 8", status: "done" },
  { label: "Verification", date: "May 9 - July 12", status: "done" },
  { label: "Completion Reviews", date: "July 13", status: "next" },
  { label: "Cycle Conclusion", date: "Aug 21", status: "pending" },
] as const;

export const notifications = [
  {
    title: "New evidence uploaded",
    detail: "3 documents added to Verification.",
    time: "5m ago",
  },
  {
    title: "Score updated",
    detail: "Operations and Execution is now 98%.",
    time: "1h ago",
  },
  {
    title: "Reviewer assigned",
    detail: "Noura Al-Salem joined Cycle Conclusion.",
    time: "Yesterday",
  },
  {
    title: "Deadline reminder",
    detail: "Completion Reviews due July 13.",
    time: "2 days ago",
  },
] as const;

export const userMenuItems = [
  { label: "Profile", detail: "View and edit your details" },
  { label: "Settings", detail: "Account preferences" },
  { label: "Team", detail: "Manage members" },
  { label: "Sign out" },
] as const;

export const statCards = [
  { label: "Overall Progress", value: "78.65%", icon: "/icons/reports-red.svg" },
  { label: "Total Criteria", value: "95", icon: "/icons/criteria.svg" },
  { label: "Completed Criteria", value: "52", icon: "/icons/complete_criteria.svg" },
  { label: "Evidence Documents", value: "36", icon: "/icons/evidence_documents.svg" },
  { label: "Evidence (Completed)", value: "302", icon: "/icons/evidence_completed.svg" },
  { label: "Uploaded to DGA", value: "258", icon: "/icons/upload_dga.svg" },
];

export const progressColumns = [
  {
    title: "Strategy And Planning",
    score: "97.78%",
    segments: [
      {
        title: "Digital Transformation",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
        ],
      },
      {
        title: "Digital Governance",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 1 },
        ],
      },
      {
        title: "Enterprise Architecture",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Organization And Culture",
    score: "70.83%",
    segments: [
      {
        title: "Digital Culture And Environment",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 2 },
        ],
      },
      {
        title: "Leadership Development",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
        ],
      },
      {
        title: "Skills & Capacity Building",
        items: [
          { label: "1", status: 1 },
          { label: "2", status: 1 },
          { label: "3", status: 1 },
        ],
      },
    ],
  },
  {
    title: "Operations And Execution",
    score: "98.00%",
    segments: [
      {
        title: "Business Processes",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 1 },
          { label: "4", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Business Continuity",
    score: "90.95%",
    segments: [
      {
        title: "Risk Management",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
          { label: "5", status: 2 },
        ],
      },
      {
        title: "Business Continuity",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 0 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
          { label: "5", status: 0 },
          { label: "6", status: 0 },
          { label: "7", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Information Technology",
    score: "75.00%",
    segments: [
      {
        title: "Support Systems",
        items: [
          { label: "1", status: 3 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
          { label: "5", status: 2 },
        ],
      },
      {
        title: "IT Infrastructure",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 3 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
          { label: "5", status: 3 },
          { label: "6", status: 3 },
          { label: "7", status: 2 },
        ],
      },
      {
        title: "Cloud Infrastructure",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 3 },
        ],
      },
    ],
  },
  {
    title: "Comprehensive Governance",
    score: "64.44%",
    segments: [
      {
        title: "Governance Platforms",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
          { label: "4", status: 0 },
          { label: "5", status: 2 },
          { label: "6", status: 2 },
          { label: "7", status: 2 },
          { label: "8", status: 2 },
          { label: "9", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Channels And Services",
    score: "100%",
    segments: [
      {
        title: "Service Quality",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
        ],
      },
      {
        title: "Digital Channels",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 2 },
          { label: "3", status: 2 },
          { label: "4", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Beneficiary Centralization",
    score: "60.00%",
    segments: [
      {
        title: "User Engagement",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 1 },
          { label: "4", status: 1 },
        ],
      },
      {
        title: "User Relationship",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 1 },
        ],
      },
      {
        title: "User Experience",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 2 },
          { label: "4", status: 1 },
          { label: "5", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Government Data",
    score: "87.50%",
    segments: [
      {
        title: "Data Governance",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 1 },
        ],
      },
      {
        title: "Data Usage & Availability",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 1 },
        ],
      },
      {
        title: "Open Data",
        items: [
          { label: "1", status: 2 },
          { label: "2", status: 1 },
          { label: "3", status: 2 },
        ],
      },
    ],
  },
  {
    title: "Research and Innovation",
    score: "17.65%",
    segments: [
      {
        title: "Innovation",
        items: [
          { label: "1", status: 5 },
          { label: "2", status: 5 },
          { label: "3", status: 5 },
          { label: "4", status: 5 },
        ],
      },
      {
        title: "Creative Solutions",
        items: [
          { label: "1", status: 1 },
          { label: "2", status: 5 },
        ],
      },
    ],
  },
];

export const leaders = [
  {
    name: "Ahmed Al-Ali",
    role: "Strategy Perspective",
    score: "96%",
    avatar: "/icons/ahmad.png",
  },
  {
    name: "Sarah Al-Khaled",
    role: "Beneficiary Perspective",
    score: "94%",
    avatar: "/icons/sarah.png",
  },
  {
    name: "Mohammad Al-Mansour",
    role: "IT Perspective",
    score: "92%",
    avatar: "/icons/mohammad.png",
  },
];

export const activities: {
  title: string;
  time: string;
  type: "doc" | "task" | "alert";
}[] = [
  {
    title: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: "5 Mins Ago",
    type: "doc",
  },
  {
    title: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: "20 Mins Ago",
    type: "task",
  },
  {
    title: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: "1 Hour Ago",
    type: "alert",
  },
];

export const twelveMonthPerformance = [
  { label: "Jan", value: 88 },
  { label: "Feb", value: 78 },
  { label: "Mar", value: 90 },
  { label: "Apr", value: 60 },
  { label: "May", value: 74 },
  { label: "Jun", value: 55 },
  { label: "Jul", value: 38 },
  { label: "Aug", value: 71 },
  { label: "Sept", value: 52 },
  { label: "Oct", value: 64 },
  { label: "Nov", value: 78 },
  { label: "Dec", value: 70 },
] as const;

export const overallComplianceScore = {
  title: "Overall Compliance Score",
  value: 65,
  subtitle: "Basic Standards 2025",
  color: "#DB1F26",
} as const;

export const auditReadiness = {
  title: "Audit Readiness",
  value: 80,
  subtitle: "Readiness Level",
  meta: [
    { label: "Overdue Sets", value: "12" },
    { label: "Missing Evidence", value: "5" },
  ],
} as const;

export const evidenceSummary = [
  { label: "Total Evidence", value: "4", icon: "/icons/doc.svg" },
  { label: "Under Review Evidence", value: "3", icon: "/icons/under_review.svg" },
  { label: "In Progress Evidence", value: "2", icon: "/icons/in_progress.svg" },
  { label: "Completed Evidence", value: "1", icon: "/icons/completed.svg" },
];

export const objectiveSections = [
  {
    title: "Objective",
    content:
      "Develop a digital transformation strategy aligned with the organization’s strategy and the objectives of Saudi Vision 2030.",
  },
  {
    title: "Implementation Requirements",
    content:
      "Prepare a digital transformation strategy for the transition to electronic government transactions, including the following:\nA. The organization’s vision, mission, strategic pillars, and strategic objectives, and their alignment with the organization’s overall strategy.\nB. Strategic initiatives, programs, and performance indicators.\nC. A clear methodology for integration and coordination with relevant external entities to achieve the strategy’s objectives.\nD. Required competencies, capabilities, and skills necessary to achieve the strategy’s objectives.",
  },
  {
    title: "Evidence Documents",
    content:
      "Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.",
  },
  {
    title: "Related Regulations",
    content:
      "Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).",
  },
  {
    title: "Scope",
    content: "All Government Entities.",
  },
];

export const evidenceRows = [
  {
    number: "5.4.1.1",
    name: "Digital_Transformation_Plan.pdf",
    lead: "Ahmed Khaled",
    preparer: "Ahmed Khaled",
    date: "2025-08-01",
    due: "2025-08-01",
    status: "Approved",
  },
  {
    number: "5.4.1.2",
    name: "KPI_Framework.xlsx",
    lead: "Mona Hamed",
    preparer: "Mona Hamed",
    date: "2025-08-01",
    due: "2025-08-01",
    status: "Pending Review",
  },
  {
    number: "5.4.1.3",
    name: "Roadmap_Version1.docx",
    lead: "Rami AlSharif",
    preparer: "Rami AlSharif",
    date: "2025-08-01",
    due: "2025-08-01",
    status: "Pending Review",
  },
];

export const comments = [
  {
    author: "Sara Ibrahim",
    time: "2025-08-05",
    text: "Ensure the plan includes a clear governance model.",
  },
  {
    author: "Mona Hamed",
    time: "2025-08-05",
    text: "Ensure the plan includes a clear governance model.",
  },
];
