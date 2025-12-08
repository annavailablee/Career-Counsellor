import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  onClick, 
  to, 
  variant = 'primary', 
  type = 'button',    
  disabled = false,
  className = '' 
}) => {

  const baseClasses = 'btn';

  const variantClasses = `btn-${variant}`;

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();


  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }


  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;