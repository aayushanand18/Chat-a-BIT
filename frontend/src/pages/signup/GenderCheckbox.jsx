const GenderCheckbox = () => {
  return (
    <div className="flex gap-4 mt-2 mb-0">
        <div className="form-control">
            <label className="{`label gap-2 cursor-pointer`}">
                <span className="label-text"> Male </span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
        <div className="form-control">
            <label className="{`label gap-2 cursor-pointer`}">
                <span className="label-text"> Female </span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox