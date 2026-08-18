import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

interface ContactPageProps {
  onOpenEnquiry?: (trackId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedTrack: 'it-process-manager',
    experienceLevel: 'fresher',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-teal-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact & Enquiry</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Phone className="w-3.5 h-3.5" />
            <span>Admissions & Career Counselling Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Get in Touch with Our Career Mentors & Admissions Team
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Have questions about syllabus, eligibility, batch timings, or placement assistance? Submit your enquiry below or call us directly.
          </p>
        </div>
      </div>

      {/* Main Grid: Form + Contact Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details & Office */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-900">
                Direct Contact Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href="tel:+919560721315"
                  className="flex items-start gap-3.5 p-3.5 bg-slate-50 hover:bg-teal-50/60 rounded-2xl border border-slate-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#169BA2] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400">Admissions Helpline</div>
                    <div className="font-bold text-slate-900">+91 95607 21315</div>
                    <div className="text-[10px] text-teal-600 font-semibold">Mon–Sat (8:00 AM – 10:00 PM IST)</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919560721315?text=Hi%2C%20I%20want%20to%20enquire%20about%20Snow%20IT%20Expert%20Institute%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400">WhatsApp Instant Chat</div>
                    <div className="font-bold text-slate-900">+91 95607 21315</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">Immediate Chat Support</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@snowitexpertinstitute.com"
                  className="flex items-start gap-3.5 p-3.5 bg-slate-50 hover:bg-teal-50/60 rounded-2xl border border-slate-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400">Official Email</div>
                    <div className="font-bold text-slate-900">contact@snowitexpertinstitute.com</div>
                    <div className="text-[10px] text-slate-500 font-semibold">Responses within 2 business hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400">Corporate Learning HQ</div>
                    <div className="font-bold text-slate-900">Snow IT Expert Institute</div>
                    <div className="text-[11px] text-slate-500">Noida Cyber Hub / Virtual Live Across India</div>
                  </div>
                </div>
              </div>

              {/* Fast Response Guarantee */}
              <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-200/80 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>15-Minute Callback Guarantee</span>
                </div>
                <p className="text-[11px] text-teal-800 leading-relaxed">
                  During active working hours, our senior counsellor reviews your submission and calls you back within 15 minutes.
                </p>
              </div>

            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Submit Your Admission & Counselling Query
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details to receive course curriculum, batch timings, and fee concession details.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-teal-50 border border-teal-200 rounded-3xl text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#169BA2] text-white flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Thank You, {formData.name || 'Candidate'}!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                      Your enquiry for <strong>{formData.selectedTrack}</strong> has been registered. Our counsellor will call you at <strong>{formData.phone}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', selectedTrack: 'it-process-manager', experienceLevel: 'fresher', message: '' }); }}
                    className="px-5 py-2.5 bg-[#169BA2] text-white text-xs font-bold rounded-xl"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select Program Track *
                      </label>
                      <select
                        value={formData.selectedTrack}
                        onChange={(e) => setFormData({ ...formData, selectedTrack: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
                      >
                        <option value="it-process-manager">IT Process Manager (21 Days · No Coding)</option>
                        <option value="servicenow-developer">ServiceNow Developer (21 Days · CSA/CAD)</option>
                        <option value="applied-genai-data-science">Applied GenAI & Data Science (60 Days)</option>
                        <option value="undecided">Not Sure — Need Counsellor Recommendation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Background *
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
                    >
                      <option value="fresher">Fresher / Recent Graduate (B.Com/BBA/B.Tech/etc.)</option>
                      <option value="non-it">Non-IT Professional (BPO, Sales, Operations, HR)</option>
                      <option value="career-gap">Returning after Career Gap (1 to 5+ Years)</option>
                      <option value="it-upskilling">IT Support / QA / Developer Upskilling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Any Questions for the Mentor? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about batch timings, fees, demo class, or syllabus details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#169BA2] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-[#169BA2] to-teal-500 hover:from-teal-600 hover:to-[#169BA2] text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry & Get Syllabus</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
