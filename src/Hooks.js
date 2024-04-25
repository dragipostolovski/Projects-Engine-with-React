import { Card, CardGrid, Container } from "./Elements";
import Toggle from './components/Toggle'; // default
import { Inc } from './components/Inc';
import { Mount } from "./components/Mount";

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
                <Card>
                    <Mount />
                </Card>
            </CardGrid>
        </Container>
    )
}

export default Hooks;