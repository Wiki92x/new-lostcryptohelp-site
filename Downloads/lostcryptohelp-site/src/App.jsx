import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [walletsScanned] = useState(532);
  const [assetsRecovered] = useState('$246,780');

  return (
    <div className="text-white bg-gray-950 font-sans min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#111827] to-[#0f172a] py-20 px-6 text-center">
        <div className="mb-8">
          <img src="/logo.svg" alt="LostCryptoHelp Logo" className="h-16 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight">
            Discreet Crypto Recovery for High-Value Losses
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            No bots. No hype. Just blockchain forensics, human intelligence, and serious asset recovery.
          </p>
          <a
            href="#start"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            Start Recovery
          </a>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">{walletsScanned}</p>
            <p className="text-sm text-gray-400">Wallets Scanned</p>
          </div>
          <div>
            <p className="text-3xl font-bold">92%</p>
            <p className="text-sm text-gray-400">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{assetsRecovered}</p>
            <p className="text-sm text-gray-400">Recovered</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24h</p>
            <p className="text-sm text-gray-400">Avg Report Time</p>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="bg-gray-950 py-10">
       <div className="flex justify-center gap-10 grayscale opacity-90">
        <img src="/badges/etherscan.png" className="h-10" alt="Etherscan" />
        <img src="/badges/chainalysis.png" className="h-10" alt="Chainalysis" />
        <img src="/badges/security-audit.png" className="h-10" alt="Security Audit" />
      </div>
     </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-950 py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
          <blockquote>
            “I recovered $14,700 from a wallet I lost in 2019. They’re legit.”
            <br />— T.S., Dubai
          </blockquote>
          <blockquote>
            “No bots. No AI. Just real human support. It actually works.”
            <br />— M.A., Toronto
          </blockquote>
          <blockquote>
            “They walked me through every step. Professional from start to finish.”
            <br />— E.L., Singapore
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 py-10 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Need Help With a Lost Wallet or Funds?
        </h3>
        <a
          href="#start"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
        >
          Start Recovery
        </a>
      </section>
    </div>
  );
}