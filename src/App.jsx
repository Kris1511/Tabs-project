import { useEffect, useState } from "react";
import JobsInfo from "./components/JobsInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  console.log(jobs);

  return (
    <div>
      <section className="jobs-center">
        {/* btn container */}
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        {/* job info */}
        <JobsInfo jobs={jobs} currentItem={currentItem} />
      </section>
    </div>
  );
}

export default App;
