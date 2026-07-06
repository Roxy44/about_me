import { useState, type ReactNode } from 'react';
import { useIsMobile, useLocale } from '../../utils';
import type { ContactListItem, ContentBlock } from './types';
import { CircleCheck } from 'lucide-react';

const linkClassName =
  'text-[#3b97ed] underline underline-offset-2 hover:text-[#2563eb]';

type ContentRendererProps = {
  content: ContentBlock[] | string;
};

type SkillItem = {
  icon?: string;
  value: string;
  text?: string;
  measureValue?: number;
};

function isContactItem(
  item: string | SkillItem | ContactListItem,
): item is ContactListItem {
  return typeof item === 'object' && 'type' in item;
}

function isSkillItem(item: string | SkillItem): item is SkillItem {
  return typeof item === 'object';
}

function chunkItems<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

function renderSkillItem(
  item: SkillItem,
  itemIndex: number,
  isMobile: boolean,
  measure?: string,
) {
  return (
    <li
      key={itemIndex}
      className={`flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 ${isMobile ? 'w-full' : 'w-[220px]'}`}
    >
      {item.icon && (
        <img
          src={item.icon}
          alt={item.text}
          className="size-6 shrink-0 object-contain"
        />
      )}
      <span className={`min-w-0 flex-1 ${isMobile ? 'text-[16px]' : ''}`}>{item.text}</span>
      {measure && item.measureValue !== undefined && (
        <span className="shrink-0 text-sm font-semibold text-[#3b97ed]">
          {item.measureValue + ' ' + measure}
        </span>
      )}
    </li>
  );
};

function renderSkillColumns(
  items: (string | SkillItem)[],
  filterValue: string | undefined,
  columnsCount: number,
  isMobile: boolean,
  measure?: string,
) {
  const filteredItems = items.filter((item) => {
    if (typeof item === 'string') return true
    if (!filterValue) return true
    return item.value === filterValue
  }) as SkillItem[]

  const columns = chunkItems(filteredItems, columnsCount);

  return (
    <div className={`flex flex-wrap ${isMobile ? 'justify-center gap-4' : 'items-start gap-6'}`}>
      {columns.map((columnItems, columnIndex) => (
        <ul key={columnIndex} className={`flex list-none flex-col gap-3 ${isMobile ? 'w-full' : ''}`}>
          {columnItems.map((item, itemIndex) =>
            renderSkillItem(item, itemIndex, isMobile, measure),
          )}
        </ul>
      ))}
    </div>
  );
};



function renderBlock(
  block: ContentBlock,
  index: number,
  t: (text: string) => string,
  isMobile: boolean,
  filterValue?: string,
): ReactNode {
  switch (block.type) {
    case 'paragraph':
      return (
        <div key={index} className="space-y-2">
          {block.title && (
            <h2 className="text-2xl font-bold">{t(block.title)}</h2>
          )}
          <p className={`leading-relaxed ${isMobile ? 'text-[16px]' : ''} ${block.className ?? ''}`}>{block.text}</p>
        </div>
      )

    case 'heading':
      return (
        <div
          key={index}
          className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
        >
          <span className={`font-semibold ${isMobile ? 'text-lg' : 'text-xl'}`}>
            {block.text}
          </span>
          {block.caption && (
            <span className="text-sm italic text-gray-500">
              {t(block.caption.main)}
            </span>
          )}
        </div>
      )

    case 'list': {
      const hasSkillItems = (block.items ?? []).some(isSkillItem);

      if (hasSkillItems) {
        return (
          <div key={index} className="space-y-3">
            {renderSkillColumns(
              block.items ?? [],
              filterValue,
              block.columns ?? 3,
              isMobile,
              block.measure,
            )}
            {block.caption && (
              <div className="text-sm italic text-gray-500">
                {t(block.caption.main)}
              </div>
            )}
          </div>
        );
      };

      return (
        <ul
          key={index}
          className={`ml-2 space-y-1 leading-relaxed ${
            block.dotList ? 'list-disc marker:text-green-700' : 'list-none'
          }`}
        >
          {(block.items ?? []).map((item, itemIndex) => {
            if (typeof item !== 'string') return null

            return (
              <li
                key={itemIndex}
                className={block.dotList ? 'ml-6' : 'flex items-start gap-3'}
              >
                {!block.dotList && (
                  <CircleCheck className="mt-1 size-5 shrink-0 text-green-700" />
                )}
                <span className={`${isMobile ? 'text-[16px]' : ''}`}>{item}</span>
              </li>
            )
          })}
        </ul>
      );
    };

    case 'project':
      return (
        <div key={index} className="space-y-2 border-l-2 border-[#3b97ed] pl-4">
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer"
            className={`font-semibold ${linkClassName} ${isMobile ? 'text-[16px]' : ''}`}
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
          <p className={`leading-relaxed text-gray-700 ${isMobile ? 'text-sm' : ''}`}>{block.description}</p>
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
      );

    case 'image':
      if (block.variant === 'circle') {
        const size = block.size ?? 400;

        return (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className={`shrink-0 overflow-hidden rounded-full ${block.className ?? ''}`}
              style={{ width: size, height: size }}
            >
              <img
                src={block.src}
                alt={block.alt ?? ''}
                className="object-cover"
              />
            </div>
            {block.caption && (
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">{t(block.caption.main)}</div>
                {block.caption.sub && (
                  <div className="italic">{t(block.caption.sub)}</div>
                )}
              </div>
            )}
          </div>
        );
      };

      return (
        <img
          key={index}
          src={block.src}
          alt={block.alt ?? ''}
          className={block.className ?? 'max-w-md rounded-lg border border-gray-200'}
        />
      );

    case 'contacts':
      return <ContactsBlock key={index} block={block} t={t} />;

    case 'sub-group':
      return (
        <div key={index}>
          {block.title && (
            <div className={`mb-1 border-2 border-black-500 bg-blue-400 px-[12px] py-[4px] font-bold text-white ${isMobile ? 'text-xl text-center rounded-2xl' : 'w-fit text-2xl rounded-xl'}`}>
              {t(block.title)}
            </div>
          )}
          <div
            className={`flex ${block.direction === 'row' ? 'flex-row items-center' : 'flex-col'} ${block.className ?? 'gap-4'}`}
          >
            {block.isShort ? (
              <ExpandList
                list={block.content ?? []}
                t={t}
                isMobile={isMobile}
                filterValue={filterValue}
              />
            ) : (
              (block.content ?? []).map((child, childIndex) =>
                renderBlock(child, childIndex, t, isMobile, filterValue),
              )
            )}
          </div>
        </div>
      );

    case 'toggle':
      return <ToggleBlock key={index} block={block} t={t} isMobile={isMobile} />;

    case 'divider':
      return <div key={index} className="my-2 h-[1px] w-full" />;

    default:
      return null;
  };
};

