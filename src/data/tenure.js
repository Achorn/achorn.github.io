/**
 * Formats a job's dates from its start/end months, so durations never go stale
 * and nobody has to recompute "1 yr 9 mos" by hand.
 *
 * Months are "YYYY-MM"; a null `end` means the job is current.
 * Counts are inclusive of both the first and last month, which is the
 * convention the rest of the history already used.
 */

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const parseMonth = (value) => {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
};

const label = (date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

/** "1 yr 9 mos", "6 mos", "1 yr". */
export const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (rest) parts.push(`${rest} mo${rest === 1 ? "" : "s"}`);
  return parts.join(" ") || "1 mo";
};

export const tenureMonths = ({ start, end }, now = new Date()) => {
  const from = parseMonth(start);
  const to = end ? parseMonth(end) : now;
  const months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth()) +
    1;
  return Math.max(months, 1);
};

/** "Sep 2021 - May 2023 · 1 yr 9 mos" / "Nov 2025 - Present · 11 mos". */
export const formatTenure = (job, now = new Date()) => {
  const from = label(parseMonth(job.start));
  const to = job.end ? label(parseMonth(job.end)) : "Present";
  return `${from} - ${to} · ${formatDuration(tenureMonths(job, now))}`;
};

export default formatTenure;
