import React, { useState } from 'react';

const CounterApplication = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const styles = {
    container: {
      display: 'block',
      margin: '40px auto',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#eef5ff', // light soft blue background
      minHeight: '100vh',
      paddingTop: '50px'
    },

    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      display: 'inline-block',
      width: '320px'
    },

    developerHeading: {
      fontSize: '13px',
      color: '#ef4444',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '15px',
      paddingBottom: '5px',
      borderBottom: '1px dashed #fee2e2',
      textAlign: 'center'
    },

    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#000000',
      margin: '0 0 20px 0',
      lineHeight: '1.2'
    },

    counterValue: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#000000',
      margin: '20px 0'
    },

    buttonContainer: {
      margin: '0 auto 16px auto',
      width: '100%'
    },

    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '6px',
      fontSize: '14px',
      cursor: 'pointer',
      margin: '0 6px',
      width: '130px'
    },

    resetButton: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      padding: '10px 24px',
      borderRadius: '6px',
      fontSize: '14px',
      cursor: 'pointer',
      width: '140px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <div style={styles.developerHeading}>
          Developed by: Arvind Kumar
        </div>

        <h1 style={styles.title}>
          React Counter
          <br />
          Application
        </h1>

        <div style={styles.counterValue}>
          {count}
        </div>

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleIncrement}>
            Increment (+)
          </button>

          <button style={styles.button} onClick={handleDecrement}>
            Decrement (-)
          </button>
        </div>

        <div>
          <button style={styles.resetButton} onClick={handleReset}>
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default CounterApplication;