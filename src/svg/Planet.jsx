import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import colors from "../theme/colors";

const Planet = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-planet"
    width={200}
    height={200}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={colors.white}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9-.745 1.46-5.783-.259-11.255-3.838-5.47-3.579-9.304-7.664-8.56-9.123.464-.91 2.926-.444 5.803.805" />
    <Circle cx={12} cy={12} r={7} />
  </Svg>
);

export default Planet;
