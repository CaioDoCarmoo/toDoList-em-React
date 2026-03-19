import { Plus, Trash, TrashPurchasedItem, MainContainer, ContainerInputs, ContainerList, Row, CountPurchasedItems, Button } from "./styleApp"
import { v4 as uuid } from 'uuid';
import { useState } from "react";
import Header from './header.jsx';
 

function App() {
  //Código JavaScript

  const [listProducts, setListProducts] = useState([]);
  const [nameProducts, setNameProducts] = useState("")
  const [quantityProducts, setQuantityProducts] = useState("")

  const isDisable = !nameProducts.trim() || !quantityProducts.trim()

  const typingProduct = (event) => {
    setNameProducts(event.target.value)

  }

  const typingQuantity = (event) => {
    setQuantityProducts(`(${event.target.value})`)
  }

  function showScreen(event) {
    setListProducts([...listProducts, { id: uuid(), name: nameProducts, quantity: quantityProducts }])
  }

  function trashProducts(id) {

    const newListProducts = listProducts.filter( products => (
      products.id !== id
    ))

    setListProducts(newListProducts)
  }

  function clickCheck(event) {
    console.log(event.target.checked)
  }

  // Retorna código HTML
  return (
    <MainContainer>

      <Header listProducts={listProducts}/>

      <ContainerInputs>
        <input onChange={typingProduct} className="nameItem" type="text" placeholder="Nome do item..." />
        <input  onChange={typingQuantity} className="quantity" type="text" placeholder="Qtd" />
        <Button disabled={isDisable} onClick={showScreen}><Plus /> Adicionar item</Button>
      </ContainerInputs>
      <ContainerList>
        <ul>
          {
            listProducts.length > 0 ? (
              listProducts.map(products => (
                <li key={products.id}>
                  <label htmlFor={products.name}>
                    <input onChange={clickCheck} type="checkbox" id={products.name}/>
                    <span className="text">{products.name}</span><span className="qtd">{products.quantity}</span>
                    <Trash onClick={ () => trashProducts(products.id)}></Trash>
                  </label>
                </li>
              ))
            ) : (
              <p>Não há itens na lista</p>
            )

          }
        </ul>
      </ContainerList>
      <CountPurchasedItems>
        <p className="productsPurchased">Comprados(1)</p>
        <p className="clearPurchased"><TrashPurchasedItem/> Limpar comprados</p>
      </CountPurchasedItems>
      <ContainerList>
        <label htmlFor="Product2">
          <input type="checkbox" id="Product2" />
          <del><span className="text">Feijão</span><span className="qtd">(1 Pacote)</span></del>
        </label>
      </ContainerList>
    </MainContainer>
  )
}


export default App