function ContactsBlock({
  block,
  t,
}: {
  block: ContentBlock;
  t: (text: string) => string;
}) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      window.setTimeout(() => {
        setCopiedValue((current) => (current === value ? null : current));
      }, 2000)
    } catch {
      setCopiedValue(null);
    }
  };

  return (
    <div className={`relative mt-4 ${isMobile ? 'w-full' : 'w-fit'}`}>
      {isMobile && <div
        role="status"
        aria-live="polite"
        className={`mb-2 text-sm text-center font-medium text-green-700 transition-opacity ${copiedValue ? 'block' : 'hidden  '}`}
      >
        {t('Скопировано!')}
      </div>}
      <div className={`flex gap-2 rounded-lg bg-gray-100 ${isMobile ? 'justify-center' : ''}`}>
        {(block.items ?? []).map((item, itemIndex) => {
          if (typeof item === 'string' || !isContactItem(item)) return null;

          if (item.type === 'link') {
            return (
              <a
                key={itemIndex}
                href={item.value}
                target="_blank"
                rel="noreferrer"
                title={item.text}
                className="rounded-md p-1 transition-colors hover:bg-white"
              >
                <img
                  src={item.icon}
                  alt={item.text ?? ''}
                  className="size-8"
                />
              </a>
            );
          };

          return (
            <button
              key={itemIndex}
              type="button"
              title={item.text}
              onClick={() => handleCopy(item.value)}
              className={`cursor-pointer rounded-md p-1 transition-colors hover:bg-white`}
            >
              <img
                src={item.icon}
                alt={item.text ?? ''}
                className="size-8"
              />
            </button>
          );
        })}
      </div>
      {!isMobile && <div
        role="status"
        aria-live="polite"
        className={`mb-2 text-sm font-medium text-green-700 transition-opacity ${copiedValue ? 'block' : 'hidden  '}`}
      >
        {t('Скопировано!')}
      </div>}
    </div>
  );
};

function ExpandList({
  list,
  t,
  isMobile,
  filterValue,
}: {
  list: ContentBlock[]
  t: (text: string) => string
  isMobile: boolean
  filterValue?: string
}) {
  const [isShort, setIsShort] = useState(true);

  return (
    <>
      {(list ?? []).slice(0, isShort ? 1 : undefined).map((child, childIndex) =>
        renderBlock(child, childIndex, t, isMobile, filterValue),
      )}
      <div className={`w-fit underline hover:text-[#3b97ed] active:text-[#2563eb] cursor-pointer ${isMobile ? 'text-[16px]' : ''}`} onClick={() => setIsShort((prev) => !prev)}>
        {isShort ? t('Развернуть') : t('Свернуть')}
      </div>
    </>
  );
};

function ToggleBlock({
  block,
  t,
  isMobile,
}: {
  block: ContentBlock
  t: (text: string) => string
  isMobile: boolean
}) {
  const [activeValue, setActiveValue] = useState(
    block.options?.[0]?.value ?? '',
  );

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className={`flex flex-wrap gap-2 ${isMobile ? 'justify-center' : ''}`}>
        {(block.options ?? []).map((option) => {
          const isActive = activeValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setActiveValue(option.value)}
              className={`cursor-pointer rounded-xl border-2 px-[12px] py-[4px] transition-colors
                ${isActive
                    ? 'border-green-700 bg-green-700 text-white'
                    : 'border-black bg-white text-black hover:border-green-700'}
                ${isMobile ? 'text-[16px]' : ''}
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {(block.content ?? []).map((child, childIndex) =>
        renderBlock(child, childIndex, t, isMobile, activeValue),
      )}
    </div>
  );
};

export function ContentRenderer({ content }: ContentRendererProps) {
  const { t } = useLocale();
  const isMobile = useIsMobile();

  if (typeof content === 'string') {
    return <p className="leading-relaxed">{content}</p>;
  };

  return (
    <div className="space-y-4">
      {content.map((block, index) => renderBlock(block, index, t, isMobile))}
    </div>
  );
};
