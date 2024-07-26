import { GoBackButton } from './GoBackButton'

export function ConcertHeader({ day, date, month, time }) {
  return (
    <div className="-my-6 w-full">
      <div className="flex w-full items-center justify-between">
        <p>
          {' '}
          <span className="capitalize">{day}</span>{' '}
          <span className="font-bold">
            {date}. {month}
          </span>{' '}
          kl. {time}
        </p>
        <GoBackButton />
      </div>
    </div>
  )
}
