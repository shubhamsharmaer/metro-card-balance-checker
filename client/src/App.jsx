import React, { useState, useEffect } from 'react';
import { getCardBalance } from '../services/cardService'; // Adjust the path as needed
import './App.css';
import logo from './assets/logo.svg';
import err from './assets/err.svg';
import bg from './assets/bg.png';
import metrogirl from './assets/metrogirl.svg';
import reset from './assets/reset.svg';

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);
  const [showTopWindow, setShowTopWindow] = useState(true);
  const [moveerror, setMoveerror] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  useEffect(() => {
    // Set a timeout to move the top-window after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setShowTopWindow(false);
    }, 3000); // Delay before the animation starts

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleCheckBalance = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (cardNumber.length !== 8 || isNaN(cardNumber)) {
      setError('Invalid Card number');
      setMoveerror(true);
      setBalance(null);
      return; // Stop further execution if validation fails
    }

    try {
      const data = await getCardBalance(cardNumber);
      setBalance(data.balance);
      // console.log(data.balance);
      setError(null);
      setShowBalance(true);

      // setTimeout(() => {
      //   setShowBalance(false);
      // }, 5000);
    } catch (err) {
      setError(err.message);
      setMoveerror(true);
      setBalance(null);

      setTimeout(() => {
        setMoveerror(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setCardNumber('');
    setBalance(null);
    setError(null);
    setShowBalance(false);
    setMoveerror(false);
    
    // setTimeout(() => {
    //   setMoveerror(false);
    // }, 3000);
  };

  return (
    <>
    <div className="relative h-screen items-center justify-center bg-left sm:bg-center  bg-fixed bg-cover"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>

        <div id="top-window" className={`absolute h-screen inset-0 bg-white z-30 transition-transform duration-1000 ease-in-out 
          ${showTopWindow ? '' : '-translate-y-full'}
        `}
        >
          <div id="welcome" className="flex h-screen flex-col justify-center items-center">
            <img className='h-full sm:h-96' src={metrogirl} alt="" />
          </div>
        </div>


                    

          <div id="main-form" className="absolute h-screen inset-0 flex flex-col justify-center items-center">

                {error && (
                  <div
                    className={`absolute flex gap-1 sm:flex-row justify-center items-center border-none px-4 py-2 text-[#fa5148] rounded-lg bg-red-200 
                    transition-transform duration-1000 ease-in-out h-fit w-fit
                    ${moveerror ? '-translate-y-52 sm:-translate-y-40 opacity-100' : 'translate-y-0 opacity-0'}`}
                    style={{ zIndex: moveerror ? 20 : 10 }}
                  >
                    <img className="h-4" src={err} alt="" />
                    <h2>{error}</h2>
                  </div>
                )}

                {balance !== null && (
                      <div id='bento-card' className={`absolute rounded-2xl p-[1px] bg-gradient-to-br
                                    from-red-200 via-purple-200 to-yellow-200 
                                    transition-transform duration-1000 ease-in-out 
                                    ${showBalance ? '-translate-y-52 sm:-translate-y-40 opacity-100' : 'translate-y-0 opacity-0'}`}
                                    style={{ zIndex: showBalance ? 20 : 10 }}
                                    >
                              <div className=" rounded-2xl bg-gradient-to-br
                                    from-red-50 via-purple-50 to-yellow-50  
                                    px-6 py-3  flex justify-center items-center">
                                    
                                      <h2 className='font-semibold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Rs. {balance}</h2>
                                        
                          </div>
                      </div>
                      )}    
            
                <div id='bento' className="z-20 rounded-2xl p-[1px] bg-gradient-to-br
                            from-red-200 via-purple-200 to-yellow-200 mx-20 sm:mx-auto">
                      <div className=" rounded-2xl bg-gradient-to-br
                            from-red-50 via-purple-50 to-yellow-50  
                            p-4 sm:p-6 flex flex-col justify-center gap-6 sm:gap-4">
                            
                            <div id="head" className='flex mb-2 gap-1 justify-start items-center'>
                              <img className='h-4' src={logo} alt="" />
                              <h1 className='font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Delhi Metro</h1>
                            </div>

                            <div id="bottom" className='flex flex-col sm:flex-row justify-start sm:gap-4 sm:items-center'>
                            
                            <div id="bottom-head" className='flex mb-6 flex-col justify-start'>
                              <h2 className='font-semibold text-2xl text-[#2a2a2c] sm:text-3xl'>Card Number</h2>
                              <p className='font-medium font-body text-[#88888a] text-sm sm:text-lg'>chat with us <span><a className='font-medium text-blue-500' href="https://www.linkedin.com/in/shubhamsharmaer/" target="_blank">click</a></span></p>
                            </div>

                            <div id="form" className='flex flex-col justify-center bg-white items-center px-2 py-2 sm:px-8 rounded-xl border-none'>

                                  <form onSubmit={handleCheckBalance} className='flex flex-col justify-center items-center gap-4'>
                                    <input
                                      type="text"
                                      id="cardNumber"
                                      className='text-[#1f1f21] border-b focus:outline-none px-2 py-4 sm:py-2'
                                      value={cardNumber}
                                      onChange={(e) => setCardNumber(e.target.value)}
                                      placeholder="must be 8 digits long"
                                    />
                                    <div id="submits" className='flex gap-2 justify-center items-center'>
                                          <input type="submit" className='cursor-pointer border drop-shadow-sm text-white bg-[#2a2a2c] hover:opacity-90 font-body font-semibold rounded-lg px-4 py-2 mb-2' value="Check Balance" />
                                          <button className={`
                                            opacity-30  transition-opacity duration-500 border drop-shadow-sm text-white bg-[#2a2a2c] font-body font-semibold rounded-lg px-4 py-2 mb-2`}
                                            onClick={handleReset}
                                            type='button'
                                            style={{ opacity: (showBalance || error) ? 1 : 0.5 }}
                                            disabled={!showBalance && !error}
                                            >
                                              <img className='h-5' src={reset} alt="" />
                                          </button>
                                    </div>
                                    
                                  </form>
                              </div>
                            </div>

          
                              {balance !== null && <p className='hidden'>Balance: {balance}</p>}
                  </div>
              </div>
              
          </div>
    </div>
    </>

  );
};

export default App;