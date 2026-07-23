// Structured Case Studies Data for Personal Portfolio Projects
import finbridgeImg from '../assets/finbridge.png';
import fundManagementImg from '../assets/fund_management.png';
import agronexaImg from '../assets/agronexa.png';
import fixedDepositImg from '../assets/fixed_deposit.png';
import loanSavingsImg from '../assets/loan_savings.png';

export const caseStudiesData = {
  'finbridge': {
    id: 'finbridge',
    title: 'FinBridge – AI-Based Personal Financial Health & Loan Risk Assessment Platform',
    category: 'Web & FinTech / AI',
    subtitle: 'Empower your financial future with automated health scores, risk profiling, and AI recommendations.',
    date: 'AI FinTech Platform',
    image: finbridgeImg,
    github: 'https://github.com/rashminda-aluvihare/finbridge',
    demo: 'https://finbridge-xi.vercel.app',
    tags: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Python FastAPI', 'Scikit-Learn ML', 'Zustand', 'Recharts', 'Node.js/Express'],
    problem: {
      title: 'The Challenge & Industry Problem',
      description: 'Micro-entrepreneurs, farmers, and low-income individuals in emerging economies like Sri Lanka lack formal bank accounts and traditional credit histories. Consequently, legacy financial institutions deny them affordable capital, forcing business owners to rely on predatory informal lenders with exorbitant interest rates.',
      points: [
        'Credit History Exclusion: Absence of formal credit records (e.g., CRIB scores) excludes micro-entrepreneurs from low-interest commercial loans.',
        'High Default Risk Uncertainty: Financial institutions struggle to evaluate risk for unbanked individuals due to asymmetric and insufficient financial data.',
        'Language & Accessibility Barriers: Traditional banking portals lack localized multi-language support (Sinhala/Tamil/English) and intuitive mobile interfaces suited for rural communities.'
      ]
    },
    process: {
      title: 'AI Micro-Credit Engine & Modern Stack Architecture',
      description: 'Engineered a modern web platform leveraging Next.js 16 (App Router) and Zustand for dynamic state management, paired with a dual-layer AI credit assessment architecture. FinBridge calculates transparent alternative credit scores (300–850) by evaluating non-traditional financial indicators such as utility payment timeliness, peer ratings, and debt-to-income (DTI) metrics.',
      points: [
        'Multi-Factor Alternative Risk Algorithm: Integrates quantitative scoring weighted across DTI ratio (45%), Utility Bill Timeliness (20%), Savings Ratio (15%), Community Peer Ratings (10%), and Loan Burden Ratio (10%).',
        'Dual-Layer Machine Learning Microservice: Features a Python FastAPI backend utilizing Scikit-Learn (RandomForestRegressor & RandomForestClassifier with StandardScaler) providing Explainable AI (XAI) feature analysis alongside real-time client-side TypeScript calculations.',
        'Interactive "What-If" Credit Simulator: Real-time parameter sliders allowing users to visualize credit score variations, interest rate adjustments (8%–32%), and risk category banding (Low, Medium, High, Very High).',
        'Trilingual & Multi-Role Architecture: Full Sinhala, English, and Tamil localization (i18n) with dedicated dashboards for Borrowers (digital wallet & loans), Lenders (portfolio yields & NPL metrics), and Admins (fraud anomaly logs & approval queues).'
      ]
    },
    outcome: {
      title: 'Results & Measurable Impact',
      description: 'Delivered an intuitive, high-performance platform capable of evaluating unbanked loan eligibility in minutes while empowering micro-entrepreneurs with transparent digital wallet tools.',
      metrics: [
        { label: 'Scoring Engine', value: '300-850', subtext: 'Multi-factor AI score' },
        { label: 'ML Microservice', value: 'FastAPI', subtext: 'Random Forest + XAI' },
        { label: 'Languages', value: '3 Languages', subtext: 'Sinhala / Tamil / English' },
        { label: 'Architecture', value: 'Full-Stack', subtext: 'Next.js + Express + Python' }
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
    title: 'AgroNexa LK – Smart Agriculture Marketplace',
    category: 'Smart Agriculture / Web',
    subtitle: 'A blockchain-enabled agriculture platform connecting farmers and buyers with transparent pricing and verified transactions.',
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
