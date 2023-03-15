import React from "react";

const Header = ({ money, total }) => {
  return (
    <div>
      {(total > 0 && <>Harcamak için ${money - total} paranız kaldı.</>) || (
        <>Harcamak için ${money} paranız var. </>
      )}
    </div>
  );
};

export default Header;
