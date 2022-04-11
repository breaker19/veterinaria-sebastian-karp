import React from 'react';
import Items  from "./Item";
import {Container, Row, Col} from 'react-bootstrap';


const ItemList = ({ lista }) => {
    return (
    <>
<Container>
<Row>

        <div>
          <div>
               {

               lista.map((item => 

                <Items
                    imagen={item.image}
                    descripcion={item.description}
                    stock={item.stock}
                    precio={item.price}
                    product={item.product}
                    vencimiento={item.vencimiento}
                    id={item.id}
                    key={item.id}
                    memes={item.meme}
                    category={item.category}
                />))
               
            }
            </div>
            </div>
            </Row>
            </Container>
            </>
    );

    
}
export default ItemList; 