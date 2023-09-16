import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { Video, Videos } from '@/components/Videos'
import { Category, Categories } from '@/components/Categories'
import { November } from '@/components/November'
import CurrentYear from '@/components/CurrentYear'
import { Contact } from '@/components/Contact'
import { AudioSample } from '@/components/AudioSample'
import { GoBackButton } from '@/components/GoBackButton'
import { Map } from '@/components/Map'

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
  videos: {
    render: Videos,
  },
  video: {
    selfClosing: true,
    render: Video,
    attributes: {
      title: { type: String },
      description: { type: String },
      href: { type: String },
      posterImg: { type: String },
    },
  },
  november: {
    selfClosing: true,
    render: November,
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
}

export default tags
