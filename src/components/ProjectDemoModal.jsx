import { useState, useMemo } from 'react';
import { X, Calculator, ShieldCheck, HelpCircle, Coins, Award, Info, Table } from 'lucide-react';

export default function ProjectDemoModal({ demoType, onClose }) {
  if (!demoType) return null;

  // Render modal content based on selected demo
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(5, 5, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px',
        animation: 'fadeIn 0.3s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          background: 'rgba(15, 15, 25, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 242, 254, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent close on card click
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                background: 'rgba(0, 242, 254, 0.1)',
                padding: '10px',
                borderRadius: '12px',
                color: 'var(--accent-cyan)',
              }}
            >
              <Calculator size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                {demoType === 'fixed-deposit' ? 'Fixed Deposit Calculator' : 'Loan & Savings Logic Simulator'}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {demoType === 'fixed-deposit'
                  ? 'Core logic simulator simulating SLIATE Java FD calculations'
                  : 'OOP financial algorithms simulating Loan EMI & savings targets'}
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
              e.currentTarget.style.color = '#ef4444';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Container */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {demoType === 'fixed-deposit' ? (
            <FixedDepositCalculator />
          ) : (
            <LoanSavingsCalculator />
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   1. FIXED DEPOSIT CALCULATOR COMPONENT
   ========================================== */
function FixedDepositCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [rate, setRate] = useState(10.5);
  const [duration, setDuration] = useState(12); // in months
  const [frequency, setFrequency] = useState('monthly'); // monthly, quarterly, semi-annually, annually, maturity
  const [taxRate, setTaxRate] = useState(5); // withholding tax percentage

  const results = useMemo(() => {
    const P = parseFloat(principal) || 0;
    const r = (parseFloat(rate) || 0) / 100;
    const t = (parseFloat(duration) || 0) / 12; // time in years
    const tax = (parseFloat(taxRate) || 0) / 100;

    let grossMaturity = 0;
    let totalInterest = 0;

    if (frequency === 'maturity') {
      // Simple Interest Formula
      totalInterest = P * r * t;
      grossMaturity = P + totalInterest;
    } else {
      // Compound Interest Formula: A = P(1 + r/n)^(nt)
      let n = 12; // default monthly
      if (frequency === 'quarterly') n = 4;
      else if (frequency === 'semi-annually') n = 2;
      else if (frequency === 'annually') n = 1;

      grossMaturity = P * Math.pow(1 + r / n, n * t);
      totalInterest = grossMaturity - P;
    }

    const taxWithheld = totalInterest * tax;
    const netInterest = totalInterest - taxWithheld;
    const netMaturity = P + netInterest;

    return {
      grossMaturity: grossMaturity.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      taxWithheld: taxWithheld.toFixed(2),
      netInterest: netInterest.toFixed(2),
      netMaturity: netMaturity.toFixed(2),
      principalPercentage: ((P / netMaturity) * 100).toFixed(1),
      interestPercentage: ((netInterest / netMaturity) * 100).toFixed(1),
      taxPercentage: ((taxWithheld / netMaturity) * 100).toFixed(1),
    };
  }, [principal, rate, duration, frequency, taxRate]);

  // Quick select values for principal
  const quickPrincipals = [50000, 100000, 500000, 1000000];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Simulation Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="calc-inputs-grid">
        
        {/* Left Column Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Principal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Principal Amount: <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>LKR {Number(principal).toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="10000"
              max="5000000"
              step="10000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
              {quickPrincipals.map((val) => (
                <button
                  key={val}
                  onClick={() => setPrincipal(val)}
                  style={{
                    fontSize: '0.7rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--text-muted)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {val >= 1000000 ? `${val / 1000000}M` : `${val / 1000}K`}
                </button>
              ))}
            </div>
          </div>

          {/* Annual Interest Rate */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Interest Rate (% p.a.): <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{rate}%</span>
            </label>
            <input
              type="range"
              min="1"
              max="25"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>

          {/* Tax Rate */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Withholding Tax: <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{taxRate}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              step="0.5"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>
        </div>

        {/* Right Column Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Duration in Months */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Investment Tenure (Months)
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '10px 12px',
                color: 'var(--text-primary)',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months (1 Year)</option>
              <option value="24">24 Months (2 Years)</option>
              <option value="36">36 Months (3 Years)</option>
              <option value="60">60 Months (5 Years)</option>
              <option value="120">120 Months (10 Years)</option>
            </select>
          </div>

          {/* Compounding Interest Model */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Compounding Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '10px 12px',
                color: 'var(--text-primary)',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              <option value="monthly">Compounded Monthly</option>
              <option value="quarterly">Compounded Quarterly</option>
              <option value="semi-annually">Compounded Semi-Annually</option>
              <option value="annually">Compounded Annually</option>
              <option value="maturity">Simple Interest (At Maturity)</option>
            </select>
          </div>

          {/* Core Formula Details Panel */}
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              <ShieldCheck size={14} />
              <span>Simulator Formula:</span>
            </div>
            {frequency === 'maturity' ? (
              <code>Interest = P × (r/100) × (Months/12)</code>
            ) : (
              <code>Maturity = P × (1 + r/n)^(n × (Months/12))</code>
            )}
            <p style={{ marginTop: '2px', lineHeight: 1.3 }}>
              Calculates withholding tax of {taxRate}% off the gross interest before generating net values.
            </p>
          </div>
        </div>
      </div>

      {/* Split Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />

      {/* Results Display */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Calculation Summary</h4>
        
        {/* Results Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="calc-cards-grid">
          
          <div
            style={{
              background: 'rgba(0, 242, 254, 0.03)',
              border: '1px solid rgba(0, 242, 254, 0.15)',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>NET INTEREST</span>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>
              Rs. {Number(results.netInterest).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(155, 81, 224, 0.03)',
              border: '1px solid rgba(155, 81, 224, 0.15)',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>TAX DEDUCTION</span>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-purple)', marginTop: '4px' }}>
              Rs. {Number(results.taxWithheld).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>NET MATURITY VALUE</span>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
              Rs. {Number(results.netMaturity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        {/* Visual Multi-Segment Growth Chart Bar */}
        <div style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', justifycontent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            <span>Maturity Investment Distribution</span>
            <span>Gross Maturity: Rs. {Number(results.grossMaturity).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
          
          {/* Compound Segmented Progress Bar */}
          <div
            style={{
              height: '16px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '999px',
              overflow: 'hidden',
              display: 'flex',
              width: '100%',
            }}
          >
            {/* Principal Segment */}
            <div
              style={{
                width: `${results.principalPercentage}%`,
                background: '#475569',
                height: '100%',
                transition: 'width 0.4s ease-out',
              }}
              title={`Principal: ${results.principalPercentage}%`}
            />
            {/* Net Interest Segment */}
            <div
              style={{
                width: `${results.interestPercentage}%`,
                background: 'var(--accent-cyan)',
                height: '100%',
                transition: 'width 0.4s ease-out',
              }}
              title={`Net Interest: ${results.interestPercentage}%`}
            />
            {/* Tax Segment */}
            <div
              style={{
                width: `${results.taxPercentage}%`,
                background: '#ef4444',
                height: '100%',
                transition: 'width 0.4s ease-out',
              }}
              title={`Withholding Tax: ${results.taxPercentage}%`}
            />
          </div>

          {/* Chart Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
              <span style={{ width: '10px', height: '10px', background: '#475569', borderRadius: '50%' }} />
              <span style={{ color: 'var(--text-secondary)' }}>Principal ({results.principalPercentage}%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
              <span style={{ width: '10px', height: '10px', background: 'var(--accent-cyan)', borderRadius: '50%' }} />
              <span style={{ color: 'var(--text-secondary)' }}>Net Interest ({results.interestPercentage}%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
              <span style={{ width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%' }} />
              <span style={{ color: 'var(--text-secondary)' }}>Tax Deducted ({results.taxPercentage}%)</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

/* ==========================================
   2. LOAN & SAVINGS SIMULATOR COMPONENT
   ========================================== */
function LoanSavingsCalculator() {
  const [activeTab, setActiveTab] = useState('loan'); // loan or savings

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Sub-tabs Selector */}
      <div
        style={{
          display: 'flex',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '4px',
          gap: '4px',
        }}
      >
        <button
          onClick={() => setActiveTab('loan')}
          style={{
            flex: 1,
            background: activeTab === 'loan' ? 'rgba(0, 242, 254, 0.12)' : 'none',
            border: 'none',
            outline: 'none',
            color: activeTab === 'loan' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
            fontWeight: 700,
            fontSize: '0.85rem',
            padding: '10px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <Coins size={15} />
          <span>Loan EMI Amortization</span>
        </button>
        
        <button
          onClick={() => setActiveTab('savings')}
          style={{
            flex: 1,
            background: activeTab === 'savings' ? 'rgba(0, 242, 254, 0.12)' : 'none',
            border: 'none',
            outline: 'none',
            color: activeTab === 'savings' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
            fontWeight: 700,
            fontSize: '0.85rem',
            padding: '10px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <Award size={15} />
          <span>Savings Planner (Annuity)</span>
        </button>
      </div>

      {activeTab === 'loan' ? <LoanCalculator /> : <SavingsCalculator />}
    </div>
  );
}

/* Tab 1: Loan Calculator */
function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanRate, setLoanRate] = useState(12.5);
  const [tenure, setTenure] = useState(5); // in years
  const [method, setMethod] = useState('reducing'); // reducing, flat
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  // Math models calculation
  const calculations = useMemo(() => {
    const P = parseFloat(loanAmount) || 0;
    const R = parseFloat(loanRate) || 0;
    const t = parseFloat(tenure) || 0;
    const n = t * 12; // total months

    let emi = 0;
    let totalInterest = 0;
    let totalPayable = 0;
    const schedule = [];

    if (method === 'reducing') {
      // Monthly reducing interest rate formula
      const monthlyRate = R / 12 / 100;
      if (monthlyRate > 0) {
        emi = P * monthlyRate * Math.pow(1 + monthlyRate, n) / (Math.pow(1 + monthlyRate, n) - 1);
      } else {
        emi = P / n;
      }
      totalPayable = emi * n;
      totalInterest = totalPayable - P;

      // Generate Amortization Table Array
      let remainingPrincipal = P;
      for (let m = 1; m <= n; m++) {
        const intPayment = remainingPrincipal * monthlyRate;
        const prinPayment = emi - intPayment;
        remainingPrincipal -= prinPayment;
        schedule.push({
          month: m,
          payment: emi.toFixed(2),
          principal: prinPayment.toFixed(2),
          interest: intPayment.toFixed(2),
          balance: Math.max(0, remainingPrincipal).toFixed(2),
        });
      }
    } else {
      // Flat Rate formula
      const annualInterest = P * (R / 100);
      totalInterest = annualInterest * t;
      totalPayable = P + totalInterest;
      emi = totalPayable / n;

      const monthlyInterest = totalInterest / n;
      const monthlyPrincipal = P / n;
      let remainingPrincipal = P;
      
      for (let m = 1; m <= n; m++) {
        remainingPrincipal -= monthlyPrincipal;
        schedule.push({
          month: m,
          payment: emi.toFixed(2),
          principal: monthlyPrincipal.toFixed(2),
          interest: monthlyInterest.toFixed(2),
          balance: Math.max(0, remainingPrincipal).toFixed(2),
        });
      }
    }

    return {
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayable: totalPayable.toFixed(2),
      interestPercentage: ((totalInterest / totalPayable) * 100).toFixed(1),
      principalPercentage: ((P / totalPayable) * 100).toFixed(1),
      schedule,
    };
  }, [loanAmount, loanRate, tenure, method]);

  const quickLoans = [250000, 500000, 1000000, 3000000];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Input controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="calc-inputs-grid">
        
        {/* Left inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Loan amount slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Loan Amount: <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>LKR {Number(loanAmount).toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="50000"
              max="10000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
            {/* Quick selectors */}
            <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
              {quickLoans.map((val) => (
                <button
                  key={val}
                  onClick={() => setLoanAmount(val)}
                  style={{
                    fontSize: '0.7rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--text-muted)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {val >= 1000000 ? `${val / 1000000}M` : `${val / 1000}K`}
                </button>
              ))}
            </div>
          </div>

          {/* Rate slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Interest Rate (% p.a.): <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{loanRate}%</span>
            </label>
            <input
              type="range"
              min="5"
              max="28"
              step="0.25"
              value={loanRate}
              onChange={(e) => setLoanRate(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>
        </div>

        {/* Right inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Method Selection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Amortization Model
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setMethod('reducing')}
                style={{
                  flex: 1,
                  background: method === 'reducing' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: method === 'reducing' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '10px',
                  color: method === 'reducing' ? '#fff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  transition: 'var(--transition-smooth)',
                }}
              >
                Reducing Balance
              </button>
              <button
                onClick={() => setMethod('flat')}
                style={{
                  flex: 1,
                  background: method === 'flat' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.03)',
                  border: '1px solid',
                  borderColor: method === 'flat' ? 'var(--accent-purple)' : 'rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '10px',
                  color: method === 'flat' ? '#fff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  transition: 'var(--transition-smooth)',
                }}
              >
                Flat Interest
              </button>
            </div>
          </div>

          {/* Tenure Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Loan Term (Years): <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{tenure} Years</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Split Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />

      {/* Results grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="calc-cards-grid">
        
        <div
          style={{
            background: 'rgba(0, 242, 254, 0.03)',
            border: '1px solid rgba(0, 242, 254, 0.15)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>MONTHLY PAYMENT (EMI)</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>
            Rs. {Number(calculations.emi).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(155, 81, 224, 0.03)',
            border: '1px solid rgba(155, 81, 224, 0.15)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>TOTAL INTEREST COST</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-purple)', marginTop: '4px' }}>
            Rs. {Number(calculations.totalInterest).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>TOTAL PAYABLE AMOUNT</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
            Rs. {Number(calculations.totalPayable).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      {/* Segmented Cost Breakdown Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden', display: 'flex' }}>
          <div style={{ width: `${calculations.principalPercentage}%`, background: '#475569', height: '100%' }} />
          <div style={{ width: `${calculations.interestPercentage}%`, background: 'var(--accent-cyan)', height: '100%' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          <span>Principal: {calculations.principalPercentage}%</span>
          <span>Interest Cost: {calculations.interestPercentage}%</span>
        </div>
      </div>

      {/* Amortization Schedule Drawer */}
      <div
        style={{
          background: 'rgba(255,255,255,0.01)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.02)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 700, color: '#fff' }}>
            <Table size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Amortization Schedule (OOP Calculator Engine)</span>
          </div>
          <button
            onClick={() => setShowFullSchedule(!showFullSchedule)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-cyan)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {showFullSchedule ? 'Collapse Table' : 'Show Full Schedule'}
          </button>
        </div>

        {/* Scrollable Table View */}
        <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '8px 12px' }}>Month</th>
                <th style={{ padding: '8px 12px' }}>Payment</th>
                <th style={{ padding: '8px 12px' }}>Principal Paid</th>
                <th style={{ padding: '8px 12px' }}>Interest Cost</th>
                <th style={{ padding: '8px 12px' }}>Remaining Loan</th>
              </tr>
            </thead>
            <tbody>
              {calculations.schedule
                .slice(0, showFullSchedule ? calculations.schedule.length : 6)
                .map((row) => (
                  <tr key={row.month} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'var(--text-secondary)' }}>
                    <td style={{ padding: '8px 12px', fontWeight: 600 }}>{row.month}</td>
                    <td style={{ padding: '8px 12px' }}>Rs. {Number(row.payment).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '8px 12px' }}>Rs. {Number(row.principal).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '8px 12px', color: 'rgba(239, 68, 68, 0.8)' }}>Rs. {Number(row.interest).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '8px 12px' }}>Rs. {Number(row.balance).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                  </tr>
                ))}
              {!showFullSchedule && calculations.schedule.length > 6 && (
                <tr>
                  <td colSpan={5} style={{ padding: '10px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', fontStyle: 'italic' }}>
                    Showing first 6 payments. Expand full schedule to view all {calculations.schedule.length} periods.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* Tab 2: Savings Calculator */
function SavingsCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(15000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [period, setPeriod] = useState(5); // in years

  const data = useMemo(() => {
    const PMT = parseFloat(monthlyDeposit) || 0;
    const R = parseFloat(interestRate) || 0;
    const t = parseFloat(period) || 0;
    
    const r = R / 12 / 100; // monthly rate
    const n = t * 12; // total compound deposits

    let futureValue = 0;
    if (r > 0) {
      // Future Value of Ordinary Annuity: FV = PMT * [((1 + r)^n - 1) / r]
      futureValue = PMT * ((Math.pow(1 + r, n) - 1) / r);
    } else {
      futureValue = PMT * n;
    }

    const totalInvested = PMT * n;
    const interestEarned = futureValue - totalInvested;

    return {
      futureValue: futureValue.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
      investedPercentage: ((totalInvested / futureValue) * 100).toFixed(1),
      interestPercentage: ((interestEarned / futureValue) * 100).toFixed(1),
    };
  }, [monthlyDeposit, interestRate, period]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Simulation Inputs */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="calc-inputs-grid">
        
        {/* Left Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Monthly deposits slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Monthly Deposit Amount: <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>LKR {Number(monthlyDeposit).toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="1000"
              max="250000"
              step="1000"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>

          {/* Rate slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Interest Rate (% p.a.): <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{interestRate}%</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>
        </div>

        {/* Right Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Duration in Years */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Saving Period (Years): <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{period} Years</span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={period}
              onChange={(e) => setPeriod(Number(e.target.value))}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                height: '6px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
          </div>

          {/* Info Card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              <Info size={14} />
              <span>Annuity Planner:</span>
            </div>
            <p style={{ lineHeight: 1.3 }}>
              Simulates compounding interest where deposits are made monthly. Demonstrates how regular savings grow exponentially over time due to compounding returns.
            </p>
          </div>
        </div>
      </div>

      {/* Split Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />

      {/* Results grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="calc-cards-grid">
        
        <div
          style={{
            background: 'rgba(0, 242, 254, 0.03)',
            border: '1px solid rgba(0, 242, 254, 0.15)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>TOTAL INVESTED</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
            Rs. {Number(data.totalInvested).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(155, 81, 224, 0.03)',
            border: '1px solid rgba(155, 81, 224, 0.15)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>INTEREST ACCRUED</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>
            Rs. {Number(data.interestEarned).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>FUTURE VALUE (TOTAL SAVINGS)</span>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '4px' }}>
            Rs. {Number(data.futureValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      {/* Segmented growth bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ height: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden', display: 'flex' }}>
          <div style={{ width: `${data.investedPercentage}%`, background: '#475569', height: '100%' }} />
          <div style={{ width: `${data.interestPercentage}%`, background: 'var(--accent-cyan)', height: '100%' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          <span>Deposits: {data.investedPercentage}%</span>
          <span>Compounded Returns: {data.interestPercentage}%</span>
        </div>
      </div>

    </div>
  );
}
