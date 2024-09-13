import { useState } from "react";
import About from "../../components/About";
import AboutComponent from "../../components/About/AboutComponent";
import Collapse from "../../components/Collapse";
import Layout from "../../components/Layouts";
import { motion } from "framer-motion";

type Props = {};

export default function MyTestCompoent({}: Props) {
  const [open, setOpen] = useState(false);

  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  const _handleClick = () => {};
  return (
    <Layout>
      <About open={true}>
        <AboutComponent />
        <Collapse />
      </About>
    </Layout>
  );
}
