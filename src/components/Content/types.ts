export type ContentBlock = {
  type: 'paragraph' | 'heading' | 'list' | 'project' | 'link' | 'image' | 'sub-group',
  text?: string,
  items?: string[],
  title?: string,
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
}

export type ContentSection = {
  title?: string
  content: ContentBlock[] | string
  link?: string
}
