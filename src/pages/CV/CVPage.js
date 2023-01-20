import { useState } from "react";

const CVPage = () => {
  const [CVURL] = useState(
    "https://drive.google.com/file/d/17Mfa57WJPvFU3BCkYDdQz50p7zRbEdud/preview"
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
