import About from "../../components/About";
import AboutComponent from "../../components/About/AboutComponent";
import Collapse from "../../components/Collapse";

type Props = {};

export default function MyTestCompoent({}: Props) {
  return (
    <About open={true}>
      <AboutComponent />
      <Collapse />
    </About>
  );
}
