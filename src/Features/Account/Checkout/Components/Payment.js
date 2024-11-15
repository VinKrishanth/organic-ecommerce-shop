import React, { useState } from 'react';

function Payment() {
  const [textHover, setTextHover] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('Cash on Delivery');

  const handleChange = (value) => {
    setSelectedPayment(value);
  };

  const paymentData = [
    { id: 'pID1', name: 'payment', value: 'Cash on Delivery' },
    { id: 'pID2', name: 'payment', value: 'Paypal' },
    { id: 'pID3', name: 'payment', value: 'Amazon Pay' },
  ];

  return (
    <div className="flex flex-col justify-start items-start gap-2">
      {paymentData.map((item, index) => (
        <ul key={index} className="flex justify-start items-start">
          <li
            key={item.id}
            className="flex justify-center items-center gap-4"
            onMouseOut={() => setTextHover(false)}
            onMouseOver={() => setTextHover(index)}
          >
            <input
              type="radio"
              name={item.name}
              value={item.value}
              className="min-h-5 min-w-5"
              onChange={() => handleChange(item.value)}
              checked={selectedPayment === item.value}
            />
            <label
              className={`text-sm font-normal tracking-normal leading-6 text-left cursor-pointer ${
                textHover === index ? 'text-Gray90' : 'text-gray-700'
              }`}
            >
              {item.value}
            </label>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Payment;
