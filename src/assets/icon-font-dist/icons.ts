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
  [Icons.Error]: "61706",
  [Icons.Event]: "61707",
  [Icons.Exit]: "61708",
  [Icons.EyeOff]: "61709",
  [Icons.Eye]: "61710",
  [Icons.Foot]: "61711",
  [Icons.Goal]: "61712",
  [Icons.HeartPlus]: "61713",
  [Icons.Help]: "61714",
  [Icons.Home]: "61715",
  [Icons.Img]: "61716",
  [Icons.Info]: "61717",
  [Icons.Key]: "61718",
  [Icons.Leaderboard]: "61719",
  [Icons.Leaderboard2]: "61720",
  [Icons.Lock]: "61721",
  [Icons.Login]: "61722",
  [Icons.Logout]: "61723",
  [Icons.Mail]: "61724",
  [Icons.Medal]: "61725",
  [Icons.Steps]: "61726",
  [Icons.UploadFile]: "61727",
  [Icons.Verified]: "61728",
  [Icons.WaterDrop]: "61729",
};
