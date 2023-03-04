export interface PartnerItem {
  icon: string;
  title: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface PriceItem {
  title: string;
  currency: "cny" | "usd";
  price: number;
  duration: "month" | "season" | "year" | "unlimited";
  features: string[];
}
