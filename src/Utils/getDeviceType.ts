export function getDeviceType() {
  const ua = navigator.userAgent;

  if (/tablet|ipad/i.test(ua)) {
    return "tablet";
  }

  if (/mobile|android|iphone/i.test(ua)) {
    return "mobile";
  }

  return "desktop";
}
