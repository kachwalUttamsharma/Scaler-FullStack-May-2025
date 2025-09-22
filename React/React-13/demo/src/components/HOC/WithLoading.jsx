import React, { Component, useEffect, useState } from "react";

// HOC
const WithLoading = (WrappedComponent) => {
  //   return class extends Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //         isLoading: true,
  //       };
  //     }

  //     componentDidMount() {
  //       // simulate an async operation like fetching data
  //       setTimeout(() => {
  //         this.setState({ isLoading: false });
  //       }, 4000);
  //     }

  //     render() {
  //       if (this.state.isLoading) {
  //         return <div>Loading....</div>;
  //       }
  //       return <WrappedComponent {...this.props} />;
  //     }
  //   };
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(setIsLoading(false), 4000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    if (isLoading) {
      return <div>Loading ....</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithLoading;
