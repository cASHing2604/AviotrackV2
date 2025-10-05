import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import Fig1 from '../../images/Figure201_Sheet1.png';
import Fig2 from '../../images/Figure201_Sheet2.png';
import Fig3 from '../../images/Figure201_Sheet3.png';
import Fig4 from '../../images/Figure202_Sheet1.png';
import Fig5 from '../../images/Figure202_Sheet2.png';
import Fig6 from '../../images/Figure202_Sheet3.png';
import Fig7 from '../../images/Figure202_Sheet4.png';
import Fig8 from '../../images/Figure203_Sheet1.png';
import Fuse from "fuse.js";

const aircraftData = [
  {
    id: 1,
    type: 'Pitot Tube Removal',
    manualInstruction: `<ol style="padding-left: 20px;">
 <div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">Remove the screws that attach the pitot tube to the wing and remove the pitot tube.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">Disconnect the ram air tube from the pitot.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">Disconnect the electrical connectors from the pitot heater and the pitot heat ground.
    </div>
  </div>
</div>`,
manualPage: 688,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot tube removal inspection</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006). Upon inspection, no corrosion; threads and mounting holes intact</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot tube installation check</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); torque within limits; alignment correct</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot heat electrical connection</td>
        <td>Pass</td>
        <td>Secure connections AMM 34-11-00 page 201 (Revision date: Jul 03 2006); correct polarity; amperage draw within limits</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-15</td>
        <td>RP-C1723</td>
        <td>Pitot tube heating functional test</td>
        <td>Pass</td>
        <td>Even heating across element AMM 34-11-00 page 201 (Revision date: Jul 03 2006); resistance within AMM spec</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-18</td>
        <td>RP-C1723</td>
        <td>Pitot system operational test</td>
        <td>Pass</td>
        <td>All connected instruments responded correctly to simulated airflow AMM 34-11-00 page 201 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]

  },
  {
    id: 2,
    type: 'Pitot Tube Installation',
    manualInstruction: `
<strong style="color: red;">CAUTION:</strong> Do not blow through the pitot lines toward the instrument, as damage will occur to the instruments.<br><br>
<strong style="color: red;">CAUTION:</strong> You must keep the pitot tube assembly clean and all system components free of blockage and leaks for correct operation.<br><br>

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">Connect the ram air tube to the pitot.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">Connect the electrical connectors to the pitot heater and the pitot heat ground.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">Do a check of the system for leaks. Refer to Pitot System Leak Test.</div>
  </div>
</div>
`,
manualPage: 688,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot tube removal inspection</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); no corrosion; threads and mounting holes intact</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot tube installation check</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); torque within limits; alignment correct</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot heat electrical connection</td>
        <td>Pass</td>
        <td>Secure connections AMM 34-11-00 page 201 (Revision date: Jul 03 2006); correct polarity; amperage draw within limits</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-15</td>
        <td>RP-C1723</td>
        <td>Pitot tube heating functional test</td>
        <td>Pass</td>
        <td>Even heating across element AMM 34-11-00 page 201 (Revision date: Jul 03 2006); resistance within AMM spec</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-18</td>
        <td>RP-C1723</td>
        <td>Pitot system operational test</td>
        <td>Pass</td>
        <td>All connected instruments responded correctly to simulated airflow AMM 34-11-00 page 201 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]

  },
  {
    id: 3,
    type: 'Pitot Tube Heater Insulation Removal',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">Set the ALT/BATT Master Switch to OFF.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">Make sure that the PITOT HEAT/OFF switch is in the OFF position.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">Remove the 510BB access plate. Refer to Chapter 6, Access/Inspection Plates – Description and Operation.</div>
  </div>
</div>

<br>
<strong style="color: red;">CAUTION:</strong> Do not disconnect the pitot ram air tube from the pitot tube.<br><br>

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">Remove the screws that attach the pitot tube to the wing.</div>
  </div>
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(5)</div>
    <div style="display: table-cell;">Remove and discard all nylon spiral wrap insulation.</div>
  </div>
</div> `,
manualPage: 696,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Pitot heater insulation removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); insulation wrap intact; no signs of melting or cracking</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-08</td>
        <td>RP-C1723</td>
        <td>Pitot heater insulation installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); proper clearance maintained; secured with spiral wrap</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-08</td>
        <td>RP-C1723</td>
        <td>Pitot heater functional check</td>
        <td>Pass</td>
        <td>Even heat distribution; amperage within limits; AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-10</td>
        <td>RP-C1723</td>
        <td>Post-insulation leak check</td>
        <td>Pass</td>
        <td>Leak rate within AMM 34-11-00 page 209 (Revision date: Jul 03 2006) limits </td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-12</td>
        <td>RP-C1723</td>
        <td>Operational test</td>
        <td>Pass</td>
        <td>System readings stable during simulated airflow; AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
 id: 4,
type: 'Pitot Tube Heater Insulation Installation',
manualInstruction: `

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Cut new nylon spiral wrap into two pieces. Make one piece 4.0 inches in length and one piece 8.0 inches in length.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Start 0.10 inch from the pitot tube and install the 4.0-inch piece of spiral wrap around the pitot tube heater assembly.<br>
      (a) Trim as necessary.
    </div>
  </div>
</div>

<br>
<span style="color: red;">CAUTION:</span> Do not let the pitot heater assembly wire leads touch the pitot ram air tubing, wire bundles, or heat-sensitive components. The pitot tube heater assembly wire leads operate at high temperatures.<br><br>

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Install the 8.0-inch piece of spiral wrap around the pitot ram air tube.<br>
      (a) Trim as necessary.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Attach the pitot tube to the wing with the screws.
    </div>
  </div>
</div>

<br>
<span style="color: red;">CAUTION:</span> Do not blow through the pitot lines toward the instrument, as damage will occur to the instruments if you do.<br><br>
<span style="color: red;">CAUTION:</span> Keep the pitot tube assembly clean and make sure that all system components are free of blockage and leaks for correct operation.<br><br>

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(5)</div>
    <div style="display: table-cell;">
      Install the 510BB access plate. Refer to Chapter 6, Access/Inspection Plates – Description And Operation.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(6)</div>
    <div style="display: table-cell;">
      Connect electrical power to the airplane as necessary.
    </div>
  </div>
</div>
`,
manualPage: 696,
maintenanceRecord: `
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th>Date</th>
      <th>A/C Reg.</th>
      <th>Task</th>
      <th>Status</th>
      <th>Remarks</th>
      <th>Technician</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2025-06-10</td>
      <td>RP-C1723</td>
      <td>Pitot heater insulation removal</td>
      <td>Pass</td>
      <td>Removed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); insulation wrap intact; no signs of melting or cracking</td>
      <td>MCA</td>
    </tr>
    <tr>
      <td>2025-06-08</td>
      <td>RP-C1723</td>
      <td>Pitot heater insulation installation</td>
      <td>Pass</td>
      <td>Installed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); proper clearance maintained; secured with spiral wrap</td>
      <td>MCA</td>
    </tr>
    <tr>
      <td>2025-06-08</td>
      <td>RP-C1723</td>
      <td>Pitot heater functional check</td>
      <td>Pass</td>
      <td>Even heat distribution; amperage within AMM 34-11-00 page 209 (Revision date: Jul 03 2006) limits</td>
      <td>MCA</td>
    </tr>
    <tr>
      <td>2025-06-10</td>
      <td>RP-C1723</td>
      <td>Post-insulation leak check</td>
      <td>Pass</td>
      <td>Leak rate within AMM 34-11-00 page 209 (Revision date: Jul 03 2006) limits </td>
      <td>JAD</td>
    </tr>
    <tr>
      <td>2025-06-12</td>
      <td>RP-C1723</td>
      <td>Operational test</td>
      <td>Pass</td>
      <td>System readings stable during simulated airflow AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
      <td>RBT</td>
    </tr>
  </tbody>
