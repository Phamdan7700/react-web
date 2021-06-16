import ProjectsProgress from "./projects-progress";
import RecentConnect from "./recent-connect";
import RecentMessage from "./recent-message";

function DashBoardRight() {
  return (
    <>
      <RecentMessage />
      <RecentConnect />
      <ProjectsProgress />
    </>
  );
}

export default DashBoardRight;
