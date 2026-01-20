import { TagImage } from "./styles"

type Props = {
    children: 'Japonesa' | 'Italiana'
}

const Tag = ({children}: Props) => (
    <TagImage>{children}</TagImage>
)

export default Tag