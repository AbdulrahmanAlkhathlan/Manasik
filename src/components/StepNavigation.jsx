const steps = [
    { key: "ihram", label: "Ihram" },
    { key: "makkah", label: "Enter Makkah" },
    { key: "tawaf", label: "Tawaf" },
    { key: "saee", label: "Sa'ee" },
    { key: "shaving", label: "Shaving" },
  ];
  
  const StepNavigation = ({ activeStep, onChange }) => (
    <div className="umrah-tabs">
      <div className="tabs-list">
        {steps.map((step, index) => (
          <button
            key={step.key}
            className={`tab-item ${activeStep === step.key ? "active" : ""}`}
            onClick={() => onChange(step.key)}
          >
            <span className="tab-number">{index + 1}</span>
            <span className="tab-text">{step.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
  
  export default StepNavigation;  