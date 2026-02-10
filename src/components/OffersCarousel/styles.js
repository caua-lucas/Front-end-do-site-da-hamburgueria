import styled from 'styled-components'

export const Offers = styled.div`
    img {
    margin-top: 80px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    display: block;

  }

`
export const Container = styled.div`
  background: #FFFFFF;
.rec.rec-arrow{
  background-color:#9758a6 ;
  color:#FFFFFF;
  filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
  border:none;

}
.rec.rec-arrow:hover{
  border:2px solid #9758a6;
  background-color: #efefef;
  color:#9758a6;

}
.rec.rec-arrow:disabled{
  border:none;
  background-color: #bebebf;
  color:#efefef;
}
`
export const ContainerItemss = styled.div`
    display:flex;
    flex-direction: column;

    p{
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 120%;
      color:#424242;
      margin-top:3px;
    }
`
export const Button = styled.button`
    margin-top: 16px;
    background: #9758a6;
    border-radius: 8px;
    height: 50px;
    border:none;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color:#FFFFFF;
    cursor:pointer;

    &:hover{
      opacity: 0.7;
    }

    &:active{
      opacity: 0.6;
    }
`
export const OffersImg = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: 30px;
`

