import logo from './logo.svg';
import './App.css';
import GitHubCard from './Component/GitHubCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
        <GitHubCard /> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
