import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  center?: Boolean;
};

export default function Container({ children, center }: Props) {
  return (
    <div className={classNames("container px-5", { "mx-auto": center })}>
      {children}
    </div>
  );
}
