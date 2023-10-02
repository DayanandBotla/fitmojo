export type IconsId =
  | "account"
  | "arrow_forward"
  | "arrow_forward2"
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
  [Icons.Bike]: "61700",
  [Icons.Calendar]: "61701",
  [Icons.Category]: "61702",
  [Icons.Celebration]: "61703",
  [Icons.ChangeCircle]: "61704",
  [Icons.Close]: "61705",
  [Icons.Connect]: "61706",
  [Icons.Error]: "61707",
  [Icons.Event]: "61708",
  [Icons.Exit]: "61709",
  [Icons.EyeOff]: "61710",
  [Icons.Eye]: "61711",
  [Icons.Foot]: "61712",
  [Icons.Goal]: "61713",
  [Icons.HeartPlus]: "61714",
  [Icons.Help]: "61715",
  [Icons.Home]: "61716",
  [Icons.Img]: "61717",
  [Icons.Info]: "61718",
  [Icons.Key]: "61719",
  [Icons.Leaderboard]: "61720",
  [Icons.Leaderboard2]: "61721",
  [Icons.Lock]: "61722",
  [Icons.Login]: "61723",
  [Icons.Logout]: "61724",
  [Icons.Mail]: "61725",
  [Icons.Medal]: "61726",
  [Icons.Steps]: "61727",
  [Icons.UploadFile]: "61728",
  [Icons.Verified]: "61729",
  [Icons.WaterDrop]: "61730",
};
