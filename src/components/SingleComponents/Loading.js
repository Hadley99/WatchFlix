const Loading = () => {
  return (
    <div className="col">
      <div className="loading-card p-2">
        <div className="rounded loading-image w-100"></div>
        <p className="mb-2 loading-title rounded-pill w-100"></p>
        <small className="d-flex  justify-content-between">
          <div className="rounded-pill loading-type"></div>
          <div className="rounded-pill loading-year"></div>
        </small>
      </div>
    </div>
  );
};

export default Loading;
