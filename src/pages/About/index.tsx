import About from "../../components/About";
import AboutComponent from "../../components/About/AboutComponent";

type Props = {};

export default function MyTestCompoent({}: Props) {
  return (
    <About open={true}>
      <AboutComponent />
    </About>
  );
}
