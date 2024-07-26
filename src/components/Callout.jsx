import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { useState } from 'react'

const styles = {
  note: {
    container:
      'bg-amber-50/70 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-amber-800 dark:text-amber-400 font-medium',
    body: 'text-amber-900 [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-gray-300 dark:prose-code:text-gray-300',
  },
  warning: {
    container:
      'bg-fuchsia-50 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10',
    title: 'text-fuchsia-900 dark:text-fuchsia-500 font-medium',
    body: 'text-fuchsia-800 [--tw-prose-underline:theme(colors.fuchsia.400)] [--tw-prose-background:theme(colors.fuchsia.50)] prose-a:text-fuchsia-900 prose-code:text-fuchsia-900 dark:text-gray-300 dark:[--tw-prose-underline:theme(colors.teal.700)] dark:prose-code:text-gray-300',
  },
}

function TicketIcon(props) {
  return (
    <svg {...props} viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  )
}

const icons = {
  note: (props) => <Icon icon="warning" {...props} />,
  warning: (props) => <Icon icon="formula" color="fuchsia" {...props} />,
}

export function Callout({ type = 'note', title, children }) {
  const [copied, setCopied] = useState(false)

  let IconComponent = icons[type]

  const handleCopyClick = () => {
    // Function to extract text content from React elements recursively
    const extractTextContent = (element) => {
      if (typeof element === 'string') {
        return element
      } else if (Array.isArray(element)) {
        return element.map(extractTextContent).join('')
      } else if (element && element.props && element.props.children) {
        return extractTextContent(element.props.children)
      }
      return ''
    }

    // Extract text content from children
    const textContent = extractTextContent(children)

    // Copy the text content to clipboard
    const el = document.createElement('textarea')
    el.value = textContent
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      {/* <IconComponent className="flex-none w-8 h-8" /> */}
      <div className="ml-4 flex-auto">
        <div className="flex justify-between">
          <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
            {title}
          </p>
          <button
            onClick={handleCopyClick}
            className="dark:bg-t flex items-center justify-center rounded-lg bg-white/50 px-2 text-base text-gray-500 shadow-md shadow-black/5 ring-1 ring-black/5 transition duration-150 ease-in-out hover:bg-white/80 dark:bg-gray-700 dark:text-gray-300 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/10"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-teal-500 dark:text-teal-300">
                <TicketIcon className="h-4 w-4 fill-teal-400 dark:fill-teal-300" />
                Copied!
              </span>
            ) : (
              <>
                <span className="flex items-center gap-1 sm:hidden">
                  <TicketIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-300" />
                  Copy
                </span>
                <span className="hidden items-center gap-1 sm:flex">
                  <TicketIcon className="h-4 w-4 fill-gray-400 dark:fill-gray-300" />
                  Copy prompt
                </span>
              </>
            )}
          </button>
        </div>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
