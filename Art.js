
import React, {useState,useEffect, useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import WebFont from 'webfontloader';

const art1 = require('../art1.jpeg')
const art2 = require('../art2full.jpeg')
const art3 = require('../art3full.jpeg')
const art4 = require('../art4full.jpeg')
const art5 = require('../art5new.jpg')
const art6 = require('../KYN Designed Avatar Collection B dogtag no  hand.jpg')
const art7 = require('../KYN Designed Avatar Collection C.jpg')
const art8 = require('../KYN Designed Avatar Collection E2.jpg')
const art9 = require('../KYN Designed Avatar Collection G2.jpg')
const art10 = require('../KYN Designed Avatar Collection H.jpg')
const art11 = require('../KYN Designed Avatar Collection I.jpg')
const art12 = require('../KYN Designed Avatar Collection J.jpg')
const art13 = require('../KYN Designed Avatar Collection K.jpg')
const art14 = require('../KYN_Designed_Avatar_Collection_F3.jpeg')
const art15 = require('../KYN_Designed_Avatar_Collection_L2a.jpeg')
function Art() {
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)
  let style={
    fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',textAlign:'center',marginTop:10
  }
  let phoneStyle={
    fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',marginLeft:'10px'
  }
  let phoneSubHead = {
    fontWeight:900, fontSize:'1.3rem',fontFamily:'Bree Serif',position:'relative', color:'white'
  }
  let phoneSubHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'2.2rem', fontWeight:700, color:'white'
  }
  let subHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'4rem', fontWeight:700, color:'black',transform:'translateY(0px)'
  }
  let subHead = {
    fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative',color:'#36454F'
  }
  const ImageItem = ({img,forwardRef,phone}) => {
let play = (e) => {
  forwardRef.current.style.animationPlayState = 'running'
}
let pause = (e) => {
  forwardRef.current.style.animationPlayState = 'paused'
}
  return(
      <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)} phone={phone} >
  <img src={img} />
  
  </ImgContainer>
  )

}
const[openCard, setOpenCard] = useState(-1)
const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
useEffect(() => {
    window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
     WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka','Roboto Condensed', 'Smooch Sans', 'Oswald','PT Sans Narrow','Bree Serif', "Exo", 'Patua One', 'Teko', 'Cuprum', 'Share', 'Jockey One','Dosis']
      }
    });
   
   }, [])

   console.log(phone)
  return (
    <div style={{height:'100vh',width:'100%', overflowX:'-moz-hidden-unscrollable'}}>
     
      <Section className='art-section' phone={phone}>
     
  {phone ? (
    <div style={{display:'flex', flexDirection:'column',  textAlign:'left' ,height:'100vh', width:'100%'}}>

<h1 style={{...phoneSubHeaderStyle, color:'black', fontSize:'1.8rem',marginLeft:'10px'}}>THE KYN ART COLLECTION</h1>
    <p style={{...phoneStyle,fontSize:'1.05rem'}}>From a simple concept to countless drafts over thousands of hours , the KYN art collection
comes to life. The visual manifestation of the KYN brand, these are our champions, our avatars.
We will experience The Sanctuary through them.</p>
<p  style={{...phoneStyle,marginTop:5,fontSize:'1.05rem'}}>10,000 Avatars, 5 different races : Angels, Demons, Werewolves, Vampires, Humans. <br />Your new web3 identity. Your new KYNs. Your new family.</p>
<div style={{width:'100%', height:70, backgroundColor:'#36454F',marginTop:40,display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',gap:20,whiteSpace:'nowrap' }}>
  <span style={phoneSubHead}>KYN ART COLLECTION</span>
  
  <span style={phoneSubHead}>KYN ART COLLECTION</span>
  </div>
  <Row direction='none' ref={Row1Ref} phone={phone}>
    
    <ImageItem img={art1} forwardRef={Row1Ref} phone={phone}  />
    <ImageItem img={art2}  forwardRef={Row1Ref} phone={phone}/>
    <ImageItem  img={art3}  forwardRef={Row1Ref}   phone={phone}/>
    <ImageItem  img={art4}  forwardRef={Row1Ref}  phone={phone} />
    <ImageItem img={art5}  forwardRef={Row1Ref}phone={phone}  />
    <ImageItem img={art6}  forwardRef={Row1Ref}phone={phone}  />
 <ImageItem img={art7}  forwardRef={Row1Ref}phone={phone}  />

      </Row>
      <Row direction='reverse' ref={Row2Ref} >
    
    
    <ImageItem img={art8}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art9}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art10}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art11}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art12}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art13}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art14}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art15}  forwardRef={Row2Ref}phone={phone}  />
 
       </Row>
      <div style={{width:'100%', height:70, backgroundColor:'#36454F',marginTop:40,display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',gap:20,whiteSpace:'nowrap' }}>
  <span style={phoneSubHead}>KYN ART COLLECTION</span>
  
  <span style={phoneSubHead}>KYN ART COLLECTION</span>
  </div>
     <div>
     <h1 style={{...phoneSubHeaderStyle, color:'black', fontSize:'1.8rem',marginLeft:'10px',marginTop:'25px'}}>NFT OR NFTs</h1>
    <p style={{...phoneStyle,}}>Who said that NFTs are only exist in 1 form? Personally, we don’t.</p>
<p  style={{...phoneStyle,marginTop:5,}}>Normalcy was never meant for us. Neither is our art.

</p>
<p  style={{...phoneStyle,marginTop:5,}}>Depending on the season, some of our avatars have the ability to change form.

</p>
<p  style={{...phoneStyle,marginTop:5,}}>The question is who though…?.

</p>
<div style={{marginLeft:10, marginTop:30}}>
  <iframe frameborder="0" class="juxtapose" width="300" height="300" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=a460c70a-e311-11ec-b5bb-6595d9b17862"></iframe>
</div>

     </div>

    </div>

  ) : (
    <><h1 style={{...subHeaderStyle, textAlign:'center'}}>THE KYN ART COLLECTION</h1>
    <p style={{...style,width:'1020px',}}>From a simple concept to countless drafts over thousands of hours , the KYN art collection
comes to life. The visual manifestation of the KYN brand, these are our champions, our avatars.
We will experience The Sanctuary through them.</p>
<p  style={{...style,width:'1020px',marginTop:10,}}>10,000 Avatars, 5 different races : Angels, Demons, Werewolves, Vampires, Humans.</p>
<p  style={{...style,width:'1020px',marginTop:10,}}>Your new web3 identity. Your new KYNs. Your new family.</p>

 
     <div style={{width:'100vw', height:70, backgroundColor:'white',marginTop:20,display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',gap:20,padding:7,whiteSpace:'nowrap' }}>
     <span style={subHead}> KYN ART COLLECTION</span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead} > KYN ART COLLECTION</span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
</div>
<Row direction='none' ref={Row1Ref} phone={phone}>
    
    <ImageItem img={art1} forwardRef={Row1Ref} phone={phone}  />
    <ImageItem img={art2}  forwardRef={Row1Ref} phone={phone}/>
    <ImageItem  img={art3}  forwardRef={Row1Ref}   phone={phone}/>
    <ImageItem  img={art4}  forwardRef={Row1Ref}  phone={phone} />
    <ImageItem img={art5}  forwardRef={Row1Ref}phone={phone}  />
    <ImageItem img={art6}  forwardRef={Row1Ref}phone={phone}  />
    <ImageItem img={art1} forwardRef={Row1Ref} phone={phone}  />
    <ImageItem img={art2}  forwardRef={Row1Ref} phone={phone}/>
    <ImageItem  img={art3}  forwardRef={Row1Ref}   phone={phone}/>

      </Row>
      <Row direction='reverse' ref={Row2Ref} >
    
     <ImageItem img={art7}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art8}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art9}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art10}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art11}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art12}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art13}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art14}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art15}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art7}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art8}  forwardRef={Row2Ref}phone={phone}  />
    <ImageItem img={art9}  forwardRef={Row2Ref}phone={phone}  />
       </Row>
      
       <div style={{width:'100vw', height:70, backgroundColor:'white',marginTop:20,display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',gap:20,padding:7,whiteSpace:'nowrap' }}>
     <span style={subHead}> KYN ART COLLECTION</span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead} > KYN ART COLLECTION</span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
</div>
<div style={{display:'flex',marginTop:40,alignItems:'center', justifyContent:'center', alignSelf:'center',paddingBottom:50 }}>
  <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <h2 style={{...subHeaderStyle, textAlign:'center',fontSize:'3rem',transform:'translateY(0)'}}>NFT OR NFTs</h2>
    <p style={{...style,width:'1020px',marginTop:5}}>Who said that NFTs are only exist in 1 form? Personally, we don’t.</p>
<p style={{...style,width:'1020px',marginTop:5}}>Normalcy was never meant for us. Neither is our art.</p>
<p style={{...style,width:'1020px',marginTop:5}}>Depending on the season, some of our avatars have the ability to change form. </p>
<p style={{...style,width:'1020px',marginTop:5}}>The question is who though…?.</p>
  </div>

  <iframe frameborder="0" className='juxtapose' class="juxtapose" width="500" height="500" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=a460c70a-e311-11ec-b5bb-6595d9b17862"></iframe>
     
     </div>


    
    </>
  )}  
   </Section>
    </div>
   
  )
}

