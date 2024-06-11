export interface NavItemType {
  name: string;
  link: string;
  order: number;
}

export interface MenuItemType {
  title: string;
  dietaryRequirements: string[];
  ingredients: string[];
}

export interface AssetType {
  _type: string;
  _ref: string;
}

export interface ImageType {
  _key?: string;
  _type: string;
  alt?: string;
  asset: AssetType;
}
