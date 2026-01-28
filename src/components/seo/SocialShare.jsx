// src/components/seo/SocialShare.jsx
import { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from 'react-share';
import { motion, AnimatePresence } from 'framer-motion';

const SocialShare = ({ url, title, description, image, tags = [] }) => {
  const fullUrl = `https://adievasinteriors.com${url}`;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom styling for the share "buttons"
  const shareLinkClass = "text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] opacity-40 hover:opacity-100 transition-opacity duration-300";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        
        <FacebookShareButton url={fullUrl} quote={description}>
          <span className={shareLinkClass}>Facebook</span>
        </FacebookShareButton>

        <TwitterShareButton url={fullUrl} title={title} hashtags={tags}>
          <span className={shareLinkClass}>X</span>
        </TwitterShareButton>

        <LinkedinShareButton url={fullUrl} title={title} summary={description}>
          <span className={shareLinkClass}>LinkedIn</span>
        </LinkedinShareButton>

        <PinterestShareButton url={fullUrl} media={image} description={description}>
          <span className={shareLinkClass}>Pinterest</span>
        </PinterestShareButton>

        <WhatsappShareButton url={fullUrl} title={title} separator=" | ">
          <span className={shareLinkClass}>WhatsApp</span>
        </WhatsappShareButton>

        <button onClick={copyToClipboard} className="relative group">
          <span className={`${shareLinkClass} border-b border-black/20 pb-0.5`}>
            {copied ? 'Link Copied' : 'Copy Link'}
          </span>
          
          <AnimatePresence>
            {copied && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-0 text-[9px] uppercase tracking-widest text-white bg-black px-2 py-1 rounded"
              >
                Saved
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Decorative line to separate from other sidebar content */}
      <div className="h-px w-full bg-black/5" />
    </div>
  );
};

export default SocialShare;