import {
  chainMatch,
  isPageRequest,
  csp,
  strictDynamic,
} from '@next-safe/middleware';

const securityMiddleware = [
  csp({
    // your CSP base configuration with IntelliSense
    // single quotes for values like 'self' are automatic
    directives: {
      'img-src': ['self', 'data:', 'https://*.sanity.io'],
      'font-src': ['self'],
    },
  }),
  strictDynamic(),
];

export default chainMatch(isPageRequest)(...securityMiddleware);
