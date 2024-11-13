"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

enum Coin {
  Sol,
  Eth,
}

export default function Home() {
  const [coin, setCoin] = useState(Coin.Sol);
  return (
    <div className="flex flex-col items-center h-full">
      {/* header */}
      <div className="bg-gray-700 absolute w-[30%] py-3 top-[10%] rounded-lg flex justify-between">
        <h5 className="text-white text-xl px-2">Cryptic</h5>
        <Link href="/settings" className="ml-auto px-2 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </Link>
      </div>

      <div className="mt-14">
        {/* show balance */}
        <div className="mb-8">
          <h2 className="text-white text-6xl">$0.00</h2>
        </div>
      </div>

      {/* ctas */}
      <div className="flex gap-4 mb-4">
        <button className="flex flex-col items-center justify-center bg-gray-700 h-16 w-16 rounded-lg gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35%"
            height="35%"
            fill="white"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
          </svg>
          <span className="text-white text-sm">Send</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-gray-700 h-16 w-16 rounded-lg gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35%"
            height="35%"
            fill="white"
            className="bi bi-currency-dollar"
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
          </svg>
          <span className="text-white text-sm">Buy</span>
        </button>
      </div>

      {/* coins options */}
      <div className="text-md font-medium text-center text-gray-100 dark:text-gray-400 mb-4">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className={
                coin === Coin.Sol
                  ? "inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 dark:hover:text-gray-300"
              }
              onClick={() => setCoin(Coin.Sol)}
            >
              Solana
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={
                coin === Coin.Eth
                  ? "inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 dark:hover:text-gray-300"
              }
              onClick={() => setCoin(Coin.Eth)}
              aria-current="page"
            >
              Etherium
            </a>
          </li>
        </ul>
      </div>

      {/* wallets */}
      <div className="w-full">
        {/* add wallet */}
        <div className="flex justify-end w-full mb-4">
          <Button
            text="Add Account"
            className="ml-auto w-1/3 px-1 !py-2 text-sm"
          />
        </div>

        {/* all wallets */}
        <div className="flex flex-col gap-2 overflow-y-scroll h-1/2">
          {/* wallet 1 */}
          <div className="bg-gray-700 py-2 px-2 rounded-md">
            <h2 className="text-center text-lg text-white mb-2">Wallet 1</h2>
            <div className="flex flex-col gap-2 bg-slate-900 rounded-md px-4 py-2">
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-white text-md">Address</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-clipboard"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">0x1234567890abcdef</p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-white text-md">Private key</h3>
                  <>
                    {1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-eye-slash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                      </svg>
                    )}
                  </>
                </div>
                <p className="text-gray-400 text-sm">0x1234567890abcdef</p>
              </div>
            </div>
          </div>

          {/* wallet 2 */}
          <div className="bg-gray-700 py-2 px-2 rounded-md">
            <h2 className="text-center text-lg text-white mb-2">Wallet 2</h2>
            <div className="flex flex-col gap-2 bg-slate-900 rounded-md px-4 py-2">
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-white text-md">Address</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-clipboard"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">0x1234567890abcdef</p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-white text-md">Private key</h3>
                  <>
                    {1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-eye-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-eye-slash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                      </svg>
                    )}
                  </>
                </div>
                <p className="text-gray-400 text-sm">0x1234567890abcdef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
