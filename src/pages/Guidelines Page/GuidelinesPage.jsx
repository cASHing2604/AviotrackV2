import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import Fig1 from '/AVioTrack images/Figure201_Sheet1.png';
import Fig2 from '/AVioTrack images/Figure201_Sheet2.png';
import Fig3 from '/AVioTrack images/Figure201_Sheet3.png';
import Fig4 from '/AVioTrack images/Figure202_Sheet1.png';
import Fig5 from '/AVioTrack images/Figure202_Sheet2.png';
import Fig6 from '/AVioTrack images/Figure202_Sheet3.png';
import Fig7 from '/AVioTrack images/Figure202_Sheet4.png';
import Fig8 from '/AVioTrack images/Figure203_Sheet1.png';

const aircraftData = [
  {
    id: 1,
    type: 'Pitot Tube Removal (Refer to Figure 202)',
    manualInstruction: `(1) Remove the screws that attach the pitot tube to the wing and remove the pitot tube.
(2) Disconnect the ram air tube from the pitot.
(3) Disconnect the electrical connectors from the pitot heater and the pitot heat ground.`,
    maintenanceRecord: 'Maintenance record: Last major service on 2024-01-15; engines overhauled at 5000 flight hours; routine inspections every 1000 hours.',
    imageURL: [Fig4, Fig5, Fig6, Fig7]

  },
  {
    id: 2,
    type: 'Pitot Tube Installation (Refer to Figure 202)',
    manualInstruction: `CAUTION: Do not blow through the pitot lines toward the instrument, as damage will occur to the instruments. 
    
CAUTION: You must keep the pitot tube assembly clean and all system components free of blockage and leaks for correct operation. 

(1) Connect the ram air tube to the pitot.
(2) Connect the electrical connectors to the pitot heater and the pitot heat ground.
(3) Do a check of the system for leaks. Refer to Pitot System Leak Test.`,
    maintenanceRecord: 'Maintenance record: Hydraulic systems serviced on 2024-03-10; avionics upgraded; tire inspections every 500 hours.',
    imageURL: [Fig4, Fig5, Fig6, Fig7]

  },
  {
    id: 3,
    type: 'Pitot Tube Heater Insulation Removal (Refer to Figure 202).',
    manualInstruction: `(1) Set the ALT/BATT Master Switch to OFF. 
(2) Make sure that the PITOT HEAT/OFF switch is put in the OFF position. 
(3) Remove the 510BB access plate. Refer to Chapter 6, Access/Inspection Plates - Description And Operation.

CAUTION: Do not disconnect the pitot ram air tube from the pitot tube. 

(4) Remove the screws that attach the pitot tube to the wing. 
(5) Remove and discard all nylon spiral wrap insulation. `,
    maintenanceRecord: 'Date: 2025-07-01 | Aircraft Reg: RP-C1723 | Item Checked: Pitot tube | Status: Pass | Remarks: Clear, no blockage | Inspector: MCA',
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 4,
    type: 'Pitot Tube Heater Insulation Installation',
    manualInstructionHeader: `(1) Cut new nylon spiral wrap into two pieces. Make one piece that is 4.0 inches in length and make one piece that is 8.0 inches in length. 
(2) Start 0.10 inch from the pitot tube and install the 4.0-inch piece of spiral wrap around the pitot tube heater assembly. 
(a) Trim as necessary. 

CAUTION: Do not let the pitot heater assembly wire leads touch the pitot ram air tubing, wire bundles, or heat-senstive components. The pitot tube heater assembly wire leads operate at high temperature.

(3) Install the 8.0-inch piece of spiral wrap around the pitot ram air tube. 
(a) Trim as necessary. 
(4) Attach the pitot tube to the wing with the screws.

CAUTION: Do not blow through the pitot lines toward the instrument, as damage will occur to the instruments if you do. 

CAUTION: Keep the pitot tube assembly clean and make sure that all system components are free of blockage and leaks for correct operation. 

(5) Install the 510BB access plate. Refer to Chapter 6, Access/Inspection Plates - Description And Operation. 
(6) Connect electrical power to the airplane as necessary.`,
    maintenanceRecord: 'margz',
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 5,
    type: 'Sump Assembly Removal (Refer to Figure 202)',
    manualInstruction: `(1) Get access to the sump assembly.
(2) Loosen the nut that connects the static tube to the sump assembly nipple.
(3) Turn the sump assembly and remove the sump assembly from the elbow. `,
    maintenanceRecord: 'yasmin',

  },
  {
    id: 6,
    type: 'Sump Assembly Installation (Refer to Figure 202)',
    manualInstruction: `(1)Attach the sump assembly to the elbow. Apply Teflon® tape (U000912) as necessary where
plastic and metal connections interface.
(2) Connect static tube to the sump assembly nipple with nut.
(3) Do a leak check. Refer to the Static Pressure System Inspection and Leakage Test.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 7,
    type: 'Vertical Speed Indicator (VSI) Removal (Refer to Figure 203).',
    manualInstruction: `(1) Remove the screws that attach the flight instrument panel to the instrument panel.
(2) Disconnect the static tube and the electrical connector from the VSI. 
(3) Remove the screws that attach the VSI to the flight instrument panel.
(4) Remove the VSI from the airplane. `,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 8,
    type: 'Vertical Speed Indicator (VSI) Installation (Refer to Figure 203).',
    manualInstruction: `(1) Put the VSI on the flight instrument panel and attach it with screws.
(2) Connect the static tube and the electrical connector to the VSI.
(3) Attach the flight instrument panel to the instrument panel with the screws.
(4) Do a check of the system for leaks. Refer to the Static System Leak Test.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 9,
    type: 'Alternate Static Source Valve Removal (Refer to Figure 202).',
    manualInstruction: `(1) Behind the stationary control panel, loosen the nuts that attach the two static tubes to the
alternate static source valve. Disconnect the static tubes from the alternate static source valve.
(2) Remove the screws that attach the alternate static source valve to the stationary control panel.
(3) Remove the alternate static source valve from the airplane.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 10,
    type: 'Alternate Static Source Valve Installation',
    manualInstruction: `(1) Put the alternate static source valve behind the stationary control panel and attach the static
tubes with the nuts.
(2) Attach the alternate static source valve to the stationary control panel with the screws.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 11,
    type: 'Blind Encoder Removal (Refer to Figure 202).',
    manualInstruction: `NOTE: The blind encoder is under the dash on the copilot side.

    (1) Disconnect the static tube and the electrical connector and remove the encoder from the airplane.
(2) Loosen the knurled knob and remove the encoder from the mount.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 12,
    type: 'Blind Encoder Installation (Refer to Figure 202).',
    manualInstruction: `(1) Put the encoder on the mount and attach with the knurled knob.
(2) Connect the static tube and the electrical connector to the encoder.
(3) Do a check of the system for leaks. Refer to the Static System Leak Test.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 13,
    type: 'Altimeter Removal (Refer to Figure 203).',
    manualInstruction: `(1) To get access to the back of the altimeter, remove the screws that attach the flight instrument panel to the instrument panel.
(2) Disconnect the static tube and the electrical connector from the altimeter.
(3) Remove the screws that attach the altimeter to the flight instrument panel.
(4) Remove the altimeter from the airplane.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 14,
    type: 'Altimeter Installation (Refer to Figure 203).',
    manualInstruction: `(1) Put the altimeter on the flight instrument panel and attach it with screws.
(2) Connect the static tube and the electrical connector to the altimeter.
(3) Attach the flight instrument panel to the instrument panel with the screws.
(4) Do a check of the system for leaks. Refer to the Static System Leak Test.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 15,
    type: 'Airspeed Indicator Removal (Refer to Figure 203).',
    manualInstruction: `(1) Remove the screws that attach the flight instrument panel to the instrument panel to get access to the back of the airspeed indicator.
(2) Disconnect the static tube and the electrical connector from the airspeed indicator.
(3) Remove the screws that attach the airspeed indicator to the flight instrument panel.
(4) Remove the airspeed indicator from the airplane.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 16,
    type: 'Airspeed Indicator Installation (Refer to Figure 203).',
    manualInstruction: `(1) Put the airspeed indicator on the flight instrument panel and attach with the screws.
(2) Connect the static tube and the electrical connector to the airspeed indicator.
(3) Attach the flight instrument panel to the instrument panel with the screws.
(4) Do a check of the system for leaks. Refer to the Static System Leak Test.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 17,
    type: 'Airspeed Indicator Installation (Refer to Figure 203).',
    manualInstruction: `(1) Put the airspeed indicator on the flight instrument panel and attach with the screws.
(2) Connect the static tube and the electrical connector to the airspeed indicator.
(3) Attach the flight instrument panel to the instrument panel with the screws.
(4) Do a check of the system for leaks. Refer to the Static System Leak Test.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 18,
    type: 'Pitot System Leak Test (Test Procedures)',
    manualInstruction: `(1) Put a piece of tape over the small hole in the lower aft end of the pitot tube.
(2) Attach a piece of rubber or plastic tubing over the pitot tube and close the opposite end of the tube.
(3) Slowly roll up the tube until the airspeed indicator shows in cruise range.
(4) Attach the tube to prevent air pressure change, and lock at the airspeeed after one minute. If there is a leak, the pressure in the system is reduced, and you will see a lower airspeed on the airspeed indicator.
(5) If there is a leak in the system, you must examine and tighten all connections, hoses, and fittings before you do another check.
(6) If there are no leaks, slowly unroll the tubing to let the pressure in the instrument slowly return to ambient pressure.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 19,
    type: 'Static System Leak Test (Test Procedures)',
    manualInstruction: `(1) Make sure that the static system is free from moisture that is caught in the system, and that there
are no restrictions inthe system.
(2) Make sure that there are no changes in or deformations to the airframe surface that can affect
the relation between the air pressure in the static pressure system and true ambient static air
pressure for any flight configuration.
(3) Close the static pressure alternate source control.
(4) Attach a vacuum source to the static pressure source opening.
(5) Slowly apply the vacuum source until the altimeter indication is a 1,000-foot increase inaltitude.
(6) Cut off the vacuum source to make sure that there is a closed system for one minute.
(7) If the altimeter loss is not more than 100 feet after one minute, the system is good and you can slowly release the vacuum until the system goes back to ambient. If the altimeter loss is more than 100 feet, tighten all connections and do the leak test again. If the rate continues to be more than the maximum allowable, do as follows.
(a) Disconnect the static pressure lines from the airspeed indicator and the vertical speed
indicator. Use suitable fittings to connect the lines together so that the altimeter is the only
instrument connected into the static pressure system.
(b) Do the leakage test again to see if the static pressure system or the instruments that you
bypassed are the cause of the leakage. If the instruments are the cause of the leak, you must have the instruments repaired by an approved repair station, or replaced. If the static pressure system is the problem, do as follows.

CAUTION: Do not apply positive pressure with the airspeed indicator or the vertical speed indicator connected to the static pressure system.

 b.1 Attach a source of positive pressure to the static source opening.
 b.2 Slowly apply positive pressure until the altimeter indication decreases 500-feet, and
stops on this value.
b.3 Put a solution of mild soap and water on the line connections and the static source
flange, and look for bubbles to find leaks.
b.4 Tighten all leaking connections. Repair or replace all damaged parts.
b.5 Connect the airspeed and the vertical speed indicators into the static pressure system and do the static system leak test again.`,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 20,
    type: 'Static Lines (Blow Out the Lines)',
    manualInstruction: `(1) Keep static lines clear and keep connections tight. All models have a static source sump which
collects moisture and keeps the system clear. If necessary, disconnect the static line at the first instrument to which it is connected, and then blow line clear with low-pressure air. `,
    maintenanceRecord: 'yasmin',
  },
  {
    id: 21,
    type: 'Pitot Lines (Blow Out the Lines)',
    manualInstruction: `(1) Although the pitot system drains down to the pitot tube opening, condensation can collect at other areas in the system and cause some blockage of the line. To remove the blockage, disconnect the line at the airspeed indicator. With low-pressure air, blow from the indicator end of the line toward the pitot tube. `,
    maintenanceRecord: 'yasmin',
  },
];
const GuidelinesPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [title, setTitle] = useState('Aircraft Lookup');
  
  // For fullscreen image handling
  const [fullscreenItemIndex, setFullscreenItemIndex] = useState(null);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);

  const handlePrev = () => {
    if (fullscreenItemIndex === null) return;
    const images = results[fullscreenItemIndex].imageURL || [];
    setFullscreenImageIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    if (fullscreenItemIndex === null) return;
    const images = results[fullscreenItemIndex].imageURL || [];
    setFullscreenImageIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (fullscreenItemIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") {
        setFullscreenItemIndex(null);
        setFullscreenImageIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenItemIndex]);

  const suggestions = query
    ? aircraftData.filter(item =>
        item.type.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    const filtered = aircraftData.filter(item =>
      item.type.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setShowSuggestions(false);
  };

  const handleKeyDownSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSelectSuggestion = (type) => {
    setQuery(type);
    setShowSuggestions(false);
    const filtered = aircraftData.filter(item => item.type === type);
    setResults(filtered);
  };

  return (
    <div className="pt-48 p-8">
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full text-4xl font-extrabold text-center mb-6 text-gray-900 bg-transparent outline-none"
        />

        <div className="relative">
          <HiOutlineSearch className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
            onKeyDown={handleKeyDownSearch}
            placeholder="Search aircraft..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-auto mt-1">
              {suggestions.map(item => (
                <li
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.type)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.type}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {results.length > 0 ? (
        results.map((item, idx) => (
          <section key={item.id} className="max-w-5xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">{item.type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Manual Instructions</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.manualInstruction}</p>
                {item.imageURL && Array.isArray(item.imageURL) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {item.imageURL.map((src, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={src}
                        alt={`${item.type} - figure ${imgIdx + 1}`}
                        className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                        onClick={() => {
                          setFullscreenItemIndex(idx);
                          setFullscreenImageIndex(imgIdx);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">Maintenance Record</h3>
                <p className="text-gray-700 leading-relaxed">{item.maintenanceRecord}</p>
              </div>
            </div>
          </section>
        ))
      ) : (
        <p className="text-center text-gray-500">Type an aircraft name and press Enter to view data.</p>
      )}

      {fullscreenItemIndex !== null && fullscreenImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => {
            setFullscreenItemIndex(null);
            setFullscreenImageIndex(null);
          }}
        >
          <button
            className="absolute left-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            ‹
          </button>

          <img
            src={results[fullscreenItemIndex].imageURL[fullscreenImageIndex]}
            alt="Fullscreen"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />

          <button
            className="absolute right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default GuidelinesPage;
