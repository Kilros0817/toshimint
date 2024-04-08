import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainText from '../../assests/ToshiMint.png';
import token from '../../assests/token-creator.svg';
import ai from '../../assests/ai.svg';
import { Card } from 'react-bootstrap';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import aiNft from '../../assests/aiNft.svg';

const Main = () => {
  const navigate = useNavigate();
  return (
    <main className='main'>
      <Container>
        <Row className="text-center mb-5 pt-0 pt-sm-5 mt-5">
          <Col xs='12'><img src={mainText} alt='Main text' className='mw-100'></img></Col>
          <Col xs='12' className='mt-4'><h2>Build Anything on Layer 2 Blockchain</h2></Col>
        </Row>
        <Row className='justify-content-center text-center mb-5'>
          <Col sm={4}  xl={3} className='mb-4'>
            <Card className='mx-auto'>
              <Card.Body>
                <div className='mb-4 mt-2'><img src={token} alt='Token Creator'></img></div>
                <Card.Title className="mb-3 text-white">Token Creator</Card.Title>
                <Card.Text>
                  A multi-chain Dapp where anyone easily mint, within minutes without coding experience, a customizable and full audited token.
                </Card.Text>
                <Card.Link onClick={() => navigate("/createtoken")}>Launch</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}  xl={3} className='mb-4'>
            <Card className='mx-auto'>
              <Card.Body>
                <div className='mb-4 mt-2'><img src={aiNft} alt='NFT Minter'></img></div>
                <Card.Title className="mb-3 text-white">NFT Minter</Card.Title>
                <Card.Text className='mb-4 pb-2'>
                  Mint NFTs as an admin, either to your treasury wallet or to some of your collectors.          </Card.Text>
                <Card.Link onClick={() => navigate("/mintNFT")}>Launch</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}  xl={3} className='mb-4'>
            <Card className='mx-auto'>
              <Card.Body>
              <span class="badge position-absolute top-0 start-50 translate-middle p-2 bg-primary">Coming Soon</span>
                <div className='mb-4 mt-2'><img src={ai} alt='Ai NFT'></img></div>
                <Card.Title className="mb-3 text-white">AI NFT Generator</Card.Title>
                <Card.Text className='mb-4 pb-2'>
                Easily create digital artworks to sell as NFTs using the power of Artificial Intelligence.</Card.Text>
                {/* <Card.Link onClick={() => navigate("/")}>Launch</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
};

export default Main;