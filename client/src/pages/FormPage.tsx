import React from 'react';

// FormPage component just redirects to our static HTML form
const FormPage: React.FC = () => {
  React.useEffect(() => {
    window.location.href = '/form.html';
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Redirecting to form...</p>
    </div>
  );
};

export default FormPage;