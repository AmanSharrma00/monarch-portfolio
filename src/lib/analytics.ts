type EventName =
  | 'resume_view'
  | 'resume_download'
  | 'project_open'
  | 'github_click'
  | 'linkedin_click'
  | 'ai_assistant_used';

class Analytics {
  private events: { name: EventName; data?: Record<string, unknown>; ts: number }[] = [];

  track(name: EventName, data?: Record<string, unknown>) {
    this.events.push({ name, data, ts: Date.now() });

    if (typeof window !== 'undefined' && (window as any).__MONARCH_DEBUG__) {
      console.log('[analytics]', name, data ?? '');
    }
  }

  getEvents() {
    return [...this.events];
  }
}

export const analytics = new Analytics();
