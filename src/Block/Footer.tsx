import styled from "styled-components"

const Footer = ()=>{
    return(
        <div>
            <Container>
                <p>2023 HashIT App Ltd.
                     Allrights reserved.</p>
            </Container>
        </div>
    )
};
export default Footer;

const Container = styled.footer`
width:100%;
display:flex;
padding:34px 0px;
background-color:#282828;
color:silver;
justify-content:center;
@media screen and (max-width: 320px){
    width:70%;
    // font-size:20px;
    height:50px;
    border-radius:5px;
    padding:35px 55px;
    text-align:center;
// display:flex;
// justify-content:center;

};
`