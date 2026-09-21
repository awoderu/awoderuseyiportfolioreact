import React from 'react';

const Form = () => {
  return (
     <>
        <div id="contact" className="min-h-screen w-full flex justify-center items-center px-4 pt-8 pb-8 bg-black">
          <div className="w-full max-w-md bg-[#222] rounded-xl drop-shadow-xl ring-1 ring-white/10 py-8 px-5 sm:px-8 mt-8 lg:mt-12">
            <h2 className="text-[28px] text-white mb-6 text-center">
                  Send me a message
         </h2>
          <form className='flex flex-col font-Rubik' action="https://formspree.io/f/xbglgzaw" method="POST">
            <div className='flex space-x-4 mb-4'>
              <input placeholder='First Name' className='bg-white text-olive-950 rounded-xl p-2 w-1/2 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              
              </input>
              <input placeholder='Last Name'
               className='bg-red-50 text-olive-950 rounded-xl p-2 w-1/2 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
            </div>
            <input placeholder='Phone number'
               className='bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
              <input placeholder='Email'
               className='bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black' type='text'>
              </input>
              {/* <select className='bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100
               focus:outline-none transition ease-in-out duration-150 placeholder-black'
               name="language" id="language">
                <option value="Haematology">Haematology</option>
                <option value="Clinical chemistry">Clinical chemistry</option>
                <option value="c++" disabled>Microbiology</option>
                <option value="java" selected>Immunology</option>
                <option value="java" selected>Serology</option>
                <option value="java" selected>Urinalysis</option>
                </select> */}
                 <textarea placeholder='Additional notes'
                  className='w-full flex flex-row bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black'>
                  </textarea>
              
              {/* <div className="flex flex-row gap-4">
                  <input type='date' step='7' min='2014-09-08' placeholder='Select date'
                  className='w-1/2 flex flex-row bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100 focus:outline-none transition ease-in-out duration-150 placeholder-black'>
                  </input>

                  <select  
                  className='w-1/2 justify-end align-middle flex flex-row bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100
                    focus:outline-none transition ease-in-out duration-150 placeholder-black'>
                      <option value="Select time" selected hidden>Select preferred time</option>
                      <option value="Confirm password">Morning(8am-12pm)</option>
                      <option value="Confirm password">Afternoon(12pm-4pm)</option>
                      <option value="Confirm password">Evening(4pm-8pm)</option>
                  </select>
              </div> */}
              {/* <select  
                  className='justify-end align-middle flex flex-row bg-red-50 text-olive-950 rounded-xl p-2 mb-4 focus:bg-slate-100
                    focus:outline-none transition ease-in-out duration-150 placeholder-black'>
                      <option value="Select mode of collection" selected hidden>Mode of collection</option>
                      <option value="Home Collection">Home Collection</option>
                      <option value="Lab Visit">Lab Visit</option>
                  </select> */}
                 
              
              
              
              <button type="submit" className='bg-red-500
               text-white font-medium py-2 px-4 rounded-md hover:bg-white 
               align-center transition ease-in duration-200'>
                   Send me a mesage
            </button>
            {/* <p className='text-white mt-4 text-center'>
              Already have an account?
              <a className='text-white hover:underline mt-4 px-1'> Sign in</a>
            </p> */}
          </form>
        </div>
        </div>
        </>
  );
};

export default Form;