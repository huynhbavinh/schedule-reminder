import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface IProps {
    leftContent: JSX.Element,
    rightContent: JSX.Element
}

function Responsive84(props: IProps) {
    const { leftContent, rightContent } = props
    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={4}>{leftContent}</Col>
                <Col sm={8}>{rightContent}</Col>
            </Row>
        </Container>
    );
}

export default Responsive84;