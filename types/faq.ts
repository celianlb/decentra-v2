export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export type FAQPageMapping = {
  [key: string]: FAQData;
};
