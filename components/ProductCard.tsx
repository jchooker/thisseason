import {Card} from 'react-bootstrap'

type ProductCardProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function ProductCard({}: ProductCardProps) {
    return <Card>
        <Card.Img style={{objectFit: "cover"}}></Card.Img>
    </Card>
}