import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
                <Container className=''>
                    <Row className=''>
                        <Col className=''>
                <Card style={{ width: '80rem' }} className=' align-items-center w-100 h-auto'>
                    <Card.Img variant="top" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c861d306-8f42-4864-ab2e-61a271518c8a/df3b4ya-8cf2302e-1043-451d-9763-f1beacd43900.png/v1/fill/w_1280,h_1281,strp/poke_ball_by_ace_zeroartic_df3b4ya-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MSIsInBhdGgiOiJcL2ZcL2M4NjFkMzA2LThmNDItNDg2NC1hYjJlLTYxYTI3MTUxOGM4YVwvZGYzYjR5YS04Y2YyMzAyZS0xMDQzLTQ1MWQtOTc2My1mMWJlYWNkNDM5MDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EqTfwjka0Ul1J8yEVBewpQNE7CJclv6y7WtjHLHkTDM' className='w-50 h-auto'/>
                    <Card.Body>
                        <Card.Title><h1>¡Bienvenido, Maestro Pokémon!</h1></Card.Title>
                        <Card.Text>
                            
                        Puedes buscar tu Pokémon favorito en la sección "Pokemones".
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
            </div>
  )
}

export default Home


