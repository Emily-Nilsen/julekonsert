export function GoBackButton() {
  return (
    <div className="inline-block">
      <div className="flex justify-end rounded-lg bg-green-200 px-3 py-1.5">
        <button className="" onClick={() => window.history.back()}>
          Gå tilbake
        </button>
      </div>
    </div>
  )
}
