import PageHeader from "../components/layout/PageHeader";
import JobCard from "../components/cards/JobCard";
import jobs from "../data/experience";

const Experience = () => (
  <>
    <PageHeader title="experience" subtitle="Where I've worked, most recent first." />

    {jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </>
);

export default Experience;
