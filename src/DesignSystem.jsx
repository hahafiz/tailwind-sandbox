function DesignSystem() {
  return (
    <div>
      <h1 className="">This is a title</h1>
      <h2 className="">This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a>This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">
          This is a secondary button
        </button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary">
          This is a disabled button
        </button>
      </div>
      <div>
        <input type="text" placeholder="This is an input" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Checkbox</label>
      </div>
      <div>
        <select name="" id="">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
      </div>
      <h1 className="">This is a title</h1>
      <h2 className="">This is a subtitle</h2>
    </div>
  );
}

export default DesignSystem;
