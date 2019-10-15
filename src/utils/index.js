import React from "react";

const LogProps = WrappedComponent => {
  React.useEffect(() => {
    console.log("old props:", WrappedComponent);
  }, []);

  return <WrappedComponent />;
};

export default LogProps;
