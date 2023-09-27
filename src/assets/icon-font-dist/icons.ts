export type IconsId =
  | "activity"
  | "arrow-left"
  | "arrow-right"
  | "bell"
  | "check"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "connect"
  | "connect2"
  | "eye-off"
  | "eye"
  | "gift"
  | "heart"
  | "home"
  | "home1"
  | "image"
  | "info"
  | "leaderboard"
  | "log-in"
  | "log-out"
  | "login"
  | "logout"
  | "mail"
  | "map-pin"
  | "power"
  | "settings"
  | "smile"
  | "star"
  | "thumb_up"
  | "thumbs-up"
  | "trello"
  | "user"
  | "x-circle"
  | "x";

export type IconsKey =
  | "Activity"
  | "ArrowLeft"
  | "ArrowRight"
  | "Bell"
  | "Check"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "Connect"
  | "Connect2"
  | "EyeOff"
  | "Eye"
  | "Gift"
  | "Heart"
  | "Home"
  | "Home1"
  | "Image"
  | "Info"
  | "Leaderboard"
  | "LogIn"
  | "LogOut"
  | "Login"
  | "Logout"
  | "Mail"
  | "MapPin"
  | "Power"
  | "Settings"
  | "Smile"
  | "Star"
  | "ThumbUp"
  | "ThumbsUp"
  | "Trello"
  | "User"
  | "XCircle"
  | "X";

export enum Icons {
  Activity = "activity",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  Bell = "bell",
  Check = "check",
  ChevronDown = "chevron-down",
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
  ChevronUp = "chevron-up",
  Connect = "connect",
  Connect2 = "connect2",
  EyeOff = "eye-off",
  Eye = "eye",
  Gift = "gift",
  Heart = "heart",
  Home = "home",
  Home1 = "home1",
  Image = "image",
  Info = "info",
  Leaderboard = "leaderboard",
  LogIn = "log-in",
  LogOut = "log-out",
  Login = "login",
  Logout = "logout",
  Mail = "mail",
  MapPin = "map-pin",
  Power = "power",
  Settings = "settings",
  Smile = "smile",
  Star = "star",
  ThumbUp = "thumb_up",
  ThumbsUp = "thumbs-up",
  Trello = "trello",
  User = "user",
  XCircle = "x-circle",
  X = "x",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Activity]: "61697",
  [Icons.ArrowLeft]: "61698",
  [Icons.ArrowRight]: "61699",
  [Icons.Bell]: "61700",
  [Icons.Check]: "61701",
  [Icons.ChevronDown]: "61702",
  [Icons.ChevronLeft]: "61703",
  [Icons.ChevronRight]: "61704",
  [Icons.ChevronUp]: "61705",
  [Icons.Connect]: "61706",
  [Icons.Connect2]: "61707",
  [Icons.EyeOff]: "61708",
  [Icons.Eye]: "61709",
  [Icons.Gift]: "61710",
  [Icons.Heart]: "61711",
  [Icons.Home]: "61712",
  [Icons.Home1]: "61713",
  [Icons.Image]: "61714",
  [Icons.Info]: "61715",
  [Icons.Leaderboard]: "61716",
  [Icons.LogIn]: "61717",
  [Icons.LogOut]: "61718",
  [Icons.Login]: "61719",
  [Icons.Logout]: "61720",
  [Icons.Mail]: "61721",
  [Icons.MapPin]: "61722",
  [Icons.Power]: "61723",
  [Icons.Settings]: "61724",
  [Icons.Smile]: "61725",
  [Icons.Star]: "61726",
  [Icons.ThumbUp]: "61727",
  [Icons.ThumbsUp]: "61728",
  [Icons.Trello]: "61729",
  [Icons.User]: "61730",
  [Icons.XCircle]: "61731",
  [Icons.X]: "61732",
};
