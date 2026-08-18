import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransitionLoader } from './components/PageTransitionLoader';
import { EnquiryModal } from './components/EnquiryModal';
import { TrackDetailModal } from './components/TrackDetailModal';
import { ComparisonModal } from './components/ComparisonModal';
import { TrackFinderQuizModal } from './components/TrackFinderQuizModal';
import { UpcomingBatchesModal } from './components/UpcomingBatchesModal';
import { BlogModal } from './components/BlogModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { WhatsAppWidget } from './components/WhatsAppWidget';

// Dedicated Individual Pages
import { HomePage } from './pages/HomePage';
import { AboutCompanyPage } from './pages/AboutCompanyPage';
import { MentorsPage } from './pages/MentorsPage';
import { ProgramsHubPage } from './pages/ProgramsHubPage';
import { TrackDetailPage } from './pages/TrackDetailPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { PlacementProcessPage } from './pages/PlacementProcessPage';
import { UpcomingBatchesPage } from './pages/UpcomingBatchesPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const navigate = useNavigate();
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedTrackForEnquiry, setSelectedTrackForEnquiry] = useState('it-process-manager');
  const [isCounsellorMode, setIsCounsellorMode] = useState(false);

  const [selectedTrackDetail, setSelectedTrackDetail] = useState<string | null>(null);
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [batchesModalOpen, setBatchesModalOpen] = useState(false);
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [legalDocType, setLegalDocType] = useState<LegalDocType>(null);

  const handleOpenEnquiry = (trackId?: string) => {
    if (trackId) {
      setSelectedTrackForEnquiry(trackId);
    } else {
      setSelectedTrackForEnquiry('it-process-manager');
    }
    setIsCounsellorMode(false);
    setEnquiryModalOpen(true);
  };

  const handleOpenCounsellor = () => {
    setIsCounsellorMode(true);
    setEnquiryModalOpen(true);
  };

  const handleOpenTrackDetail = (trackId: string) => {
    // Navigate directly to the individual program page
    const slugMap: Record<string, string> = {
      'it-process-manager': 'it-process-manager-course',
      'servicenow-developer': 'servicenow-developer-course',
      'applied-genai-data-science': 'genai-data-science-course',
    };
    const slug = slugMap[trackId] || trackId;
    navigate(`/programs/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#169BA2] selection:text-white flex flex-col justify-between">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Page switch top progress loader */}
      <PageTransitionLoader />

      {/* Header / Navbar with Complete Multi-Page Navigation */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenUpcomingBatches={() => setBatchesModalOpen(true)}
        onOpenComparison={() => setComparisonModalOpen(true)}
        onOpenQuiz={() => setQuizModalOpen(true)}
        onOpenTrackDetail={handleOpenTrackDetail}
        onOpenBlog={() => setBlogModalOpen(true)}
        onOpenLegal={(docType) => setLegalDocType(docType)}
      />

      {/* Application Routes */}
      <div className="flex-1">
        <Routes>
          {/* 1. Home Landing Page */}
          <Route
            path="/"
            element={
              <HomePage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
                onOpenQuiz={() => setQuizModalOpen(true)}
                onOpenComparison={() => setComparisonModalOpen(true)}
                onOpenTrackDetail={handleOpenTrackDetail}
              />
            }
          />

          {/* 2. About Us Pages */}
          <Route
            path="/about"
            element={
              <AboutCompanyPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/about-company"
            element={
              <AboutCompanyPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/mentors"
            element={
              <MentorsPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/about-mentors"
            element={
              <MentorsPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />

          {/* 3. Programs Hub & Individual Program Detail Pages */}
          <Route
            path="/programs"
            element={
              <ProgramsHubPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenComparison={() => setComparisonModalOpen(true)}
                onOpenQuiz={() => setQuizModalOpen(true)}
              />
            }
          />
          <Route
            path="/programs/:trackId"
            element={
              <TrackDetailPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
                onOpenComparison={() => setComparisonModalOpen(true)}
              />
            }
          />
          {/* Program URL aliases for direct routing */}
          <Route
            path="/it-process-manager-course"
            element={
              <TrackDetailPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
                onOpenComparison={() => setComparisonModalOpen(true)}
              />
            }
          />
          <Route
            path="/servicenow-developer-course"
            element={
              <TrackDetailPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
                onOpenComparison={() => setComparisonModalOpen(true)}
              />
            }
          />
          <Route
            path="/genai-data-science-course"
            element={
              <TrackDetailPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
                onOpenComparison={() => setComparisonModalOpen(true)}
              />
            }
          />

          {/* 4. Placements Pages */}
          <Route
            path="/placements"
            element={
              <PlacementsPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/placements/success-stories"
            element={
              <SuccessStoriesPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/success-stories"
            element={
              <SuccessStoriesPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/placements/how-it-works"
            element={
              <PlacementProcessPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />
          <Route
            path="/how-it-works"
            element={
              <PlacementProcessPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />

          {/* 5. Upcoming Batches Page (also kept as fallback URL route) */}
          <Route
            path="/upcoming-batches"
            element={
              <UpcomingBatchesPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
              />
            }
          />

          {/* 6. Contact & Enquiry Page */}
          <Route
            path="/contact"
            element={<ContactPage onOpenEnquiry={handleOpenEnquiry} />}
          />
          <Route
            path="/enquiry"
            element={<ContactPage onOpenEnquiry={handleOpenEnquiry} />}
          />

          {/* 7. Legal Documentation Pages */}
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="/refund-policy" element={<LegalPage />} />

          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCounsellor={handleOpenCounsellor}
                onOpenQuiz={() => setQuizModalOpen(true)}
                onOpenComparison={() => setComparisonModalOpen(true)}
                onOpenTrackDetail={handleOpenTrackDetail}
              />
            }
          />
        </Routes>
      </div>

      {/* Footer with Menu & Legal Links */}
      <Footer
        onOpenEnquiry={handleOpenEnquiry}
        onOpenUpcomingBatches={() => setBatchesModalOpen(true)}
        onOpenComparison={() => setComparisonModalOpen(true)}
        onOpenBlog={() => setBlogModalOpen(true)}
        onOpenLegal={(docType) => setLegalDocType(docType)}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Sticky Bottom Bar for Mobile Conversions */}
      <StickyMobileBar onOpenEnquiry={handleOpenEnquiry} />

      {/* Upcoming Batches Popup Modal */}
      <UpcomingBatchesModal
        isOpen={batchesModalOpen}
        onClose={() => setBatchesModalOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Modals & Drawers */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialTrackId={selectedTrackForEnquiry}
        isCounsellorMode={isCounsellorMode}
      />

      <TrackDetailModal
        trackId={selectedTrackDetail}
        onClose={() => setSelectedTrackDetail(null)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <ComparisonModal
        isOpen={comparisonModalOpen}
        onClose={() => setComparisonModalOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <TrackFinderQuizModal
        isOpen={quizModalOpen}
        onClose={() => setQuizModalOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <BlogModal
        isOpen={blogModalOpen}
        onClose={() => setBlogModalOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <LegalModal
        docType={legalDocType}
        onClose={() => setLegalDocType(null)}
        onOpenEnquiry={handleOpenEnquiry}
      />
    </div>
  );
}
