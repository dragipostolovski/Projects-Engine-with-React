import { Card, CardGrid, Container } from "./Elements";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

export function Cards() {
    return (
        <Container>
            <h2>Super Cool</h2>
            <CardGrid>
            <Card style={{ background: "var(--purp)" }}>
                <h3>Some card</h3>
                <img alt="" src={purp} />
            </Card>
            <Card style={{ background: "var(--blue)" }}>
                <h3>Some card</h3>
                <img alt=""  src={blue} />
            </Card>
            <Card style={{ background: "var(--black)" }}>
                <h3>Some card</h3>
                <img alt=""  src={black} />
            </Card>
            <Card style={{ background: "var(--green)" }}>
                <h3>Some card</h3>
                <img alt=""  src={green} />
            </Card>
            </CardGrid>
        </Container>
    )
}