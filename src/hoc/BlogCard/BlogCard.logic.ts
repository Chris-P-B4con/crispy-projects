import { BlogCardProps } from './BlogCard'

export const useBlogCard = (props: BlogCardProps) => {
  const { image } = props

  return { image }
}
