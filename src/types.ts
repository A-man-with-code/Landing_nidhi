export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ProductScreen {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  aspectRatio: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
