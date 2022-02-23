const Tabs = ({ toggleTab, toggleState, setToggleState, setPage }) => {
  return (
    <div>
      <div className="row row-cols-2  gx-3 text-center">
        <div className="col">
          <div
            className={
              toggleState === 0
                ? "my-3 active-tab rounded"
                : " tab rounded my-3"
            }
            onClick={() => toggleTab(0)}
          >
            <div>
              <h5 className="text-decoration-none d-md-none d-block m-0  py-2 ">
                Movies
              </h5>
              <h5 className="text-decoration-none d-md-block d-none m-0  py-2">
                Search in Movies
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={
              toggleState === 1
                ? " my-3 active-tab rounded"
                : " tab rounded my-3"
            }
            onClick={() => toggleTab(1)}
          >
            <div>
              <h5 className="text-decoration-none d-md-none d-block m-0 py-2 ">
                Shows
              </h5>
              <h5 className="text-decoration-none d-md-block d-none m-0   py-2">
                Search in Tv Shows
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