</table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 5,
    type: 'Sump Assembly Removal',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Get access to the sump assembly.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Loosen the nut that connects the static tube to the sump assembly nipple.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Turn the sump assembly and remove it from the elbow.
    </div>
  </div>
</div> `,
manualPage: 688,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Sump assembly removal inspection</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); no cracks; O-rings in good condition</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Sump assembly installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); Teflon® tape applied; nut torqued to spec</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Static tube connection to sump nipple</td>
        <td>Pass</td>
        <td>Nut torqued to AMM 34-11-00 page 201 (Revision date: Jul 03 2006) spec; no cross-threading detected</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Static system leak check (post-install)</td>
        <td>Pass</td>
        <td>Leak rate within AMM 34-11-00 page 201 (Revision date: Jul 03 2006) limits</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-12</td>
        <td>RP-C1723</td>
        <td>Static system functional check</td>
        <td>Pass</td>
        <td>Altimeter and VSI responded accurately in operational test AMM 34-11-00 page 201 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 6,
    type: 'Sump Assembly Installation',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Attach the sump assembly to the elbow. Apply Teflon® tape (U000912) as necessary where plastic and metal connections interface.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Connect the static tube to the sump assembly nipple with the nut.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Do a leak check. Refer to the <em>Static Pressure System Inspection and Leakage Test</em>.
    </div>
  </div>
</div>`,
manualPage: 688,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Sump assembly removal inspection</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); no cracks; O-rings in good condition</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Sump assembly installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 201 (Revision date: Jul 03 2006); Teflon® tape applied; nut torqued to spec</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Static tube connection to sump nipple</td>
        <td>Pass</td>
        <td>Nut torqued to AMM 34-11-00 page 201 (Revision date: Jul 03 2006) spec; no cross-threading detected</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-16</td>
        <td>RP-C1723</td>
        <td>Static system leak check (post-install)</td>
        <td>Pass</td>
        <td>Leak rate within AMM 34-11-00 page 201 (Revision date: Jul 03 2006) limits</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-12</td>
        <td>RP-C1723</td>
        <td>Static system functional check</td>
        <td>Pass</td>
        <td>Altimeter and VSI responded accurately in operational test AMM 34-11-00 page 201 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 7,
    type: 'Vertical Speed Indicator (VSI) Removal',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Remove the screws that attach the flight instrument panel to the instrument panel.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Disconnect the static tube and the electrical connector from the VSI.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Remove the screws that attach the VSI to the flight instrument panel.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Remove the VSI from the airplane.
    </div>
  </div>
