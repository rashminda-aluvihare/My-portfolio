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
    tags: ['React.js (TypeScript)', 'Node.js & Express.js', 'PostgreSQL (Railway)', 'Socket.IO Live Chat', 'Twilio SMS API', 'SHA-256 Crypto Ledger', 'Cloudinary CDN', 'Leaflet.js Maps', 'Tailwind CSS', 'Vercel'],
    problem: {
      title: 'The Agricultural Challenge',

      points: [
        'Intermediary Dependency: Farmers receive only 20–30% of the final consumer price due to heavy reliance on middlemen across the supply chain.',
        'Pricing Opacity: No transparent pricing system exists, leading to unfair price manipulation and limited bargaining power for farmers.',
        'Limited Resource Access: Fragmented access to crop sales markets, equipment rentals, and crop transport service providers.',
        'Poor Supply Chain Traceability: Absence of digital traceability leads to accountability gaps throughout the agricultural supply chain.',
        'Post-Harvest Loss Crisis: Vegetable post-harvest losses estimated at 30–40%, mainly occurring during transportation due to poor handling practices.',
        'Fragmented & Inefficient Logistics: No centralized platform for coordinating crop transport, resulting in delayed deliveries and increased spoilage.'
      ]
    },
    process: {
      title: 'Full-Stack Agricultural Marketplace with Blockchain-Inspired Integrity',
      description: 'AgroNexa LK was built as a modern full-stack web platform using React.js (TypeScript), Node.js, Express.js, and PostgreSQL — directly connecting farmers and buyers without intermediaries. The system follows an MVC architecture and was developed under the Prototype Software Development Model for continuous iterative improvement.',
      points: [
        'Direct Farmer–Buyer Marketplace: Farmers publish crop listings with name, category, quantity, price & location; buyers browse, filter by district, and submit purchase requests directly — eliminating intermediaries entirely.',
        'OTP-Gated Authentication & KYC Pipeline: Users register via Twilio SMS OTP verification and upload front/back NIC photos to Cloudinary. Admins manually approve accounts through a dedicated KYC verification panel before granting access.',
        'Immutable SHA-256 Cryptographic Ledger: All confirmed equipment rental bookings are chained using blockchain-inspired SHA-256 hash blocks stored in PostgreSQL — any database tampering breaks the chain and triggers a real-time admin alert.',
        'SMS Broadcast Request Network: Corporate buyers publish bulk procurement requests (commodity, volume, budget, district) which automatically trigger Twilio SMS notifications to matching registered farmers in that region.',
        'Socket.IO Real-Time Live Chat: Buyers and farmers negotiate directly via WebSocket-powered instant messaging with read receipts, double-tick indicators, voice message playback, and offline message queuing in the database.',
        'Equipment Rental Booking Engine: Farmers list machinery for rent; the backend uses SQL date-interval overlap checks to prevent double bookings and auto-calculates rental costs before writing ledger records.',
        'HARTI Price Index Scraper & Fallback: Daily wholesale crop prices are auto-scraped from Sri Lanka\'s HARTI portal using Axios + Cheerio. If the portal is offline, a statistical ±3% price simulator maintains system continuity.',
        'Multilingual Interface (EN / SI / TA): The UI dynamically switches between English, Sinhala, and Tamil without page reloads using a custom DOM localization engine backed by localStorage preference persistence.'
      ]
    },
    outcome: {
      title: 'Results & Impact',
      description: 'Delivered a production-deployed, full-stack agricultural marketplace with blockchain-inspired transaction integrity, real-time communication, and multilingual support — modernizing Sri Lanka\'s agricultural trading ecosystem.',
      metrics: [
        { label: 'Ledger Security', value: 'SHA-256', subtext: 'Blockchain-inspired chain' },
        { label: 'Languages', value: '3 Lang', subtext: 'Sinhala / Tamil / English' },
        { label: 'Architecture', value: 'Full-Stack', subtext: 'React + Node + PostgreSQL' },
        { label: 'Deployment', value: 'Live', subtext: 'Vercel + Railway cloud' }
      ]
    }
  },

  'fixed-deposit': {
    id: 'fixed-deposit',
    title: 'Fixed Deposit Calculation System',
    category: 'Java Financial Core Logic',
    subtitle: "A Java-based banking application inspired by People's Bank fixed deposit schemes, calculating maturity values, compound interest, and applicable tax deductions based on investment amount and deposit tenure.",
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
    title: 'Saving Accounts & Loan Calculation System',
    category: 'Java Banking Engine',
    subtitle: "A Java-based banking application inspired by People's Bank savings and loan schemes, automating interest, loan EMI, and reducing-balance calculations while generating accurate repayment schedules.",
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
