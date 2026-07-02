import { useLocale } from '../../utils'
import type { ContentBlock } from './types'
import { CircleCheck } from 'lucide-react'

const linkClassName =
  'text-[#3b97ed] underline underline-offset-2 hover:text-[#2563eb]'

type ContentRendererProps = {
  content: ContentBlock[] | string
}

function renderBlock(
  block: ContentBlock,
  index: number,
  t: (text: string) => string,
) {
  switch (block.type) {
    case 'paragraph':
      return (
        <div key={index} className="space-y-2">
          {block.title && (
            <h2 className="text-2xl font-bold">{t(block.title)}</h2>
          )}
          <p className="leading-relaxed">{block.text}</p>
        </div>
      )

    case 'heading':
      return (
        <h3 key={index} className="text-xl font-semibold">
          {block.text}
        </h3>
      )

    case 'list':
      return (
        <ul key={index} className="ml-2 list-none space-y-1 leading-relaxed">
          {(block.items ?? []).map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-center gap-2 gap-3">
              <CircleCheck className="w-[20px] h-[20px] text-green-700" />
              {item}
            </li>
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

    case 'image': {
      if (block.variant === 'circle') {
        const size = block.size ?? 400

        return (
          <div className="flex flex-col items-center gap-2">
            <div
              key={index}
              className={`shrink-0 overflow-hidden rounded-full ${block.className ?? ''}`}
              style={{ width: size, height: size }}
            >
              <img
                src={block.src}
                alt={block.alt ?? ''}
                className="object-cover"
              />
            </div>
            {block?.caption && <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">{t(block.caption.main)}</div>
              {block.caption.sub && <div className="italic">{t(block.caption.sub)}</div>}
            </div>}
          </div>
        )
      }

      return (
        <img
          key={index}
          src={block.src}
          alt={block.alt ?? ''}
          className={block.className ?? 'max-w-md rounded-lg border border-gray-200'}
        />
      )
    }

    case 'sub-group': 
      return (
        <div key={index}>
          {block.title && (
            <div className="w-fit text-2xl font-bold px-[12px] py-[4px] border-2 border-black-500 rounded-xl bg-black text-white mb-1">
            {t(block.title)}
          </div>
          )}
          <div
            className={`flex gap-4 ${block.direction === 'row' ? 'flex-row items-center' : 'flex-col'} ${block.className ?? ''}`}
          >
            {(block.content ?? []).map((child, childIndex) =>
              renderBlock(child, childIndex, t),
            )}
          </div>
        </div>
      )

    default:
      return null
  }
}

export function ContentRenderer({ content }: ContentRendererProps) {
  const { t } = useLocale()

  if (typeof content === 'string') {
    return <p className="leading-relaxed">{content}</p>
  }

  return (
    <div className="space-y-4">
      {content.map((block, index) => renderBlock(block, index, t))}
    </div>
  )
}
