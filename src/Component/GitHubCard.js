import Card from 'react-bootstrap/Card'
import  PretendMe  from './PretendMe.webp'

function GitHubCard () {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top ' src='{PretendMe}' alt='Famouse Female Scientist' />
                <Card.Body>
                    <Card.Title> Juleian Renteria </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'> Starting Up Software Developer </Card.Subtitle>
                    <Card.Text>
                        Hi! My name is Juleian Renteria and I am pursuing a career in Software 
                        Development. I am a father of 2 and plan to be married once my Coding career takes off!
                    </Card.Text>
                    <Card.Link href='https://github.com/GiaMadonna1'> Find me on Github Here! </Card.Link>
                </Card.Body>
        </Card>
    );
}

export default GitHubCard