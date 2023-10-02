export type IconsId =
  | "account"
  | "arrow_forward"
  | "arrow_forward2"
  | "arrow-down"
  | "bike"
  | "calendar"
  | "category"
  | "celebration"
  | "change_circle"
  | "close"
  | "connect"
  | "error"
  | "event"
  | "exit"
  | "eye-off"
  | "eye"
  | "foot"
  | "goal"
  | "heart_plus"
  | "help"
  | "home"
  | "img"
  | "info"
  | "key"
  | "leaderboard"
  | "leaderboard2"
  | "lock"
  | "login"
  | "logout"
  | "mail"
  | "medal"
  | "steps"
  | "upload_file"
  | "verified"
  | "water_drop";

export type IconsKey =
  | "Account"
  | "ArrowForward"
  | "ArrowForward2"
  | "ArrowDown"
  | "Bike"
  | "Calendar"
  | "Category"
  | "Celebration"
  | "ChangeCircle"
  | "Close"
  | "Connect"
  | "Error"
  | "Event"
  | "Exit"
  | "EyeOff"
  | "Eye"
  | "Foot"
  | "Goal"
  | "HeartPlus"
  | "Help"
  | "Home"
  | "Img"
  | "Info"
  | "Key"
  | "Leaderboard"
  | "Leaderboard2"
  | "Lock"
  | "Login"
  | "Logout"
  | "Mail"
  | "Medal"
  | "Steps"
  | "UploadFile"
  | "Verified"
  | "WaterDrop";

export enum Icons {
  Account = "account",
  ArrowForward = "arrow_forward",
  ArrowForward2 = "arrow_forward2",
  ArrowDown = "arrow-down",
  Bike = "bike",
  Calendar = "calendar",
  Category = "category",
  Celebration = "celebration",
  ChangeCircle = "change_circle",
  Close = "close",
  Connect = "connect",
  Error = "error",
  Event = "event",
  Exit = "exit",
  EyeOff = "eye-off",
  Eye = "eye",
  Foot = "foot",
  Goal = "goal",
  HeartPlus = "heart_plus",
  Help = "help",
  Home = "home",
  Img = "img",
  Info = "info",
  Key = "key",
  Leaderboard = "leaderboard",
  Leaderboard2 = "leaderboard2",
  Lock = "lock",
  Login = "login",
  Logout = "logout",
  Mail = "mail",
  Medal = "medal",
  Steps = "steps",
  UploadFile = "upload_file",
  Verified = "verified",
  WaterDrop = "water_drop",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Account]: "61697",
  [Icons.ArrowForward]: "61698",
  [Icons.ArrowForward2]: "61699",
  [Icons.ArrowDown]: "61700",
  [Icons.Bike]: "61701",
  [Icons.Calendar]: "61702",
  [Icons.Category]: "61703",
  [Icons.Celebration]: "61704",
  [Icons.ChangeCircle]: "61705",
  [Icons.Close]: "61706",
  [Icons.Connect]: "61707",
  [Icons.Error]: "61708",
  [Icons.Event]: "61709",
  [Icons.Exit]: "61710",
  [Icons.EyeOff]: "61711",
  [Icons.Eye]: "61712",
  [Icons.Foot]: "61713",
  [Icons.Goal]: "61714",
  [Icons.HeartPlus]: "61715",
  [Icons.Help]: "61716",
  [Icons.Home]: "61717",
  [Icons.Img]: "61718",
  [Icons.Info]: "61719",
  [Icons.Key]: "61720",
  [Icons.Leaderboard]: "61721",
  [Icons.Leaderboard2]: "61722",
  [Icons.Lock]: "61723",
  [Icons.Login]: "61724",
  [Icons.Logout]: "61725",
  [Icons.Mail]: "61726",
  [Icons.Medal]: "61727",
  [Icons.Steps]: "61728",
  [Icons.UploadFile]: "61729",
  [Icons.Verified]: "61730",
  [Icons.WaterDrop]: "61731",
};
