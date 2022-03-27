import { ComponentType, FC } from "react";

import { Spinner } from ":components/spinner/Spinner";

export const withSpinner =
  <P extends object>(
    WrappedComponent: ComponentType<P>
  ): FC<P & { isLoading: boolean }> =>
  ({ isLoading, ...props }) => {
    if (isLoading) {
      return <Spinner />;
    }
    return <WrappedComponent {...(props as P)} />;
  };
