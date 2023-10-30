import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface IProps {
    leftContent: any,
    rightContent: any
}

function Responsive84(props: IProps) {
    const { leftContent, rightContent } = props
    return (
        <Container>
            <Row>
                <Col sm={4}>{leftContent}</Col>
                <Col sm={8}>{rightContent}</Col>
            </Row>
        </Container>
    );
}

export default Responsive84;