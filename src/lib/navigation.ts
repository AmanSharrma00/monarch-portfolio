import { profile } from '@/content/portfolio';
import { analytics } from '@/lib/analytics';

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function openResume() {
  analytics.track('resume_view');
  window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
}

export function downloadResume() {
  analytics.track('resume_download');
  const a = document.createElement('a');
  a.href = profile.resumeUrl;
  a.download = 'Aman-Panday-Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function openGithub() {
  analytics.track('github_click');
  window.open(profile.github, '_blank', 'noopener,noreferrer');
}

export function openLinkedin() {
  analytics.track('linkedin_click');
  window.open(profile.linkedin, '_blank', 'noopener,noreferrer');
}
