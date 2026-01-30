import { TagImage } from "./styles"

type Props = {
    children: string[]
}

const Tag = ({children}: Props) => (
    <TagImage>{children}</TagImage>
)

export default Tag