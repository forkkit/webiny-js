import styled from "react-emotion";

export const Button = styled("span")({
    cursor: "pointer",
    color: props =>
        props.reversed ? (props.active ? "white" : "#aaa") : props.active ? "black" : "#ccc"
});

export const Menu = styled("div")({
    "& > *": {
        display: "inline-block"
    },
    "& > * + *": {
        marginLeft: 15
    }
});

export const Toolbar = styled(Menu)({
    position: "relative",
    padding: "1px 18px 17px",
    margin: "0 -20px",
    borderBottom: "2px solid #eee",
    marginBottom: 20
});
