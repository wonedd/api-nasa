import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Content, TitleBox, Title, Image, NameBox, Name, Text, ViewMoreBtn} from '../../shared/pages/styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home(){
 
  const [ data, setData ] = useState()
  const [ error, setError] = useState('')
  const [ isLoading, setIsLoading] = useState(true)
  const { push } = useRouter()


  useEffect(()=>{

  
    async function getData(){
      const API_KEY = 'jv9gXIcCTQPAE9eXdTtptB6jSITuhkYBzRvK4k1Z'
      await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          const response = res.data
          if(response === undefined){
            setError('erro')
          }else{
            setData(response)
            console.log(data)
          }
        }).catch(err => console.log(err)).finally(()=>{
          setIsLoading(false)
        })
      }
     getData() 
     
  },[])
  
 
  return(
    <Container>
      <TitleBox>
    <Title>NASA Picture Of The Day</Title>
    </TitleBox>
    {
      isLoading ? (
        <div style={{alignSelf:'center'}}>
        <Skeleton width={362} height={365} circle baseColor="rgba(109, 103, 103, 0.514)" /> 
        </div>
      ):(
    <Image src={data?.url || error} />
      )}
       {
       isLoading ? (
        <div style={{alignSelf:'center'}}>
        <Skeleton width={304} height={900} baseColor="rgba(109, 103, 103, 0.514)" enableAnimation/>
        </div>
        ): (
    <Content>
      <NameBox>
        <Name>{data?.title || error}</Name>
      </NameBox>    
    <Text>{data?.explanation || error}</Text>
    <ViewMoreBtn onClick={() => push('https://apod.nasa.gov/apod/archivepixFull.html')}>View More</ViewMoreBtn>
    </Content>
   )}
    </Container>
  )
}