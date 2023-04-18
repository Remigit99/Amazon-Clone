import PhoneData from '../../Data/ProdPhones'
import './Products.css';




const Products = () => {
    return (
        <div className="container products__container">

            {
                PhoneData.map(({ id, img, tittle, description, price }, index) => {
                    return (

                        <article className="product__card" key={id}>

                            <div className="product__img">
                                <img src={img} alt={tittle} />
                            </div>

                            <div className="product__info">
                                <h4>{tittle}</h4>
                                <p className="desc">{description}</p>
                                <h4 className="product__price">${price}</h4>
                                <p className='rank'>{index + 1}</p>
                            </div>

                        </article>

                    )

                })
            }

        </div>
    )
}

export default Products;