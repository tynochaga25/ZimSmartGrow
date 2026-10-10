import React, { useState } from 'react';
import { Smartphone, Camera, TrendingUp, Check, AlertCircle, RefreshCw, X, ChevronRight, Sparkles } from 'lucide-react';

interface FarmerSimulatorProps {
  isOpen?: boolean;
  onClose?: () => void;
  isInline?: boolean;
}

export const FarmerSimulator: React.FC<FarmerSimulatorProps> = ({
  isOpen = true,
  onClose,
  isInline = false,
}) => {
  const [activeTab, setActiveTab] = useState<'ussd' | 'vision' | 'market'>('ussd');

  // USSD State
  const [ussdStep, setUssdStep] = useState<number>(0);
  const [selectedCrop, setSelectedCrop] = useState<string>('Maize');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Goromonzi');
  const [ussdDialInput, setUssdDialInput] = useState<string>('*384*55#');

  // Disease Scanner State
  const [selectedLeaf, setSelectedLeaf] = useState<'blight' | 'armyworm' | 'healthy'>('blight');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<any>({
    disease: 'Northern Corn Leaf Blight (Exserohilum turcicum)',
    confidence: '95.4%',
    severity: 'Moderate (Stage 2)',
    recommendation: 'Apply localized copper oxychloride or bio-fungicide neem spray. Improve spacing to allow air circulation. Estimated yield salvage: 88%.',
    cost: 'US$3.50 per 500ml (Available at Goromonzi Agritex Depot)'
  });

  const handleScanSample = (type: 'blight' | 'armyworm' | 'healthy') => {
    setSelectedLeaf(type);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      if (type === 'blight') {
        setScanResult({
          disease: 'Northern Corn Leaf Blight (Exserohilum turcicum)',
          confidence: '95.4%',
          severity: 'Moderate (Stage 2)',
          recommendation: 'Apply localized copper oxychloride or bio-fungicide neem spray. Improve spacing to allow air circulation. Estimated yield salvage: 88%.',
          cost: 'US$3.50 per 500ml (Available at Goromonzi Agritex Depot)'
        });
      } else if (type === 'armyworm') {
        setScanResult({
          disease: 'Fall Armyworm (Spodoptera frugiperda)',
          confidence: '98.1%',
          severity: 'High Urgent (Action within 48h)',
          recommendation: 'Crush egg masses by hand. Apply bio-pesticide (Bacillus thuringiensis) or sand-ash mixture in maize whorls at dusk when larvae feed.',
          cost: 'Low cost: Free cultural method + US$2.00 local bio-amendment'
        });
      } else {
        setScanResult({
          disease: 'Healthy Vigorous Crop Foliage',
          confidence: '99.2%',
          severity: 'Optimal (No Pathogens Detected)',
          recommendation: 'Maintain current moisture balance. Top dress with Ammonium Nitrate (AN) at knee-high stage in 10 days before forecasted rain.',
          cost: 'Routine maintenance'
        });
      }
    }, 600);
  };

  const ussdScreens = [
    {
      title: "ZimSmart Grow USSD Gateway",
      prompt: "Dial *384*55# (Zero-rated on Econet / NetOne)",
      action: "Press Send to Connect",
      type: "dial"
    },
    {
      title: "Main Menu",
      prompt: "Welcome to ZimSmart Grow!\n1. Hyper-Local Planting Date\n2. Soil & Rain Forecast\n3. Pest & Disease Alert\n4. Live Market Grain Prices\n5. Change Language (Shona / Ndebele)",
      options: ["1", "2", "3", "4", "5"]
    },
    {
      title: "Select Province & District",
      prompt: "Select Your Farming Ward:\n1. Goromonzi (Mashonaland East)\n2. Mazowe (Mashonaland Central)\n3. Chivi (Masvingo)\n4. Mutasa (Manicaland)",
      options: ["1", "2", "3", "4"]
    },
    {
      title: "Agro-Ecological Advisory Output",
      prompt: `[Goromonzi Ward 4 - Natural Region IIb]\nOptimal Planting Window: Nov 18 - Nov 24\nForecast: 22mm rainfall expected Tuesday.\nRecommendation: Dry planting recommended for White Maize (SC 719). Apply basal compound D fertilizer 5cm beside seed.\n\nReply 1 to receive daily SMS reminders.`,
      options: ["1. Save Reminder", "0. Back to Main Menu"]
    }
  ];

  if (!isOpen && !isInline) return null;

  return (
    <div className={isInline ? 'w-full my-8' : 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs'}>
      <div className={`bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden w-full ${isInline ? 'max-w-5xl mx-auto' : 'max-w-4xl max-h-[90vh] flex flex-col'}`}>
        {/* Modal / Card Header */}
        <div className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Interactive Technology Simulator
              </h3>
              <p className="text-xs text-neutral-400">
                Test the farmer-facing tools in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="flex items-center bg-neutral-800 p-1 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveTab('ussd')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'ussd'
                    ? 'bg-emerald-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Offline USSD (*384*55#)
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'vision'
                    ? 'bg-emerald-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                AI Crop Doctor (WhatsApp)
              </button>
              <button
                onClick={() => setActiveTab('market')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'market'
                    ? 'bg-emerald-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Off-Take Linkage
              </button>
            </div>

            {onClose && !isInline && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ml-2"
                aria-label="Close simulator"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto">
          {/* TAB 1: USSD SIMULATOR */}
          {activeTab === 'ussd' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Feature Phone Mockup */}
              <div className="md:col-span-6 flex justify-center">
                <div className="w-[300px] bg-neutral-800 rounded-3xl p-4 shadow-xl border-4 border-neutral-700 flex flex-col items-center">
                  {/* Phone speaker */}
                  <div className="w-12 h-1.5 bg-neutral-600 rounded-full mb-3" />

                  {/* Retro Monochrome LCD Screen */}
                  <div className="w-full bg-[#9EA792] border-2 border-neutral-600 rounded-lg p-3 text-neutral-900 font-mono text-xs min-h-[190px] shadow-inner flex flex-col justify-between">
                    <div className="whitespace-pre-wrap leading-tight text-[11px]">
                      {ussdScreens[ussdStep]?.prompt}
                    </div>

                    <div className="mt-2 pt-2 border-t border-neutral-600/50 flex justify-between items-center text-[10px] text-neutral-700">
                      <span>ZIM-TELCO 2G</span>
                      <span>[OK / REPLY]</span>
                    </div>
                  </div>

                  {/* Feature Phone Keypad */}
                  <div className="w-full mt-4 grid grid-cols-3 gap-2 px-2">
                    {ussdStep === 0 ? (
                      <button
                        onClick={() => setUssdStep(1)}
                        className="col-span-3 py-2.5 rounded-lg bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-600 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>Dial *384*55#</span>
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => setUssdStep((prev) => Math.min(prev + 1, 3))}
                          className="col-span-2 py-2 rounded bg-neutral-700 text-white font-bold text-xs hover:bg-neutral-600 shadow-xs"
                        >
                          Select 1 (Next)
                        </button>
                        <button
                          onClick={() => setUssdStep(0)}
                          className="py-2 rounded bg-red-800 text-white font-bold text-xs hover:bg-red-700 shadow-xs"
                        >
                          End
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Explanatory Context for Investors */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Works On Any 2G Nokia or Itel Phone</span>
                </div>
                <h4 className="text-xl font-bold text-neutral-900">
                  Zero Data Cost. Zero Barriers.
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  While competitors require 50MB Android apps and expensive cellular mobile data, ZimSmart Grow runs natively over telco USSD gateways. Farmers dial a 6-digit code, navigate in Shona, and receive localized agronomic advisories without spending a single cent on mobile data.
                </p>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
                  <div className="font-bold text-neutral-800 uppercase tracking-wider">
                    Interactive Walkthrough:
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setUssdStep(1)}
                      className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer ${ussdStep === 1 ? 'bg-emerald-700 text-white' : 'bg-neutral-200 text-neutral-800'}`}
                    >
                      Step 1: Menu
                    </button>
                    <button
                      onClick={() => setUssdStep(2)}
                      className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer ${ussdStep === 2 ? 'bg-emerald-700 text-white' : 'bg-neutral-200 text-neutral-800'}`}
                    >
                      Step 2: Region
                    </button>
                    <button
                      onClick={() => setUssdStep(3)}
                      className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer ${ussdStep === 3 ? 'bg-emerald-700 text-white' : 'bg-neutral-200 text-neutral-800'}`}
                    >
                      Step 3: Advisory
                    </button>
                    <button
                      onClick={() => setUssdStep(0)}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-neutral-200 text-neutral-800 ml-auto cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: AI CROP DOCTOR (WHATSAPP VISION) */}
          {activeTab === 'vision' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* WhatsApp Interface Mockup */}
              <div className="md:col-span-6 border border-neutral-200 rounded-2xl overflow-hidden shadow-md">
                {/* WhatsApp header */}
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-300 flex items-center justify-center text-emerald-900 font-bold text-sm">
                    ZG
                  </div>
                  <div>
                    <div className="text-sm font-bold">ZimSmart AI Crop Doctor</div>
                    <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online · Verified Agronomist Bot</span>
                    </div>
                  </div>
                </div>

                {/* Chat feed */}
                <div className="bg-[#EFEAE2] p-4 min-h-[340px] space-y-3 text-xs">
                  {/* Bot greeting */}
                  <div className="bg-white rounded-lg p-2.5 max-w-[85%] shadow-xs">
                    <p className="font-medium text-neutral-800">
                      Mhoro! Send a photo of your damaged crop leaf or pest. Our AI will diagnose the problem and prescribe an affordable local remedy in seconds.
                    </p>
                    <span className="text-[10px] text-neutral-400 block text-right mt-1">09:42 AM</span>
                  </div>

                  {/* Farmer uploaded photo */}
                  <div className="bg-[#DCF8C6] rounded-lg p-2 max-w-[85%] ml-auto shadow-xs">
                    <div className="rounded overflow-hidden mb-1.5 border border-emerald-200">
                      <img
                        src="/src/assets/images/crop_disease_scanner_1791564923997.jpg"
                        alt="Crop leaf sample under examination"
                        className="w-full h-36 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-neutral-800 font-medium">
                      "Help, my maize has these dry grey spots in Ward 4."
                    </p>
                    <span className="text-[10px] text-neutral-500 block text-right mt-1">09:43 AM · ✓✓</span>
                  </div>

                  {/* AI Diagnosis Response */}
                  <div className="bg-white rounded-lg p-3 max-w-[90%] shadow-xs border-l-3 border-emerald-600">
                    {isScanning ? (
                      <div className="flex items-center gap-2 py-2 text-neutral-600">
                        <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                        <span>Running Computer Vision Agronomy Model...</span>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-neutral-900">{scanResult.disease}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                            {scanResult.confidence}
                          </span>
                        </div>
                        <div className="text-[11px] text-amber-800 font-semibold">
                          Severity: {scanResult.severity}
                        </div>
                        <p className="text-[11px] text-neutral-700 leading-relaxed">
                          {scanResult.recommendation}
                        </p>
                        <div className="pt-1.5 border-t border-neutral-100 text-[10px] text-emerald-800 font-medium">
                          Estimated Cost: {scanResult.cost}
                        </div>
                        <span className="text-[10px] text-neutral-400 block text-right mt-1">09:43 AM</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Selector buttons */}
              <div className="md:col-span-6 space-y-4">
                <h4 className="text-lg font-bold text-neutral-900">
                  Test Sample Field Cases
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Click a test crop condition below to see how the computer vision algorithm evaluates leaf pathology in real-time:
                </p>

                <div className="space-y-2.5">
                  <button
                    onClick={() => handleScanSample('blight')}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      selectedLeaf === 'blight'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-neutral-900">
                        1. Northern Corn Leaf Blight
                      </div>
                      <div className="text-xs text-neutral-500">
                        Maize foliar fungal lesions (Severe in high humidity)
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </button>

                  <button
                    onClick={() => handleScanSample('armyworm')}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      selectedLeaf === 'armyworm'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-neutral-900">
                        2. Fall Armyworm Infestation
                      </div>
                      <div className="text-xs text-neutral-500">
                        Whorl feeding damage and frass deposits
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </button>

                  <button
                    onClick={() => handleScanSample('healthy')}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      selectedLeaf === 'healthy'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-neutral-900">
                        3. Healthy Vigorous Foliage
                      </div>
                      <div className="text-xs text-neutral-500">
                        Nutrient-balanced knee-high stage
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                  <span className="font-semibold text-neutral-900">Proprietary Edge Model:</span> Uses compressed MobileNet architectures optimized for low-bandwidth WhatsApp compression without sacrificing agronomic diagnostic accuracy.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MARKET OFF-TAKE LINKAGE */}
          {activeTab === 'market' && (
            <div className="space-y-6">
              <div className="max-w-2xl">
                <h4 className="text-lg font-bold text-neutral-900">
                  Live Forward Contract Matching Portal
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Aggregating smallholder harvests to negotiate institutional buyer pricing directly with grain millers, supermarkets, and export off-takers.
                </p>
              </div>

              <div className="overflow-x-auto border border-neutral-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-100 text-neutral-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Commodity</th>
                      <th className="p-3">Verified Buyer</th>
                      <th className="p-3">Guaranteed Price (USD)</th>
                      <th className="p-3">Middleman Comparison</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 font-medium">
                    <tr className="hover:bg-neutral-50">
                      <td className="p-3 font-bold text-neutral-900">White Maize (Grade A)</td>
                      <td className="p-3 text-neutral-600">National Foods Millers Ltd</td>
                      <td className="p-3 text-emerald-800 font-bold">$335 / Metric Ton</td>
                      <td className="p-3 text-red-600">$210 / MT (43% lower)</td>
                      <td className="p-3">
                        <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">
                          Matched & Locked
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-3 font-bold text-neutral-900">Nyimo / Roundnuts</td>
                      <td className="p-3 text-neutral-600">Freshmark Supermarkets</td>
                      <td className="p-3 text-emerald-800 font-bold">$0.85 / Kg</td>
                      <td className="p-3 text-red-600">$0.50 / Kg (41% lower)</td>
                      <td className="p-3">
                        <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">
                          Matched & Locked
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-3 font-bold text-neutral-900">Sorghum (Red Swazi)</td>
                      <td className="p-3 text-neutral-600">Delta Beverages Ltd</td>
                      <td className="p-3 text-emerald-800 font-bold">$290 / Metric Ton</td>
                      <td className="p-3 text-red-600">$185 / MT (36% lower)</td>
                      <td className="p-3">
                        <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold">
                          Aggregating Hub
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-black text-emerald-800 font-display tabular-nums">+$125 / MT</div>
                  <div className="text-xs font-semibold text-neutral-800 mt-1">Average Farmer Net Premium</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-black text-emerald-800 font-display tabular-nums">100%</div>
                  <div className="text-xs font-semibold text-neutral-800 mt-1">EcoCash Direct Settlement</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-2xl font-black text-emerald-800 font-display tabular-nums">0 Middlemen</div>
                  <div className="text-xs font-semibold text-neutral-800 mt-1">Disintermediation Policy</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-neutral-100 px-6 py-3 border-t border-neutral-200 flex flex-wrap items-center justify-between text-xs text-neutral-600">
          <span>Simulation environment grounded in Zimbabwe field pilot metrics</span>
          <span className="font-semibold text-neutral-900">ZimSmart Grow Prototype Engine</span>
        </div>
      </div>
    </div>
  );
};
