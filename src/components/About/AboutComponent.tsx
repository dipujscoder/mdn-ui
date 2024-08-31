import React, { useContext } from "react";
import { useCurrentUser } from "./AboutContext";

type Props = {};

export default function AboutComponent({}: Props) {
  const currentUser = useCurrentUser();

  console.log("currentUser", currentUser);

  return <div>name: </div>;
}
