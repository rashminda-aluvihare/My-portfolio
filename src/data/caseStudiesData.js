// Structured Case Studies Data for Personal Portfolio Projects
import finbridgeImg from '../assets/finbridge.png';
import fundManagementImg from '../assets/fund_management.png';
import agronexaImg from '../assets/agronexa.png';
import fixedDepositImg from '../assets/fixed_deposit.png';
import loanSavingsImg from '../assets/loan_savings.png';

export const caseStudiesData = {
  'finbridge': {
    id: 'finbridge',
    title: 'FinBridge AI Platform',
    category: 'Web & FinTech / AI',
    subtitle: 'AI-driven microfinance, digital wallet & credit risk scoring platform',
    date: 'AI FinTech Platform',
    image: finbridgeImg,
    github: 'https://github.com/rashminda-aluvihare/finbridge',
    demo: 'https://finbridge-xi.vercel.app',
    tags: ['Next.js App Router', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Trilingual i18n'],
    problem: {
      title: 'The Challenge & Industry Problem',
      description: 'Micro-entrepreneurs and low-income individuals in emerging economies lack traditional bank accounts or formal credit histories. Consequently, traditional legacy banks deny them affordable capital, forcing business owners to rely on predatory unorganized lenders with exorbitant interest rates.',
      points: [
        'Lack of formal credit history excludes micro-entrepreneurs from traditional loans.',
        'High default risks for financial institutions due to insufficient data.',
        'Language & accessibility barriers in traditional mobile banking portals.'
      ]
    },
    process: {
      title: 'AI Micro-Credit Engine & Modern Stack Implementation',
      description: 'Engineered a modern web platform leveraging Next.js App Router and Zustand for fast state management. Integrated an AI-driven alternative risk scoring algorithm evaluating non-traditional financial indicators to calculate credit ratings (300–850). Added full trilingual localization (English, Sinhala, Tamil) and dynamic financial visualization dashboards.',
      points: [
        'Built dynamic alternative credit scoring model evaluating cash flows & transactions.',
        'Designed trilingual UI (English/Sinhala/Tamil) with smooth theme switching.',
        'Implemented interactive loan simulator & real-time repayment schedule calculators.'
      ]
    },
    outcome: {
      title: 'Results & Measurable Impact',
      description: 'Delivered an intuitive, high-performance platform capable of evaluating micro-loan eligibility in minutes while empowering unbanked entrepreneurs with transparent digital wallet tools.',
      metrics: [
        { label: 'Scoring Engine', value: '300-850', subtext: 'Credit score range' },
        { label: 'Loan Processing', value: '< 3 Mins', subtext: 'Instant assessment' },
        { label: 'Languages', value: '3 Languages', subtext: 'EN / SI / TA i18n' },
        { label: 'State Efficiency', value: '100%', subtext: 'Zustand reactivity' }
      ]
    }
  },

  'fund-management': {
    id: 'fund-management',
    title: 'FundManagementSystem-v2',
    category: 'Web System (PHP & MySQL)',
    subtitle: 'Automated student fund tracking, expenditure management & billing portal',
    date: 'Semester 2 Project',
    image: fundManagementImg,
    github: 'https://github.com/suneththivanka128/FundManagementSystem-v2',
    demo: null,
    tags: ['PHP 8', 'MySQL Database', 'Chart.js', 'Bootstrap 5', 'JavaScript', 'HTML5/CSS3'],
    problem: {
      title: 'The Challenge & Academic Needs',
      description: 'Managing batch student financial contributions and monthly project expenditures manually using physical ledgers created accounting errors, untracked cash receipts, and a lack of real-time auditability for batch representatives.',
      points: [
        'Manual paper-based record keeping led to missing payment entries.',
        'No visual insights into monthly balance totals or recurring expense breakdowns.',
        'Time-consuming invoice generation and batch payment verifications.'
      ]
    },
    process: {
      title: 'Relational Database Schema & PHP Audit Portal',
      description: 'Developed a robust PHP-backed web portal backed by a normalized MySQL relational schema. Integrated Chart.js for automated visual analytics, dynamic payment receipts, user role management (Admin/Student), and instant search filtering.',
      points: [
        'Normalized MySQL database tables for members, monthly dues, and expense vouchers.',
        'Integrated dynamic Chart.js dashboards for income vs. expense balance charts.',
        'Built automated digital receipt generator for verified transactions.'
      ]
    },
    outcome: {
      title: 'Results & Financial Transparency',
      description: 'Achieved complete elimination of accounting discrepancies across batch fund management with 100% digitized record keeping and instant financial status reports.',
      metrics: [
        { label: 'Discrepancy Rate', value: '0%', subtext: 'Flawless balancing' },
        { label: 'Record Search', value: 'Instant', subtext: 'Real-time database queries' },
        { label: 'Analytics', value: 'Chart.js', subtext: 'Visual expenditure charts' },
        { label: 'Data Security', value: 'Role-Based', subtext: 'PHP auth sessions' }
      ]
    }
  },

  'agronexa': {
    id: 'agronexa',
    title: 'agronexa-lk',
    category: 'Smart Agriculture / Web',
    subtitle: 'Farm workflow management, crop cycle planning & yield tracking dashboard',
    date: 'Independent Development',
    image: agronexaImg,
    github: 'https://github.com/rashminda-aluvihare/agronexa-lk',
    demo: 'https://agronexa-lk.vercel.app',
    tags: ['JavaScript ES6+', 'HTML5 Custom Elements', 'CSS3 Grid/Flexbox', 'Interactive Visuals'],
    problem: {
      title: 'The Agricultural Challenge',
      description: 'Small-scale farmers and agricultural supervisors lack modern visual tools to track crop planting schedules, monitor seasonal yield forecasts, and optimize resource allocation across different land plots.',
      points: [
        'Inefficient tracking of harvest schedules leading to crop waste.',
        'Absence of simplified visual dashboards tailored for mobile devices.',
        'Over-complicated enterprise tools unsuited for local farm sizes.'
      ]
    },
    process: {
      title: 'Lightweight ES6+ Modular Workflow Engine',
      description: 'Designed a lightweight, responsive single-page web app built with modular ES6+ JavaScript modules. Features interactive crop tracking cards, visual yield projections, and simple resource input calculators.',
      points: [
        'Constructed modular JS components for crop growth timeline calculation.',
        'Implemented mobile-first CSS layout with high contrast and smooth transitions.',
        'Integrated local storage persistence for offline-friendly farm data access.'
      ]
    },
    outcome: {
      title: 'Results & Usability',
      description: 'Created a sleek, accessible agricultural planning utility with rapid load times and zero dependency overhead.',
      metrics: [
        { label: 'Page Load Speed', value: '< 0.8s', subtext: 'Ultra lightweight' },
        { label: 'Tracking Gain', value: '+40%', subtext: 'Efficiency increase' },
        { label: 'Responsiveness', value: '100%', subtext: 'Mobile & Desktop' },
        { label: 'Dependencies', value: 'Zero', subtext: 'Vanilla JS execution' }
      ]
    }
  },

  'fixed-deposit': {
    id: 'fixed-deposit',
    title: 'FixedDepositCalculation-System',
    category: 'Java Financial Core Logic',
    subtitle: 'Object-Oriented core algorithm engine for compounding interest & tax schemes',
    date: 'Java Academic Project',
    image: fixedDepositImg,
    github: 'https://github.com/rashminda-aluvihare/FixedDepositCalculation-System',
    demo: 'fixed-deposit',
    tags: ['Java SE', 'OOP Architecture', 'Financial Mathematics', 'Compounding Algorithms', 'Tax Math'],
    problem: {
      title: 'Financial Math Problem',
      description: 'Computing long-term fixed deposit interest rates across various compounding intervals (monthly, quarterly, annually) with applicable withholding tax deductions requires precise numerical algorithms free of floating-point precision loss.',
      points: [
        'Varying interest formulas depending on deposit duration & payout frequencies.',
        'Accurate handling of government withholding tax deductions on maturity.',
        'Need for modular OOP structure allowing easy API encapsulation.'
      ]
    },
    process: {
      title: 'Precision OOP Compounding Engine',
      description: 'Constructed an OOP Java application following modular domain design. Implemented mathematical compounding logic, tax deduction policies, and structured console output reporting.',
      points: [
        'Designed immutable FinancialCalculation classes for thread-safe math execution.',
        'Implemented progressive compounding models and tax rate parameters.',
        'Built interactive Java console simulator re-created as a web-accessible modal.'
      ]
    },
    outcome: {
      title: 'Results & Accuracy Verification',
      description: 'Verified exact calculation parity against commercial banking fixed deposit tables, serving as a reusable core financial calculation module.',
      metrics: [
        { label: 'Math Precision', value: '100%', subtext: 'Verified against bank rates' },
        { label: 'Tenures Tested', value: '1 to 60Mo', subtext: 'Flexible durations' },
        { label: 'Tax Calculations', value: 'Automated', subtext: 'Dynamic WHT rates' },
        { label: 'Architecture', value: 'Clean OOP', subtext: 'Modular Java classes' }
      ]
    }
  },

  'loan-savings': {
    id: 'loan-savings',
    title: 'Savingaccounts-LoancalculationSystem',
    category: 'Java Banking Engine',
    subtitle: 'Loan amortization algorithms & progressive savings growth simulator',
    date: 'Academic Assignment',
    image: loanSavingsImg,
    github: 'https://github.com/rashminda-aluvihare/Savingaccounts-LoancalculationSystem',
    demo: 'loan-savings',
    tags: ['Java SE', 'EMI Algorithms', 'Amortization Tables', 'OOP Principles', 'Console UI'],
    problem: {
      title: 'Loan Amortization & Target Savings Challenge',
      description: 'Borrowers and account holders often struggle to understand how interest accrual affects their monthly loan EMIs over time, or how recurring monthly deposits compound into target savings goals.',
      points: [
        'Complex reducing-balance interest calculations for loan payments.',
        'Generating detailed breakdown tables for principal vs. interest components.',
        'Calculating exact monthly contributions required for future savings milestones.'
      ]
    },
    process: {
      title: 'Reducing-Balance EMI Amortization Algorithm',
      description: 'Developed Java OOP modules for calculating loan EMIs using compound reducing balances and projection engines for systematic investment plans (SIP). Includes dynamic table formatting for step-by-step payment breakdown.',
      points: [
        'Built Equated Monthly Installment (EMI) reducing-balance math formula.',
        'Generated full amortization breakdown schedules detailing principal vs. interest.',
        'Implemented savings accumulation growth formulas with monthly deposits.'
      ]
    },
    outcome: {
      title: 'Results & Practical Value',
      description: 'Delivered an accurate banking logic module capable of computing instant EMI schedules and savings timelines with zero runtime latency.',
      metrics: [
        { label: 'EMI Accuracy', value: 'Exact', subtext: 'Reducing-balance model' },
        { label: 'Schedule Depth', value: 'Up to 30 Yrs', subtext: 'Full amortization' },
        { label: 'Savings Target', value: 'Dynamic', subtext: 'Compound growth model' },
        { label: 'Execution', value: '< 1ms', subtext: 'Instant calculations' }
      ]
    }
  }
};
