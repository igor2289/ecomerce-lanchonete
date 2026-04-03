import { SyncLoader } from "react-spinners";
import { Container } from "./styles";
import { cores } from "../../styles";

export const Loader = () => (
    <Container>
        <SyncLoader color={cores.vermelho} />
    </Container>
)