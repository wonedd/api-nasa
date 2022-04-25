import styled from '@emotion/styled'

export const Container = styled.div`
    width: 438px;
    height: 1531px;
    display: flex;
    flex-direction:column;
    background: linear-gradient(179.87deg, #5E0055 10.93%, #560056 29.52%, #4E0057 45.45%, #470058 62.27%, #3F0059 79.98%, #37005B 92.37%, #2F005C 109.19%, #20005E 118.93%, #18005F 134.86%, rgba(255, 255, 255, 0) 160.53%, rgba(255, 255, 255, 0) 180.89%);
    background-image: url('/assets/cool-background.png');
    animation: mygradient 50s linear infinite;
`;

export const TitleBox = styled.div`
    width: 162px;
    height: 138px;
    margin-left:2rem;
    margin-top:2rem;
   
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 48px;

    color: #f7f7f7;
    
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 362px;
    height: 365px;
    border:2px solid #f7f7f7;
    margin-top:2rem;
    align-self: center;
`;

export const NameBox = styled.div`
    width: 184px;
    height: 185px;
    border: 1px solid #F7F7F7;
    margin-top:42px;
    padding-top:16px;
    padding-bottom:32px;
    padding-left:10px;
    padding-right: 10px;
`;

export const Name = styled.h3`
    width: 164px;
    height: 132px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 48px;

    color: #F7F7F7;
`;

export const Content = styled.div`
    width: 304px;
    height: 523px;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;

export const Text = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;

    color: #F7F7F7;

    margin-top:19px;
    align-self: center;
`;

export const ViewMoreBtn = styled.button`
    all:unset;
    cursor: pointer;
    border: 1px solid #F7F7F7;
    width: 296px;
    height: 65px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 48px;
    text-align: center;

    color: #F7F7F7;

    margin-top:50px;

    &:hover{
        backdrop-filter:brightness(50%);
    }
`;

