import styled from "styled-components"
import {FaFacebook} from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const Form = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                <Header>
                        <H1>Join the waitlist for <span>HashIT!</span></H1>
                </Header>
                <Body>
                    <Input type="text" placeholder="Full name"/>
                    <Input type="text" placeholder="Email address"/>
                    <Button>Get notified when HashIt is Live</Button>
                    <IconWrap>
                        <FaFacebook/>
                        <BsInstagram/>
                        <AiFillTwitterCircle/>
                        <BsLinkedin/>
                    </IconWrap>

                </Body>

                </Wrapper>
            </Container>
        </div>
    )
};
export default Form;
const IconWrap = styled.div`
display:flex;
color:white;
font-size:27px;
justify-content:space-around;
width:35%;
margin-top:17px;
align-items:center;
@media screen and (max-width: 320px){
    width:50%;
    font-size:22px;

};

` 

const Button = styled.button`
border-radius:9px;
// border:1px solid silver;
// outline: 1px solid #ec5a24;
width:98%;
font-weight:bold;
background-color:white;
height:46px;
margin-top:10px;
color:black;
@media screen and (max-width: 768px){
    width:100%;
    height:55px;
    font-size:17px;
    padding-right:15px;
    margin-bottom:7px;
};
@media screen and (max-width: 500px){
    width:100%;
    font-size:15px;
    height:50px;
    border-radius:10px;
    
};
@media screen and (max-width: 320px){
    width:100%;
    font-size:14px;
    height:50px;
    border-radius:5px;
    
};
`

const Body = styled.div`
width:44%;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
@media screen and (max-width: 768px){
    width:100%;
    font-size:20px;
};
@media screen and (max-width: 500px){
    width:100%;
    font-size:20px;
};
`

const Input = styled.input`
border-radius:5px;
border:1px solid silver;
// outline: 1px solid #ec5a24;
width:95%;
background-color:black;
height:46px;
color:silver;
margin-bottom:16px;
&::placeholder{
    font-size:17px;
    margin-left:6px;
};
@media screen and (max-width: 768px){
    width:99%;
    font-size:20px;
    height:55px;
    border-radius:10px;
};
@media screen and (max-width: 500px){
    width:99%;
    font-size:20px;
    height:50px;
    border-radius:5px;
    &::placeholder{
        font-size:15px
    }
};
@media screen and (max-width: 320px){
    width:99%;
    font-size:20px;
    height:50px;
    border-radius:5px;
    &::placeholder{
        font-size:15px
    }
};

`

const H1 = styled.h1`
text-align:center;
font-size:60px;
color:white;
span{
    color:#ec5a24;
};
@media screen and (max-width: 768px){
    width:90%;
    font-size:40px;
};
@media screen and (max-width: 500px){
    width:100%;
    font-size:38px;

};
@media screen and (max-width: 320px){
    width:100%;
    font-size:33px;

};
`

const Header= styled.div`
width:60%;
@media screen and (max-width: 768px){
    width:90%;
    font-size:20px;
};
@media screen and (max-width: 500px){
    width:100%;
};
`

const Wrapper = styled.div`
width:70%;
display:flex;
// background-color:red;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width: 768px){
    width:80%;
    
};
@media screen and (max-width: 500px){
    width:90%;
    
};
`


const Container = styled.section`
background-color:black;
width:100%;
padding:50px 0px;
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-width: 500px){
    padding-bottom:80px;
    
};
`