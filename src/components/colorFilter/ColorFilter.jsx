function ColorFilter() {
  return (
    <div className=" d-flex flex-column  p-2 position-relative">
      <div className="border p-2">
        <h4 className="mb-2">Color</h4>
        <div className="d-flex justify-content-start mb-4">
          <input
            className="text-center w-75"
            type="text"
            placeholder={"Enter Color Code"}
          />
        </div>
        <div className="form-check d-flex flex-column justify-content-center">
          <div className="">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className="">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorFilter;