</div>`,
manualPage: 696,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-05</td>
        <td>RP-C1723</td>
        <td>VSI removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); fittings capped to prevent contamination</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-05</td>
        <td>RP-C1723</td>
        <td>VSI installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 209; fittings torqued (Revision date: Jul 03 2006); lines reconnected without leaks</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-05</td>
        <td>RP-C1723</td>
        <td>Static line integrity check (VSI)</td>
        <td>Pass</td>
        <tdLeak check passed; no pressure decay AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-06</td>
        <td>RP-C1723</td>
        <td>VSI calibration check</td>
        <td>Pass</td>
        <td>Zeroed at rest; accurate indications in simulated climb/descent AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-07</td>
        <td>RP-C1723</td>
        <td>Post-install operational test</td>
        <td>Pass</td>
        <td>Stable readings during test flight AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig8]
  },
  {
    id: 8,
    type: 'Vertical Speed Indicator (VSI) Installation',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Put the VSI on the flight instrument panel and attach it with screws.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Connect the static tube and the electrical connector to the VSI.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Attach the flight instrument panel to the instrument panel with the screws.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Do a check of the system for leaks. Refer to the Static System Leak Test.
    </div>
  </div>
</div>`,
manualPage: 696,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-05</td>
        <td>RP-C1723</td>
        <td>VSI removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); fittings capped to prevent contamination</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-05</td>
        <td>RP-C1723</td>
        <td>VSI installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); fittings torqued; lines reconnected without leaks</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-05</td>
        <td>RP-C1723</td>
        <td>Static line integrity check (VSI)</td>
        <td>Pass</td>
        <tdLeak check passed; no pressure decay AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-06</td>
        <td>RP-C1723</td>
        <td>VSI calibration check</td>
        <td>Pass</td>
        <td>Zeroed at rest; accurate indications in simulated climb/descent AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-07</td>
        <td>RP-C1723</td>
        <td>Post-install operational test</td>
        <td>Pass</td>
        <td>Stable readings during test flight AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig8]
  },
  {
    id: 9,
    type: 'Alternate Static Source Valve Removal',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Behind the stationary control panel, loosen the nuts that attach the two static tubes to the alternate static source valve. Disconnect the static tubes from the alternate static source valve.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Remove the screws that attach the alternate static source valve to the stationary control panel.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Remove the alternate static source valve from the airplane.
    </div>
  </div>
</div>`,
manualPage: 696,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-03</td>
        <td>RP-C1723</td>
        <td>Alternate static source valve removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); valve body free of cracks; seals in good condition</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-03</td>
        <td>RP-C1723</td>
        <td>Alternate static source valve installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); fittings torqued; handle alignment correct</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-03</td>
        <td>RP-C1723</td>
        <td>Leak check (alternate static)</td>
        <td>Pass</td>
        <td>Leak rate within limits AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-04</td>
        <td>RP-C1723</td>
        <td>Functional check (alt static operation)</td>
        <td>Pass</td>
        <td>Altimeter, VSI, and ASI respond correctly when valve activated AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-06-04</td>
        <td>RP-C1723</td>
        <td>Post-install inspection</td>
        <td>Pass</td>
        <td>All securing hardware safety-wired; placard legible AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 10,
    type: 'Alternate Static Source Valve Installation',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Put the alternate static source valve behind the stationary control panel and attach the static tubes with the nuts.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Attach the alternate static source valve to the stationary control panel with the screws.
    </div>
  </div>
</div>`,
manualPage: 696,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-03</td>
        <td>RP-C1723</td>
        <td>Alternate static source valve removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); valve body free of cracks; seals in good condition</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-03</td>
        <td>RP-C1723</td>
        <td>Alternate static source valve installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 209 (Revision date: Jul 03 2006); fittings torqued; handle alignment correct</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-03</td>
        <td>RP-C1723</td>
        <td>Leak check (alternate static)</td>
        <td>Pass</td>
        <td>Leak rate within limits AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-04</td>
        <td>RP-C1723</td>
        <td>Functional check (alt static operation)</td>
        <td>Pass</td>
        <td>Altimeter, VSI, and ASI respond correctly when valve activated AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-06-04</td>
        <td>RP-C1723</td>
        <td>Post-install inspection</td>
        <td>Pass</td>
        <td>All securing hardware safety-wired; placard legible AMM 34-11-00 page 209 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 11,
    type: 'Blind Encoder Removal',
    manualInstruction: `<strong>NOTE:</strong> The blind encoder is under the dash on the copilot side.<br><br>

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Disconnect the static tube and the electrical connector, then remove the encoder from the airplane.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Loosen the knurled knob and remove the encoder from the mount.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-01</td>
        <td>RP-C1723</td>
        <td>Blind encoder removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); wiring disconnected and tagged; static line capped</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-01</td>
        <td>RP-C1723</td>
        <td>Blind encoder installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); wiring reconnected; fittings sealed</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-01</td>
        <td>RP-C1723</td>
        <td>Static system leak check</td>
        <td>Pass</td>
        <td>No leaks detected; needle steady during test AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-02</td>
        <td>RP-C1723</td>
        <td>Altitude reporting check</td>
        <td>Pass</td>
        <td>Encoder output matches altimeter within allowable error AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-06-02</td>
        <td>RP-C1723</td>
        <td>Post-install inspection</td>
        <td>Pass</td>
        <td>Unit secured; wiring harness strain-relieved AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 12,
    type: 'Blind Encoder Installation',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Put the encoder on the mount and attach it with the knurled knob.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Connect the static tube and the electrical connector to the encoder.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Do a check of the system for leaks. Refer to the Static System Leak Test.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-01</td>
        <td>RP-C1723</td>
        <td>Blind encoder removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); wiring disconnected and tagged; static line capped</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-01</td>
        <td>RP-C1723</td>
        <td>Blind encoder installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); wiring reconnected; fittings sealed</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-06-01</td>
        <td>RP-C1723</td>
        <td>Static system leak check</td>
        <td>Pass</td>
        <td>No leaks detected; needle steady during test AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-06-02</td>
        <td>RP-C1723</td>
        <td>Altitude reporting check</td>
        <td>Pass</td>
        <td>Encoder output matches altimeter within allowable error AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-06-02</td>
        <td>RP-C1723</td>
        <td>Post-install inspection</td>
        <td>Pass</td>
        <td>Unit secured; wiring harness strain-relieved AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig4, Fig5, Fig6, Fig7]
  },
  {
    id: 13,
    type: 'Altimeter Removal',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      To get access to the back of the altimeter, remove the screws that attach the flight instrument panel to the instrument panel.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Disconnect the static tube and the electrical connector from the altimeter.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Remove the screws that attach the altimeter to the flight instrument panel.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Remove the altimeter from the airplane.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-30</td>
        <td>RP-C1723</td>
        <td>Altimeter removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); fittings capped to avoid contamination</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-30</td>
        <td>RP-C1723</td>
        <td>Altimeter installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); fittings sealed; mounting screws torqued</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-30</td>
        <td>RP-C1723</td>
        <td>Leak check (altimeter circuit)</td>
        <td>Pass</td>
        <td>No pressure decay during test AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-31</td>
        <td>RP-C1723</td>
        <td>Calibration check</td>
        <td>Pass</td>
        <td>Indications within allowable error range AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-31</td>
        <td>RP-C1723</td>
        <td>Post-install operational test</td>
        <td>Pass</td>
        <td>Accurate readings during test flight AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig8]
  },
  {
    id: 14,
    type: 'Altimeter Installation',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Put the altimeter on the flight instrument panel and attach it with screws.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Connect the static tube and the electrical connector to the altimeter.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Attach the flight instrument panel to the instrument panel with the screws.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Do a check of the system for leaks. Refer to the Static System Leak Test.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-30</td>
        <td>RP-C1723</td>
        <td>Altimeter removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); fittings capped to avoid contamination</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-30</td>
        <td>RP-C1723</td>
        <td>Altimeter installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); fittings sealed; mounting screws torqued</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-30</td>
        <td>RP-C1723</td>
        <td>Leak check (altimeter circuit)</td>
        <td>Pass</td>
        <td>No pressure decay during test AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-31</td>
        <td>RP-C1723</td>
        <td>Calibration check</td>
        <td>Pass</td>
        <td>Indications within allowable error range AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-31</td>
        <td>RP-C1723</td>
        <td>Post-install operational test</td>
        <td>Pass</td>
        <td>Accurate readings during test flight AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig8]
  },
  {
    id: 15,
    type: 'Airspeed Indicator Removal',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Remove the screws that attach the flight instrument panel to the instrument panel to get access to the back of the airspeed indicator.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Disconnect the static tube and the electrical connector from the airspeed indicator.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Remove the screws that attach the airspeed indicator to the flight instrument panel.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Remove the airspeed indicator from the airplane.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-28</td>
        <td>RP-C1723</td>
        <td>Airspeed indicator removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); pitot/static lines capped; instrument face protected</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-28</td>
        <td>RP-C1723</td>
        <td>Airspeed indicator installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); fittings torqued; panel screws secured</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-28</td>
        <td>RP-C1723</td>
        <td>Pitot/static line connection check</td>
        <td>Pass</td>
        <td>No cross-threading; fittings tight; leak-free AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-29</td>
        <td>RP-C1723</td>
        <td>Calibration/functional test</td>
        <td>Pass</td>
        <td>Accurate readings in simulated airflow per AMM 34-11-00 page 211 (Revision date: Jul 03 2006) limits</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-29</td>
        <td>RP-C1723</td>
        <td>Post-install inspection</td>
        <td>Pass</td>
        <td>Instrument aligned; no panel gaps; lighting functional AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig8]
  },
  {
    id: 16,
    type: 'Airspeed Indicator Installation',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Put the airspeed indicator on the flight instrument panel and attach with the screws.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Connect the static tube and the electrical connector to the airspeed indicator.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Attach the flight instrument panel to the instrument panel with the screws.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Do a check of the system for leaks. Refer to the Static System Leak Test.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-28</td>
        <td>RP-C1723</td>
        <td>Airspeed indicator removal</td>
        <td>Pass</td>
        <td>Removed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); pitot/static lines capped; instrument face protected</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-28</td>
        <td>RP-C1723</td>
        <td>Airspeed indicator installation</td>
        <td>Pass</td>
        <td>Installed per AMM 34-11-00 page 211 (Revision date: Jul 03 2006); fittings torqued; panel screws secured</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-28</td>
        <td>RP-C1723</td>
        <td>Pitot/static line connection check</td>
        <td>Pass</td>
        <td>No cross-threading; fittings tight; leak-free AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-29</td>
        <td>RP-C1723</td>
        <td>Calibration/functional test</td>
        <td>Pass</td>
        <td>Accurate readings in simulated airflow per AMM 34-11-00 page 211 (Revision date: Jul 03 2006) limits</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-29</td>
        <td>RP-C1723</td>
        <td>Post-install inspection</td>
        <td>Pass</td>
        <td>Instrument aligned; no panel gaps; lighting functional AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
    imageURL: [Fig8]
  },
  {
    id: 17,
    type: 'Pitot System Leak Test',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Put a piece of tape over the small hole in the lower aft end of the pitot tube.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Attach a piece of rubber or plastic tubing over the pitot tube and close the opposite end of the tube.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Slowly roll up the tube until the airspeed indicator shows in cruise range.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Attach the tube to prevent air pressure change, and lock at the airspeed after one minute. If there is a leak, the pressure in the system is reduced, and you will see a lower airspeed on the airspeed indicator.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(5)</div>
    <div style="display: table-cell;">
      If there is a leak in the system, you must examine and tighten all connections, hoses, and fittings before you do another check.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(6)</div>
    <div style="display: table-cell;">
      If there are no leaks, slowly unroll the tubing to let the pressure in the instrument slowly return to ambient pressure.
    </div>
  </div>
</div>`,
manualPage: 698,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-26</td>
        <td>RP-C1723</td>
        <td>Pitot system leak test</td>
        <td>Pass</td>
        <td>Leak rate within AMM 34-11-00 page 211 (Revision date: Jul 03 2006) tolerance; gauge steady for required time</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-05-26</td>
        <td>RP-C1723</td>
        <td>Pitot tube/line inspection</td>
        <td>Pass</td>
        <td>No dents, corrosion, or obstructions; fittings tight AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-26</td>
        <td>RP-C1723</td>
        <td>Ram air line inspection</td>
        <td>Pass</td>
        <td>No kinks or chafing; secure routing AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-27</td>
        <td>RP-C1723</td>
        <td>Post-test functional check</td>
        <td>Pass</td>
        <td>ASI indications correct during airflow simulation AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-27</td>
        <td>RP-C1723</td>
        <td>Documentation update</td>
        <td>Pass</td>
        <td>Leak test results logged in accordance with AMM 34-11-00 page 211 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
    </tbody>
  </table>
