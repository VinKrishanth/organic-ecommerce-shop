import React, { useState } from 'react';
import Header from '../../Containers/Header';
import Footer from '../../Containers/Footer';
import MainModal from '../../Components/Modal/MainModal';

function Policy() {
  const [isVisible, setVisible] = useState(false);

  const handleModalClose = () => {
    setVisible(false); // Close the modal directly
  };

  return (
    <>
      <Header />
      <Footer />
      <MainModal 
        isOpen={isVisible}
        onClose={handleModalClose} // Ensure the close function is passed here
      />
    </>
  );
}

export default Policy;
