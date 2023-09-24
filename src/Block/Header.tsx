import styled from "styled-components"
import Logo from "../assets/Images/logo-2ed48836.svg"
import light from "../assets/Images/light-mode-btn-8c3556bd.svg"
import dark from "../assets/Images/dark-mode-btn-0c4fd1a3.svg"

const Header = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <ImgHold><Imag src={Logo} alt="logo"/></ImgHold>
                    <Wrap>
                          <Img src={light} alt=""/>
                        <Image src={dark} alt=""/> 

                    </Wrap>
                </Wrapper>
            </Container>
        </div>
    )
};
export default Header;
const Wrap = styled.div`
display:flex;
// background-color:green;
`

const ImgHold = styled.div`
color:white;
// background-color:green;

`
const Imag = styled.img`
object-fit:cover;
object-position:center;
// display:none;

`

const Img = styled.img`
object-fit:cover;
object-position:center;
display:none;

`
const Image = styled.img`
object-fit:cover;
object-position:center;
`

const Wrapper = styled.div`
width:80%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`


const Container = styled.header`
width:100%;
height:80px;
background-color:black;
display:flex;
justify-content:center;
align-items:center;
position:fixed;
z-index:1;
`