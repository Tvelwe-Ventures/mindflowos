export type SectionStatus = 'complete' | 'in_progress' | 'attention';

export interface Metric {
  label: string;
  value: string;
}

export interface Section {
  title: string;
  subsections: string[];
  status: SectionStatus;
  metrics?: Metric[];
}

export interface SectionData {
  [key: string]: Section;
}