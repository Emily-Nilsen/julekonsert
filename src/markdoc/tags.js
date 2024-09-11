import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Category, Categories } from '@/components/Categories'
import { November } from '@/components/November'
import { Desember } from '@/components/Desember'
import CurrentYear from '@/components/CurrentYear'
import { Contact } from '@/components/Contact'
import { AudioSample } from '@/components/AudioSample'
import { GoBackButton } from '@/components/GoBackButton'
import { Map } from '@/components/Map'
import { Billetter } from '@/components/Billetter'
import { ConcertDetails } from '@/components/ConcertDetails'
import { ConcertHeader } from '@/components/ConcertHeader'
import { ConcertIntroduction } from '@/components/ConcertIntroduction'
import { ExternalLink } from '@/components/ExternalLink'
import { Reviews } from '@/components/Reviews'
import { SpotifyPlayer } from '@/components/SpotifyPlayer'
import { CalendarText } from '@/components/CalendarText'
import { ChristmasConcertText } from '@/components/ChristmasConcertText'
import { getConcertYearWord } from '../../utils/getConcertYearWord'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  'concert-year': {
    selfClosing: true,
    render: () => {
      const word = getConcertYearWord()
      console.log('Concert year word is:', word) // Debugging log
      return <>{word}</>
    },
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  billetter: {
    selfClosing: true,
    render: Billetter,
    attributes: {
      concert: { type: String },
      outlet: { type: String },
      ticketUrl: { type: String },
    },
  },
  'concert-details': {
    selfClosing: true,
    render: ConcertDetails,
    attributes: {
      concert: { type: String },
      day: { type: String },
      date: { type: String },
      month: { type: String },
      location: { type: String },
      time: { type: String },
    },
  },
  'concert-header': {
    selfClosing: true,
    render: ConcertHeader,
    attributes: {
      day: { type: String },
      date: { type: String },
      month: { type: String },
      time: { type: String },
    },
  },
  'concert-introduction': {
    selfClosing: true,
    render: ConcertIntroduction,
    attributes: {
      day: { type: String },
      location: { type: String },
      date: { type: String },
      month: { type: String },
    },
  },
  categories: {
    render: Categories,
  },
  category: {
    selfClosing: true,
    render: Category,
    attributes: {
      title: { type: String },
      imageUrl: { type: String },
      href: { type: String },
    },
  },
  contact: {
    selfClosing: true,
    render: Contact,
  },
  reviews: {
    selfClosing: true,
    render: Reviews,
  },
  'spotify-player': {
    selfClosing: true,
    render: SpotifyPlayer,
  },
  november: {
    selfClosing: true,
    render: November,
  },
  desember: {
    selfClosing: true,
    render: Desember,
  },
  'calendar-text': {
    selfClosing: true,
    render: CalendarText,
  },
  'christmas-concert-text': {
    selfClosing: true,
    render: ChristmasConcertText,
  },
  'current-year': {
    selfClosing: true,
    render: CurrentYear,
  },
  'go-back-button': {
    selfClosing: true,
    render: GoBackButton,
  },
  'audio-sample': {
    selfClosing: true,
    render: AudioSample,
    attributes: {
      title: { type: String },
      description: { type: String },
      audioUrl: { type: String },
    },
  },
  map: {
    selfClosing: true,
    render: Map,
    attributes: {
      src: { type: String },
    },
  },
  'external-link': {
    selfClosing: true,
    render: ExternalLink,
    attributes: {
      href: { type: String },
      children: { type: String },
    },
  },
}

export default tags
