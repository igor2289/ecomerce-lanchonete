import { SyncLoader } from "react-spinners";
import { Container } from "./styles";
import { colors } from "../../styles";

export const Loader = () => (
    <Container>
        <SyncLoader color={colors.vermelho} />
    </Container>
)