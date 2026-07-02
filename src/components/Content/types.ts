export type ContentBlock = {
  type: 'paragraph' | 'heading' | 'list' | 'project' | 'link' | 'image' | 'sub-group' | 'toggle' | 'divider',
  text?: string,
  items?: string[] | {
    icon?: string,
    value: string,
    text: string,
    measureValue?: number,
  }[],
  title?: string,
  name?: string,
  href?: string,
  description?: string,
  image?: string,
  label?: string,
  src?: string,
  alt?: string,
  variant?: 'default' | 'circle',
  size?: number,
  direction?: 'row' | 'column',
  content?: ContentBlock[],
  className?: string,
  caption?: {
    main: string,
    sub?: string,
  },
  dotList?: boolean,
  options?: {
    label: string,
    value: string,
  }[],
  measure?: string,
  columns?: number,
  isShort?: boolean,
}

export type ContentSection = {
  title?: string
  content: ContentBlock[] | string
  link?: string
}
