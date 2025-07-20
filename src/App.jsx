import { useRef, useState } from 'react';
import fullLogo from './assets/alamatch_logo_full.png';
import './App.css';

function App() {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzy2-YvIooVrY0A0XBIiqrGwg4oJSA8NcacRZ7sIfIJeRrC2PB3QOcSAYonBcA3a8f5/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        setIsLoading(true); // start loading state

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: new FormData(form),
        })
            .then(() => {
                alert('Thank you! Your form has been submitted.');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Submission error:', error.message);
                alert('Something went wrong. Please try again.');
                setIsLoading(false); // stop loading if error occurs
            });
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-darkest bg-[url(./assets/dragon.png)] bg-no-repeat bg-center bg-[auto_705px]">
                <div className="max-h-140 w-108 rounded-xl flex flex-col p-5 drop-shadow-xl drop-shadow-darkest bg-gradient-to-b from-mid to-lighter">
                    <img
                        src={fullLogo}
                        alt=""
                        className="w-fit h-22 mx-auto mt-5 drop-shadow-lg drop-shadow-darkest"
                    />
                    <div className="w-full mt-3 mb-12 flex justify-center font-semibold text-xl tracking-wide text-white drop-shadow-lg drop-shadow-darkest">
                        PRE-ORDER FORM
                    </div>

                    <form
                        ref={formRef}
                        name="pre-order-form"
                        className="flex flex-col mx-4"
                        onSubmit={handleSubmit}
                    >
                        <label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="bg-white rounded-md w-full h-10 content-center pl-6 mb-4 text-greyed drop-shadow-md drop-shadow-darkest hover:cursor-pointer focus:outline-3 focus:outline-highlight"
                            />
                        </label>
                        <label>
                            <input
                                required
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="bg-white rounded-md w-full h-10 content-center pl-6 mb-4 text-greyed drop-shadow-md drop-shadow-darkest hover:cursor-pointer focus:outline-3 focus:outline-highlight"
                            />
                        </label>
                        <label>
                            <input
                                required
                                type="text"
                                name="cellnumber"
                                placeholder="Cellphone Number"
                                className="bg-white rounded-md w-full h-10 content-center pl-6 mb-4 text-greyed drop-shadow-md drop-shadow-darkest hover:cursor-pointer focus:outline-3 focus:outline-highlight"
                            />
                        </label>
                        <button
                            type="submit"
                            id="submit"
                            disabled={isLoading}
                            className={`block mx-auto mt-8 mb-10 w-30 h-12 text-lg font-bold tracking-wide rounded-md drop-shadow-lg drop-shadow-darkest focus:outline-3 focus:outline-lighter
                            ${isLoading
                                ? 'bg-gray-400 text-white cursor-not-allowed w-35'
                                : 'bg-highlight text-white hover:cursor-pointer'}`}
                        >
                            {isLoading ? 'Submitting...' : 'SUBMIT'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
