// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import fullLogo from './assets/alamatch_logo_full.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <div class="flex justify-center items-center h-screen bg-darkest bg-[url(./assets/dragon.png)] bg-no-repeat bg-center bg-[auto_705px]">
              <div className="max-h-140 w-108 rounded-xl flex flex-col p-5 drop-shadow-xl drop-shadow-darkest bg-gradient-to-b from-mid to-lighter">
                  <img src={fullLogo} alt=""
                       className="w-fit h-22 mx-auto mt-5 drop-shadow-lg drop-shadow-darkest"/>
                  <div
                      className="w-full mt-3 mb-12 flex justify-center font-semibold text-xl tracking-wide text-white drop-shadow-lg drop-shadow-darkest"> PRE-ORDER
                      FORM
                  </div>

                  <form method="post" action="" name="pre-order-form" className="flex flex-col mx-4">
                      <label>
                          <input type="text" name="name" placeholder="Name"
                                 className="bg-white rounded-md w-full h-10 content-center pl-6 mb-4 text-greyed drop-shadow-md drop-shadow-darkest hover:cursor-pointer focus:outline-3 focus:outline-highlight"/>
                      </label>
                      <label>
                          <input type="text" name="email" placeholder="Email"
                                 className="bg-white rounded-md w-full h-10 content-center pl-6 mb-4 text-greyed drop-shadow-md drop-shadow-darkest hover:cursor-pointer focus:outline-3 focus:outline-highlight"/>
                      </label>
                      <label>
                          <input type="text" name="cellnumber" placeholder="Cellphone Number"
                                 className="bg-white rounded-md w-full h-10 content-center pl-6 mb-4 text-greyed drop-shadow-md drop-shadow-darkest hover:cursor-pointer focus:outline-3 focus:outline-highlight"/>
                      </label>
                      <button type="submit" id="submit"
                              className="block mx-auto mt-8 mb-10 w-30 h-12 text-lg font-bold text-white tracking-wide bg-highlight rounded-md drop-shadow-lg drop-shadow-darkest  hover:cursor-pointer focus:outline-3 focus:outline-lighter">
                          SUBMIT
                      </button>
                  </form>
              </div>
          </div>
      </>


      // <>
      //   <div>
      //     <a href="https://vite.dev" target="_blank">
      //       <img src={viteLogo} className="logo" alt="Vite logo" />
      //     </a>
      //     <a href="https://react.dev" target="_blank">
      //       <img src={reactLogo} className="logo react" alt="React logo" />
      //     </a>
      //   </div>
      //   <h1>Vite + React</h1>
      //   <div className="card">
      //     <button onClick={() => setCount((count) => count + 1)}>
      //       count is {count}
      //     </button>
      //     <p>
      //       Edit <code>src/App.jsx</code> and save to test HMR
      //     </p>
      //   </div>
      //   <p className="read-the-docs">
      //     Click on the Vite and React logos to learn more
      //   </p>
      // </>
  )
}

export default App
