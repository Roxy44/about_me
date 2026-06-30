import type { ContentBlock } from './types'

const linkClassName =
  'text-[#3b97ed] underline underline-offset-2 hover:text-[#2563eb]'

type ContentRendererProps = {
  content: ContentBlock[] | string
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="leading-relaxed">
          {block.text}
        </p>
      )

    case 'heading':
      return (
        <h3 key={index} className="mt-2 text-xl font-semibold">
          {block.text}
        </h3>
      )

    case 'list':
      return (
        <ul key={index} className="ml-6 list-disc space-y-1 leading-relaxed">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      )

    case 'project':
      return (
        <div key={index} className="ml-4 space-y-2 border-l-2 border-[#3b97ed] pl-4">
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer"
            className={`font-semibold ${linkClassName}`}
          >
            {block.title}
          </a>
          {block.image && (
            <img
              src={block.image}
              alt={block.title}
              className="max-w-md rounded-lg border border-gray-200"
            />
          )}
          <p className="leading-relaxed text-gray-700">{block.description}</p>
        </div>
      )

    case 'link':
      return (
        <p key={index}>
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            {block.label}
          </a>
        </p>
      )

    case 'image':
      return (
        <img
          key={index}
          src={block.src}
          alt={block.alt}
          className="max-w-md rounded-lg border border-gray-200"
        />
      )

    case 'space':
      return <div key={index} className="h-4" />

    default:
      return null
  }
}

export function ContentRenderer({ content }: ContentRendererProps) {
  if (typeof content === 'string') {
    return <p className="leading-relaxed">{content}</p>
  }

  return <div className="mt-4 space-y-4">{content.map(renderBlock)}</div>
}
