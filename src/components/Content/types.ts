export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | {
      type: 'project'
      title: string
      href: string
      description: string
      image?: string
    }
  | { type: 'link'; label: string; href: string }
  | { type: 'image'; src: string; alt: string }

export type ContentSection = {
  title?: string
  content: ContentBlock[] | string
  link?: string
}