`,
  },
  {
    id: 18,
    type: 'Static System Leak Test',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Make sure that the static system is free from moisture trapped in the system and that there are no restrictions.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(2)</div>
    <div style="display: table-cell;">
      Verify there are no changes or deformations to the airframe surface that could affect the relationship between static pressure in the system and true ambient static air pressure in any flight configuration.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(3)</div>
    <div style="display: table-cell;">
      Close the static pressure alternate source control.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(4)</div>
    <div style="display: table-cell;">
      Attach a vacuum source to the static pressure source opening.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(5)</div>
    <div style="display: table-cell;">
      Slowly apply the vacuum until the altimeter shows a 1,000-foot increase in altitude.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(6)</div>
    <div style="display: table-cell;">
      Cut off the vacuum source and ensure the system remains closed for one minute.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(7)</div>
    <div style="display: table-cell;">
      If the altimeter loss is not more than 100 feet after one minute, the system passes. Slowly release the vacuum to return the system to ambient pressure.<br><br>
      If the loss is more than 100 feet, tighten all connections and repeat the test. If leakage persists, do the following:<br><br>
      <div style="padding-left: 20px;">
        (a) Disconnect the static pressure lines from the airspeed indicator and the vertical speed indicator. Use suitable fittings to connect the lines together so that only the altimeter is connected to the static pressure system.<br><br>
        (b) Repeat the leakage test to determine if the problem is in the static system or the instruments.<br><br>
        If the instruments are the cause, repair or replace them at an approved repair station.<br><br>
        If the static pressure system is the cause, proceed as follows:
      </div>
    </div>
  </div>
</div>

<br>
<strong style="color: red;">CAUTION:</strong> Do not apply positive pressure with the airspeed indicator or the vertical speed indicator connected to the static pressure system.
<br><br>

<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;"><u>1</u></div>
    <div style="display: table-cell;">
      Attach a source of positive pressure to the static source opening.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;"><u>2</u></div>
    <div style="display: table-cell;">
      Slowly apply positive pressure until the altimeter decreases by 500 feet and stabilizes.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;"><u>3</u></div>
    <div style="display: table-cell;">
      Apply a solution of mild soap and water to line connections and the static source flange. Look for bubbles to identify leaks.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;"><u>4</u></div>
    <div style="display: table-cell;">
      Tighten any leaking connections. Repair or replace damaged parts.
    </div>
  </div>

  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;"><u>5</u></div>
    <div style="display: table-cell;">
      Reconnect the airspeed indicator and vertical speed indicator to the static pressure system and repeat the leak test.
    </div>
  </div>
</div>
`,
manualPage: 699,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-24</td>
        <td>RP-C1723</td>
        <td>Static system leak test</td>
        <td>Pass</td>
        <td>Leak rate within AMM 34-11-00 page 212 (Revision date: Jul 03 2006) tolerance; altimeter needle steady</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-24</td>
        <td>RP-C1723</td>
        <td>Static ports inspection</td>
        <td>Pass</td>
        <td>Ports clear; no paint overspray or obstruction AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-24</td>
        <td>RP-C1723</td>
        <td>Static line inspection</td>
        <td>Pass</td>
        <td>No moisture; routing secure; no kinks AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-05-25</td>
        <td>RP-C1723</td>
        <td>VSI functional check</td>
        <td>Pass</td>
        <td>Zero at rest; stable readings in climb/descent AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-25</td>
        <td>RP-C1723</td>
        <td>Documentation update</td>
        <td>Pass</td>
        <td>Test results recorded; no corrective action required AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>JAD</td>
      </tr>
    </tbody>
  </table>
