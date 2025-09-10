import React from "react";

const Manual = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manual</h1>
      <iframe
        src="/Manuals/Cessna_172R_1996on_MM_C172RMM.pdf"
        title="Manual PDF"
        width="100%"
        height="800px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Manual;
