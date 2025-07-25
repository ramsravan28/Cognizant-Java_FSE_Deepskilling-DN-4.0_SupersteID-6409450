import './CohortDetails.css';

function CohortDetails(props) {
  const cohort = props.cohort;
  const statusClass =
    cohort.currentStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue';

  return (
    <div className="box">
      <h3 className={statusClass}>
        {cohort.cohortCode} -
        <span>{cohort.technology}</span>
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