`,
  },
  {
    id: 19,
    type: 'Static Lines (Blow Out the Lines)',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Keep static lines clear and connections tight. All models have a static source sump that collects moisture and keeps the system clear.<br><br>
      If necessary, disconnect the static line at the first instrument it is connected to, and then blow the line clear with low-pressure air.
    </div>
  </
`,
manualPage: 700,
    maintenanceRecord: `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-22</td>
        <td>RP-C1723</td>
        <td>Pitot line blow-out</td>
        <td>Pass</td>
        <td>Moisture cleared; low-pressure air used per AMM 34-11-00 page 212 (Revision date: Jul 03 2006) caution</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-22</td>
        <td>RP-C1723</td>
        <td>Static line blow-out</td>
        <td>Pass</td>
        <td>No debris; alternate static source valve opened to allow clearing AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-05-22</td>
        <td>RP-C1723</td>
        <td>Port inspection after blow-out</td>
        <td>Pass</td>
        <td>Ports clear; no damage to openings AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-23</td>
        <td>RP-C1723</td>
        <td>Leak test after blow-out</td>
        <td>Pass</td>
        <td>Both pitot and static sides within AMM 34-11-00 page 212 (Revision date: Jul 03 2006) leak rate limits</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-23</td>
        <td>RP-C1723</td>
        <td>Functional check</td>
        <td>Pass</td>
        <td>All instruments reading correctly during operational test AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
  },
  {
    id: 20,
    type: 'Pitot Lines (Blow Out the Lines)',
    manualInstruction: `<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding-right: 8px;">(1)</div>
    <div style="display: table-cell;">
      Although the pitot system drains down to the pitot tube opening, condensation can collect in other areas of the system and cause a blockage in the line.<br><br>
      To remove the blockage, disconnect
