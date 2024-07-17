import styled from "styled-components"

const Overlay = styled.div`
    display: ${props => props.$none ? "none" : "block"};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: ${props => props.$index ? props.$index : '2'};
`

export default Overlay