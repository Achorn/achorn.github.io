/**
 * Facts about Joshua that are derived rather than written down, so they do not
 * quietly go stale.
 */

/**
 * Start of the first professional software role — the Myadcenter internship in
 * May 2020, which is the earliest entry in `experience.js`. Change this only if
 * that start date itself is wrong; the years figure follows from it.
 */
export const CAREER_START = new Date(2020, 4, 1);

/**
 * Whole years elapsed since CAREER_START, rounded down, so the site never
 * claims an anniversary before it happens.
 *
 * `now` is injectable purely so this is testable without mocking the clock.
 */
export const yearsOfExperience = (now = new Date()) => {
  let years = now.getFullYear() - CAREER_START.getFullYear();

  const beforeAnniversary =
    now.getMonth() < CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() < CAREER_START.getDate());

  if (beforeAnniversary) years -= 1;
  return Math.max(years, 0);
};

/** "6 years" / "1 year", so the copy reads correctly either way. */
export const experiencePhrase = (now = new Date()) => {
  const years = yearsOfExperience(now);
  return `${years} year${years === 1 ? "" : "s"}`;
};
