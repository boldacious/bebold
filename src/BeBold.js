import { useState, useEffect } from 'react';

export default function BeBold() {
  const [activeTab, setActiveTab] = useState('collection');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#fff5f0] dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-[#f5f5f5] font-sans p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-8 border-b border-[#ff6f61] dark:border-[#ff9aa2]">
            {['collection', 'about', 'ramblings'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-lg uppercase tracking-wider font-bold border-b-4 transition-all duration-300 ${
                  activeTab === tab
                    ? 'border-[#ff6f61]'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-[#ff6f61]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'collection' ? 'Collection' : tab === 'about' ? 'About Us' : 'Ramblings'}
              </button>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border border-[#ff6f61] dark:border-[#ff9aa2] rounded-full hover:bg-[#ffece6] dark:hover:bg-[#2a2a2a]"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {activeTab === 'collection' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-extrabold tracking-wide text-[#ff6f61]">Boldacious Collection</h2>
            <p className="text-[1.1rem] leading-relaxed max-w-prose">
              Chat with <strong>Bea</strong>, your bold fashion AI companion:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>
                <a href="/chat?task=search" className="underline text-[#d6336c] hover:text-[#ad1457]">Find an item in our collection</a>
              </li>
              <li>
                <a href="/chat?task=match" className="underline text-[#d6336c] hover:text-[#ad1457]">Match something from your wardrobe</a>
              </li>
              <li>
                <a href="/chat?task=chitchat" className="underline text-[#d6336c] hover:text-[#ad1457]">Fashion chitchat with Bea</a>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-6 text-[1.05rem] leading-relaxed">
            <h2 className="text-2xl font-extrabold text-[#ff6f61]">About Us</h2>
            <p><strong>Boldacious</strong> is our experimental playground in fashion, technology, and unapologetic thrift aesthetics.</p>
            <div className="bg-[#fff0ec] dark:bg-[#2b2b2b] p-4 rounded-md">
              <p><strong>Jules</strong> is an AI engineer with a passion for sustainability and fashion. She sees clothing as data, and style as expression.</p>
              <p className="mt-2"><strong>Ellie</strong> is a young and dynamic UI/UX engineer and product manager. She’s here to make you feel seen, heard, and stunning in secondhand.</p>
              <p className="mt-2">They met as colleagues and created Boldacious to disrupt, delight, and do it all with a wink.</p>
            </div>
          </div>
        )}

        {activeTab === 'ramblings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#ff6f61]">Ramblings</h2>
            <p className="text-[1.05rem] leading-relaxed">A peek into the bold minds of Jules and Ellie.</p>
            <ul className="space-y-4">
              <li>
                <a href="/posts/jules-ramble" className="underline text-[#d6336c] hover:text-[#ad1457]">
                  ✧ Thrift and Thrill — by Jules
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reflections on data, dopamine, and denim.</p>
              </li>
              <li>
                <a href="/posts/ellie-ramble" className="underline text-[#d6336c] hover:text-[#ad1457]">
                  ✧ Fabric Feels — by Ellie
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">On feeling yourself through fabric and form.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
