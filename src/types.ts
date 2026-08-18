export interface ProgramTrack {
  id: string;
  title: string;
  shortTitle: string;
  duration: string;
  mentorName: string;
  mentorTitle: string;
  keyTopics: string[];
  noCodingRequired?: boolean;
  certificationGuidance?: string;
  format?: string;
  salaryRange?: string;
  description: string;
  fullOverview: string;
  curriculumModules: {
    title: string;
    duration: string;
    topics: string[];
  }[];
  targetRoles: string[];
  toolsCovered: string[];
  batchSchedule: {
    nextBatch: string;
    timing: string;
    days: string;
    mode: string;
  };
  suitableFor: string[];
}

export interface Mentor {
  id: string;
  name: string;
  track: string;
  role: string;
  bio: string;
  highlights: string[];
  experienceYears: string;
  avatarBg: string;
}

export interface Testimonial {
  id: string;
  candidateName: string;
  batch: string;
  companyName: string;
  roleTitle: string;
  prevRole?: string;
  ctc: string;
  hike: string;
  trackId: string;
  quote: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Placement' | 'Courses' | 'Eligibility' | 'Schedule';
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  selectedTrack: string;
  candidateType: string;
  experienceYears: string;
  preferredBatch: string;
  message?: string;
}