const ImgContainer = styled.div`
width: ${props => props.phone ? '7rem' : '16rem'};
margin: ${props => props.phone ? '0 0.1rem' : '0 1rem'};
border-radius:20px;
display: inline-block;
cursor:pointer;
background-color: white;
img{
width:100%;
height:auto;
  border-width:1px solid transparent;

}
`
const move = keyframes`
0%{
  transform:translateX(80%)
}
100%{
  transform:translateX(-130%)
}
`
const phoneMove = keyframes`
0%{
  transform:translateX(100%)
}
99%{
  transform:translateX(-100%)
}
100%{
  transform:translateX(-100%)
}

`
const Section = styled.div`
width:100%;
height:${props => props.phone ?'calc(100% + 460px)':'calc(100% + 1000px)'} ;
display: flex;
align-items: center;
justify-content: unset;
overflow-x:hidden;
position:${props => props.phone ? 'relative' : 'absolute'} ;
top:${props => props.phone ? '70px' : '80px'};
overflow:hidden;
flex-direction: column;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: linear-gradient(0deg, rgba(156,189,238,1) 0%, rgba(251,251,251,1) 100%);
`
const Row = styled.div`

white-space: nowrap;
box-sizing: content-box;
margin:0
display:flex;
animation : ${move} 15s linear infinite ${props => props.direction};

position:relative;
top:20px;
width:
`
export default Art