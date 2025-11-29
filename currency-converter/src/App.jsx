import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from "./custom-hooks/usecurrencyinfo.js";
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedamount, setConvertedamount] = useState(0)
  const currencyinfo = useCurrencyInfo(from)
  const options = Object.keys(currencyinfo || {});
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }

  const convert = () => {
    if (!currencyinfo[to]) return;
    setConvertedamount(amount * currencyinfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://imgs.search.brave.com/taTJ1ZgIGq8WPqn1LsfoRFEoNsGxZ2Xfq24hdX7-osQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDIv/MDcwLzg5Mi9zbWFs/bC9hYnN0cmFjdC1i/YW5uZXItZGVzaWdu/LXRlbXBsYXRlLWJs/YWNrLWdsb3NzeS13/aXRoLWdvbGQtbGlu/ZS1hbmQtbGlnaHRp/bmctZWZmZWN0LW9u/LWRhcmstYmFja2dy/b3VuZC1hbmQtdGV4/dHVyZS12ZWN0b3Iu/anBn')`
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                oncurrencychange={(cur) => setFrom(cur)}
                selectcurrency={from}
                onAmountchange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                oncurrencychange={(cur) => setTo(cur)}
                selectcurrency={to}
              />

            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App