export function getConcertYearWord() {
  const currentYear = new Date().getFullYear()
  const startYear = 2006 // The year the concert series began
  const yearDiff = currentYear - startYear

  const yearWords = [
    'attende',
    'nittende',
    'tjuende',
    'tjueførste',
    'tjueandre',
    'tjuetredje',
    'tjuefjerde',
    'tjuefemte',
    'tjuesjette',
    'tjuesyvende',
    'tjueåttende',
    'tjueniende',
    'trettiende',
  ]

  return yearWords[yearDiff - 17] || 'ukjent'

  return word
}
