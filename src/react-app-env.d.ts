/// <reference types="react-scripts" />
/// <reference types="redux-persist" />
declare module "*.mp3";

type SkillActionTypes = "woodcutting" | "begging" | "fishing" | "mining" | "cooking" | undefined;
type DialogTypes = "market" | "inventory" | "equipment" | "skillActions" | "gift" | "travel";
type MessageTypes = "info" | "success" | "warning" | "error" | "perfect";
type ItemRarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
type ItemEqipSlot = "hand" | "head" | "body" | "feet" | "handLeft" | "legs" | undefined;
type ItemType = "tool" | "rawMaterial" | "clothes" | "food";
type CityLocations = "cityCenter" | "marketPlace" | "carpenter" | "soupKitchen" | "port" | "forest" | "mines";

type Message = {
  text: string;
  type: MessageTypes;
  id?: string;
  timeStamp?: string;
};
