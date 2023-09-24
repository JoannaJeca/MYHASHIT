import styled from "styled-components"
import bodyPic from "../assets/Images/waitlist-a41208d5.png"
import flight from "../assets/Images/flight-96b8092f.svg"
import wifi from "../assets/Images/wifi-a041367d.svg"

const Hero = ()=>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Header>
                        <Image src={flight} alt="flight"/>
                        <H1>Supercharge Your Mobile Life with <span>HashIT!</span></H1>
                        <Imager src={wifi} alt="wifi"/>
                        
                    </Header>
                        <Body>
                            <Img src={bodyPic}/>
                        </Body>
                        <Bottom>
                            <h4>
                            Level up your mobile experience with Hashit! Send money, buy airtime, pay utilities, save, earn, learn, connect with friends, explore our vibrant marketplace, advertise your biz, and win exciting giveaways.
                            </h4>
                        </Bottom>
                
                </Wrapper>
            </Container>
        </div>
    )
};
export default Hero;
const Image = styled.img`
postion:absolute;
top:0px;
left:0px;
display:flex;
align-self:self-start;
object-fit:cover;
object-position:center;
margin-top:47px;
// margin-left:7px;
@media screen and (max-width: 768px){
    width:10%;
    
};
`

const Imager = styled.img`
postion:absolute;
bottom:0px;
right:0px;
display:flex;
@media screen and (max-width: 768px){
    width:10%;
align-self:center;

};
align-self:self-end;
@media screen and (max-width: 320px){
    width:10%;
align-self:self-center;
// margin-bottom:7px

};

`


const Bottom = styled.div`
width:60%;
text-align:center;
color:white;
@media screen and (max-width: 768px){
    width:100%;
    margin-top:19px;
};
@media screen and (max-width: 320px){
    width:100%;
    margin-top:19px;
};
h4{
    @media screen and (max-width: 500px){
        font-size:14px;
        line-height:22px;
        
    };
    @media screen and (max-width: 320px){
        font-size:13px;
        line-height:22px;
    }
        
}`

const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;
object-position:center;
@media screen and (max-width: 425px){
    // font-size:24px;
    width:90%;
    object-fit:cover;
object-position:center;
    
};
@media screen and (max-width: 320px){
    // font-size:24px;
    width:100%;
    height:100%;
    object-fit:cover;
object-position:center;
    
};
`

const Body = styled.div`
width:100%;
// background-color:green;
// display:flex;
// justify-content:center;
// align-items:center;
`

const H1 = styled.h1`
text-align:center;
font-size:60px;
color:white;

span{
    color:#ec5a24;
};
@media screen and (max-width:768px){
    font-size:30px;
    text-align:center;


};
@media screen and (max-width: 500px){
    font-size:27px;
    width:100%;
    
};
@media screen and (max-width: 500px){
    font-size:23px;
    width:100%;
    
}

`

const Header= styled.div`
width:68%;
// background-color:red;
display:flex;
position:relative;
margin-top:50px;
@media screen and (max-width: 768px){
    width:80%;
};
@media screen and (max-width: 500px){
    width:100%;
    
}
`

const Wrapper = styled.div`
width:80%;
display:flex;
// background-color:red;

flex-direction:column;
justify-content:center;
align-items:center;`


const Container = styled.section`
background-color:#282828;
width:100%;
padding:60px 0px;
display:flex;
justify-content:center;
align-tems:center;
`