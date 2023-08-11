import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgMobile = (props: SvgProps) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path fill={props.fill || '#fff'} d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    <Path
      fill={props.fill || '#fff'}
      fillRule="evenodd"
      d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMobile;