the line at the airspeed indicator. With low-pressure air, blow from the indicator end of the line
toward the pitot tube.
`,
manualPage: 699,
    maintenanceRecord:  `
 <table border="1" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>Date</th>
        <th>A/C Reg.</th>
        <th>Task</th>
        <th>Status</th>
        <th>Remarks</th>
        <th>Technician</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-05-22</td>
        <td>RP-C1723</td>
        <td>Pitot line blow-out</td>
        <td>Pass</td>
        <td>Moisture cleared; low-pressure air used per AMM 34-11-00 page 212 caution</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-22</td>
        <td>RP-C1723</td>
        <td>Static line blow-out</td>
        <td>Pass</td>
        <td>No debris; alternate static source valve opened to allow clearing AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>RBT</td>
      </tr>
      <tr>
        <td>2025-05-22</td>
        <td>RP-C1723</td>
        <td>Port inspection after blow-out</td>
        <td>Pass</td>
        <td>Ports clear; no damage to openings AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
      <tr>
        <td>2025-05-23</td>
        <td>RP-C1723</td>
        <td>Leak test after blow-out</td>
        <td>Pass</td>
        <td>Both pitot and static sides within AMM 34-11-00 page 212 (Revision date: Jul 03 2006) leak rate limits</td>
        <td>JAD</td>
      </tr>
      <tr>
        <td>2025-05-23</td>
        <td>RP-C1723</td>
        <td>Functional check</td>
        <td>Pass</td>
        <td>All instruments reading correctly during operational test AMM 34-11-00 page 212 (Revision date: Jul 03 2006)</td>
        <td>MCA</td>
      </tr>
    </tbody>
  </table>
