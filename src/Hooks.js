import { Card, CardGrid, Container } from "./Elements";
import Toggle from './components/Toggle'; // default
import { Inc } from './components/Inc';

const Hooks = () => {
    return (
        <Container>
            <CardGrid>
                <Card>
                    <Toggle />
                </Card>
                <Card>
                    <Inc />
                </Card>
            </CardGrid>
        </Container>
    )
}

export default Hooks;