import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

const ButtonPage = ( { first, second, third, fourth, fifth,setFirst, setSecond, setThird, setFourth, setFifth  }) => {
    const one=()=>{
        setFirst(!first);
    }
    const two=()=>{
        setSecond(!second);
    }
        
    const three=()=>{
        setThird(!third);
        
    }
        
    const four=()=>{
        setFourth(!fourth);
    }
        
    const five=()=>{
        setFifth(!fifth);
    }
        
        
  return (
    <div>
        <Container>
            <Row className='mt-5'>
                <Col>
           
                <Button 
                onClick={one}
                 className="px-5"
                 variant={`${first ? "secondary" : "primary"}`}
                 >Btn-1
                 </Button>
                
                </Col>
            </Row>
             <Row className='mt-5'>
                <Col>
           
                <Button 
                onClick={two}
                 className="px-5"
                 variant={`${second ? "secondary" : "primary"}`}>Btn-2
                 </Button>
                
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
           
                <Button
                onClick={three}
                  className="px-5"
                  variant={`${third ? "secondary" : "primary"}`}>Btn-3
                 </Button>
                
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
           
                <Button 
                onClick={four}
                 className="px-5"
                 variant={`${fourth? "secondary" : "primary"}`}>
                    Btn-4
                 </Button>
                
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
           
                <Button 
                onClick={five} 
                className="px-5"
                variant={`${fifth ? "secondary" : "primary"}`}>
                 Btn-5
                 </Button>
                
                </Col>
            </Row> 
            
            
            

        </Container>
    </div>
  )
}

export default ButtonPage