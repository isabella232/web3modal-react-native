import type { SvgProps } from 'react-native-svg';
import { ColorType, IconType, SizeType, ThemeKeys } from '../../utils/TypesUtil';

// -- Svg's-------------------------------- //
import AppleSvg from '../../assets/svg/Apple';
import ArrowBottomSvg from '../../assets/svg/ArrowBottom';
import ArrowLeftSvg from '../../assets/svg/ArrowLeft';
import ArrowRightSvg from '../../assets/svg/ArrowRight';
import ArrowTopSvg from '../../assets/svg/ArrowTop';
import BrowserSvg from '../../assets/svg/Browser';
import CheckmarkSvg from '../../assets/svg/Checkmark';
import ChevronBottomSvg from '../../assets/svg/ChevronBottom';
import ChevronLeftSvg from '../../assets/svg/ChevronLeft';
import ChevronRightSvg from '../../assets/svg/ChevronRight';
import ChevronTopSvg from '../../assets/svg/ChevronTop';
import ClockSvg from '../../assets/svg/Clock';
import CloseSvg from '../../assets/svg/Close';
import CompassSvg from '../../assets/svg/Compass';
import CoinPlaceholderSvg from '../../assets/svg/CoinPlaceholder';
import CopySvg from '../../assets/svg/Copy';
import CursorSvg from '../../assets/svg/Cursor';
import DesktopSvg from '../../assets/svg/Desktop';
import DisconnectSvg from '../../assets/svg/Disconnect';
import DiscordSvg from '../../assets/svg/Discord';
import EtherscanSvg from '../../assets/svg/Etherscan';
import ExtensionSvg from '../../assets/svg/Extension';
import ExternalLinkSvg from '../../assets/svg/ExternalLink';
import FacebookSvg from '../../assets/svg/Facebook';
import FiltersSvg from '../../assets/svg/Filters';
import GithubSvg from '../../assets/svg/Github';
import GoogleSvg from '../../assets/svg/Google';
import HelpCircleSvg from '../../assets/svg/HelpCircle';
import InfoCircleSvg from '../../assets/svg/InfoCircle';
import MailSvg from '../../assets/svg/Mail';
import MobileSvg from '../../assets/svg/Mobile';
import NetworkPlaceholderSvg from '../../assets/svg/NetworkPlaceholder';
import NftPlaceholderSvg from '../../assets/svg/NftPlaceholder';
import OffSvg from '../../assets/svg/Off';
import RefreshSvg from '../../assets/svg/Refresh';
import SearchSvg from '../../assets/svg/Search';
import SwapHorizontalSvg from '../../assets/svg/SwapHorizontal';
import SwapVerticalSvg from '../../assets/svg/SwapVertical';
import TelegramSvg from '../../assets/svg/Telegram';
import TwitterSvg from '../../assets/svg/Twitter';
import WalletConnectSvg from '../../assets/svg/WalletConnect';
import WalletSvg from '../../assets/svg/Wallet';
import WarningCircleSvg from '../../assets/svg/WarningCircle';
import TwitchSvg from '../../assets/svg/Twitch';
import TwitterIconSvg from '../../assets/svg/TwitterIcon';
import WalletPlaceholderSvg from '../../assets/svg/WalletPlaceholder';
import useTheme from '../../hooks/useTheme';
import { IconSize } from '../../utils/ThemeUtil';

const svgOptions: Record<IconType, (props: SvgProps) => JSX.Element> = {
  apple: AppleSvg,
  arrowBottom: ArrowBottomSvg,
  arrowLeft: ArrowLeftSvg,
  arrowRight: ArrowRightSvg,
  arrowTop: ArrowTopSvg,
  browser: BrowserSvg,
  checkmark: CheckmarkSvg,
  chevronBottom: ChevronBottomSvg,
  chevronLeft: ChevronLeftSvg,
  chevronRight: ChevronRightSvg,
  chevronTop: ChevronTopSvg,
  clock: ClockSvg,
  close: CloseSvg,
  compass: CompassSvg,
  coinPlaceholder: CoinPlaceholderSvg,
  copy: CopySvg,
  cursor: CursorSvg,
  desktop: DesktopSvg,
  disconnect: DisconnectSvg,
  discord: DiscordSvg,
  etherscan: EtherscanSvg,
  extension: ExtensionSvg,
  externalLink: ExternalLinkSvg,
  facebook: FacebookSvg,
  filters: FiltersSvg,
  github: GithubSvg,
  google: GoogleSvg,
  helpCircle: HelpCircleSvg,
  infoCircle: InfoCircleSvg,
  mail: MailSvg,
  mobile: MobileSvg,
  networkPlaceholder: NetworkPlaceholderSvg,
  nftPlaceholder: NftPlaceholderSvg,
  off: OffSvg,
  refresh: RefreshSvg,
  search: SearchSvg,
  swapHorizontal: SwapHorizontalSvg,
  swapVertical: SwapVerticalSvg,
  telegram: TelegramSvg,
  twitch: TwitchSvg,
  twitter: TwitterSvg,
  twitterIcon: TwitterIconSvg,
  wallet: WalletSvg,
  walletConnect: WalletConnectSvg,
  walletPlaceholder: WalletPlaceholderSvg,
  warningCircle: WarningCircleSvg
};

export type IconProps = SvgProps & {
  name: IconType;
  size?: SizeType;
  color?: ColorType;
  style?: SvgProps['style'];
};

export function Icon({ name, color = 'fg-100', size = 'md', style, ...rest }: IconProps) {
  const Theme = useTheme();
  const Component = svgOptions[name];

  return (
    <Component fill={Theme[color as ThemeKeys]} width={IconSize[size]} style={style} {...rest} />
  );
}
