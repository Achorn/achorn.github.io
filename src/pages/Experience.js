import { Divider, Stack } from "@mui/material";
import PageHeader from "../components/layout/PageHeader";
import JobCard from "../components/cards/JobCard";
import jobs from "../data/experience";

const Experience = () => (
  <>
    <PageHeader
      title="Experience"
      subtitle="Where I've worked, most recent first."
    />

    <Stack spacing={5} divider={<Divider flexItem />}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Stack>
  </>
);

export default Experience;
