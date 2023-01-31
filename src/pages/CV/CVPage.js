import { useState } from "react";

const CVPage = () => {
  const [CVURL] = useState(
    "https://drive.google.com/file/d/1iEoS7IpkSiuPXRSyXPVGYdiSsZNJSZ_8/preview"
  );

  return (
    <div className="cv">
      <iframe
        allowtransparency="true"
        title="CV"
        src={CVURL}
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default CVPage;
