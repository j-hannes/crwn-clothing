import { ComponentType, FC } from "react";

import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

export const withSpinner =
  <P extends object>(
    WrappedComponent: ComponentType<P>
  ): FC<P & { isLoading: boolean }> =>
  ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      );
    }
    return <WrappedComponent {...(props as P)} />;
  };
