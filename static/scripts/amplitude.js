/* static/js/amplitude-init.js */
(function () {
  if (typeof window === 'undefined') return;
  if (window.__amplitudeInitialized) return; // avoid double-inits on hot reloads

  function whenReady(cb) {
    if (window.amplitude && window.sessionReplay && window.sessionReplay.plugin) {
      cb();
    } else {
      setTimeout(function () { whenReady(cb); }, 50);
    }
  }

  whenReady(function () {
    try {
      // Optional: only run in production
      // if (process.env.NODE_ENV !== 'production') return;

      const sessionReplayTracking = window.sessionReplay.plugin({
        sampleRate: 1,              // tune down for production (e.g., 0.1 = 10%)
        forceSessionTracking: true, // (optional) emits Session Start/End events
      });

      window.amplitude.add(sessionReplayTracking);
      window.amplitude.init(
        '85f8ef5d42d4eeda6a2c6c8fbae1d29d', // your browser API key
        undefined,
        { defaultTracking: { sessions: true } }
      );

      window.__amplitudeInitialized = true;
    } catch (e) {
      console.error('Amplitude init failed:', e);
    }
  });
})();
