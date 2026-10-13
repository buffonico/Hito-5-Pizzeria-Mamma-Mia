import { useState, useEffect } from 'react'; // Hito 4
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
    
    const [pizzas, setPizzas] = useState([]);

    const consultarApi = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/api/pizzas`;
            const response = await fetch(url);
            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            console.log('Error al cargar las pizzas', error);
        }
    };

    useEffect(() => {
        consultarApi();
    }, []);

    return (
        <div>
            <Header />
            <Container className="my-4">
                <Row className="g-4">
                    {pizzas.map((pizza) => (
                        <Col md={4} sm={6} xs={12} className="d-flex justify-content-center" key={pizza.id}>
                            <CardPizza
                                id={pizza.id}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;