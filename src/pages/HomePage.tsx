import React from 'react';
import { Hero } from '../components/Hero';
import { StatsCounter } from '../components/StatsCounter';
import { ValueProposition } from '../components/ValueProposition';
import { TracksSection } from '../components/TracksSection';
import { TargetAudience } from '../components/TargetAudience';
import { PlacementAssistance } from '../components/PlacementAssistance';
import { SuccessStories } from '../components/SuccessStories';
import { MentorsSection } from '../components/MentorsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onOpenEnquiry: (trackId?: string) => void;
  onOpenCounsellor: () => void;
  onOpenQuiz: () => void;
  onOpenComparison: () => void;
  onOpenTrackDetail: (trackId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenEnquiry,
  onOpenCounsellor,
  onOpenQuiz,
  onOpenComparison,
  onOpenTrackDetail,
}) => {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        onOpenEnquiry={onOpenEnquiry}
        onOpenCounsellorModal={onOpenCounsellor}
        onOpenQuiz={onOpenQuiz}
      />

      {/* Live Placement Stats Counter */}
      <StatsCounter />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Three Career Tracks */}
      <TracksSection
        onOpenTrackDetail={onOpenTrackDetail}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Who Trains Here */}
      <TargetAudience onOpenEnquiry={onOpenEnquiry} />

      {/* How Placement Assistance Actually Works */}
      <PlacementAssistance onOpenEnquiry={onOpenEnquiry} />

      {/* Success Stories */}
      <SuccessStories onOpenEnquiry={onOpenEnquiry} />

      {/* Meet the Mentors */}
      <MentorsSection onOpenEnquiry={onOpenEnquiry} />

      {/* Frequently Asked Questions */}
      <FAQSection onOpenEnquiry={onOpenEnquiry} />

      {/* Final CTA */}
      <FinalCTA
        onOpenEnquiry={onOpenEnquiry}
        onOpenComparison={onOpenComparison}
      />
    </main>
  );
};
