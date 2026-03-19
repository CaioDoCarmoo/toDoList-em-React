import { Plus, Trash, TrashPurchasedItem, MainContainer, ContainerInputs, ContainerList, Row, CountPurchasedItems, Button, ContainerPurchase } from "./styleApp"
import { v4 as uuid } from 'uuid';
import { useState } from "react";
import Header from './header.jsx';


function App() {
  //Código JavaScript

  const [listProducts, setListProducts] = useState([]);
  const [listProductsPurchased, setListProductsPurchased] = useState([])
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

    const newListProducts = listProducts.filter(products => (
      products.id !== id
    ))

    setListProducts(newListProducts)
  }
 

  function clickCheck(id) {
  // pega o item que foi clicado
  const productSelected = listProducts.find(product => product.id === id)

  // remove da lista de pendentes
  const newListProducts = listProducts.filter(product => product.id !== id)

  // adiciona na lista de comprados
  setListProducts(newListProducts)
  setListProductsPurchased([...listProductsPurchased, productSelected])
}

function uncheckProduct(id) {
  const productSelected = listProductsPurchased.find(product => product.id === id)

  const newPurchased = listProductsPurchased.filter(product => product.id !== id)

  setListProductsPurchased(newPurchased)
  setListProducts([...listProducts, productSelected])
}


  // Retorna código HTML
  return (
    <MainContainer>

      <Header listProducts={listProducts} />

      <ContainerInputs>
        <input onChange={typingProduct} className="nameItem" type="text" placeholder="Nome do item..." />
        <input onChange={typingQuantity} className="quantity" type="text" placeholder="Qtd" />
        <Button disabled={isDisable} onClick={showScreen}><Plus /> Adicionar item</Button>
      </ContainerInputs>
      <ContainerList>
        <ul>
          {
            listProducts.length > 0 ? (
              listProducts.map(products => (
                <li key={products.id}>
                  <label htmlFor={products.name}>
                    <input onChange={() => clickCheck(products.id)} type="checkbox" id={products.name} />
                    <span className="text">{products.name}</span><span className="qtd">{products.quantity}</span>
                    <Trash onClick={() => trashProducts(products.id)}></Trash>
                  </label>
                </li>
              ))
            ) : (
              <p>Não há itens na lista de PENDENTES</p>
            )

          }
        </ul>
        <CountPurchasedItems>
          <p className="productsPurchased">Comprados(1)</p>
          <p className="clearPurchased"><TrashPurchasedItem /> Limpar comprados</p>
        </CountPurchasedItems>
        <ContainerPurchase>
          <ul>
            {
              listProductsPurchased.map ( purchased => (
                <label htmlFor={purchased.name}>
                  <input onChange={() => uncheckProduct(purchased.id)} type="checkbox" id={purchased.name} checked/>
                  <del><span className="text">{purchased.name}</span><span className="qtd">{purchased.quantity}</span></del>
                  <Trash onClick={() => trashProducts(purchased.id)}></Trash>
                </label>
              ))
            }
          </ul>
        </ContainerPurchase>
      </ContainerList>

    </MainContainer>
  )
}


export default App
