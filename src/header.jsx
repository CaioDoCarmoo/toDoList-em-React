import { HeaderMain, Shopping, Title, SubTitle, ContainerHeader } from "./styleHeader";


function Header({ listProducts}) {
  

  return (
    <HeaderMain>
      <Shopping />
      <ContainerHeader>
          <Title>Lista de compras</Title>
          <SubTitle>{` ${listProducts.length} Itens pendentes`}</SubTitle>
      </ContainerHeader>
    </HeaderMain>
  )
}


export default Header
