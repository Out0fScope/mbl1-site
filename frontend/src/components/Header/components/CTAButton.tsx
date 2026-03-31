'use client';

const CTAButton = () => {
  return (
    <a href="#" className="btn-7 max-lg:text-sm">
      <div className="arrow-layer">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#0f2a3a">
          <rect x="4" y="2" width="16" height="20" rx="2" stroke="#ffffff" strokeWidth="2" />
          <rect x="7" y="6" width="10" height="3" fill="#ffffff" />
          <circle cx="8" cy="12" r="1" fill="#ffffff" />
          <circle cx="12" cy="12" r="1" fill="#ffffff" />
          <circle cx="16" cy="12" r="1" fill="#ffffff" />
          <circle cx="8" cy="16" r="1" fill="#ffffff" />
          <circle cx="12" cy="16" r="1" fill="#ffffff" />
          <circle cx="16" cy="16" r="1" fill="#ffffff" />
        </svg>
      </div>
      <span>Рассчитать</span>
    </a>
  );
};

export default CTAButton;
