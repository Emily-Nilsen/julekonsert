export function CalendarText() {
  return (
    <div>
      <div className="hidden sm:block">
        For mer informasjon om hver konsert, klikk på datoen i kalenderen (ved å
        holde musepekeren over datoen ser du hvilken konsert som holdes den
        dagen), eller klikk på konserten i listen.
      </div>
      <div className="sm:hidden">
        For mer informasjon om hver konsert, klikk på konserten i listen.
      </div>
    </div>
  )
}
