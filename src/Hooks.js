import { Card, CardGrid, Container } from "./Elements";
import Toggle from './components/Toggle'; // default
import { Inc } from './components/Inc';
import { Mount } from "./components/Mount";
import Hover from "./components/Hover";
import Cookie from "./components/Cookie";

const Hooks = () => {
    return (
        <Container>
            <CardGrid>
                <Card>
                    <Hover />
                </Card>
                <Card>
                    <Toggle />
                </Card>
                <Card>
                    <Inc />
                </Card>
                <Card>
                    <Mount />
                </Card>
                <Card>
                    <Cookie />
                </Card>
            </CardGrid>
        </Container>
    )
}

export default Hooks;