`,
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

// ✅ OPTION 2 & 3 — Hide suggestions when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    // Only close if the click is outside of the input or suggestion list
    if (!event.target.closest('.search-wrapper')) {
      setShowSuggestions(false);
    }
  };

  window.addEventListener('click', handleClickOutside);
  return () => window.removeEventListener('click', handleClickOutside);
}, []);


// 🧠 Fuzzy search setup
const fuse = new Fuse(aircraftData, {
  keys: ["type", "manualInstruction", "maintenanceRecord"], // fields to search
  threshold: 0.4, // 0 = exact match, 1 = very fuzzy
  ignoreLocation: true,
});

// 🔍 Use Fuse.js to generate suggestions
const suggestions = query
  ? fuse.search(query).map(result => result.item)
  : [];


const handleSearch = () => {
  const results = fuse.search(query).map(result => result.item);
  setResults(results);
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

        <div className="relative search-wrapper">
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
                <div
  className="text-gray-700 leading-relaxed"
  dangerouslySetInnerHTML={{ __html: item.manualInstruction }}
></div>
{/* PDF Manual Link */}
<div className="mt-4">
</div>
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
<a 
  href={`/Manuals/Cessna_172R_1996on_MM_C172RMM.pdf#page=${item.manualPage}`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
>
  📄 Official Maintenance Manual (Page {item.manualPage})
</a>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
  <h3 className="text-2xl font-semibold mb-4">Maintenance Record</h3>
  <div
    className="table-html overflow-x-auto"
    dangerouslySetInnerHTML={{ __html: item.maintenanceRecord }}
  />
  <style jsx>{`
    .table-html table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.95rem;
      background-color: white; /* white background */
    }
    .table-html th {
      background-color: #f8fafc;
      padding: 12px;
      text-align: left;
      border-bottom: 2px solid #e2e8f0;
      font-weight: 600;
    }
    .table-html td {
      padding: 12px;
      border-bottom: 1px solid #e2e8f0;
    }
    .table-html tr:hover {
      background-color: #f1f5f9;
    }
  `}</style>
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
