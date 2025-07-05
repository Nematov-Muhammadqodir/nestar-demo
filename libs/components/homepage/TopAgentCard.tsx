import { Stack } from "@mui/material";

const TopAgentsCard = () => {
  return (
    <Stack className="top-agent-card">
      <img src="/img/profile/girl.svg" alt="" />
      <strong className="agent-title">Kevin</strong>
      <span className="agents-type">Agent</span>
    </Stack>
  );
};

export default TopAgentsCard;
