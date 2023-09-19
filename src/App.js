import { Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from "react";
import { asnycDecrement, changeTheme, decrement, increment } from "./redux/actions";

const App = (props) => {

    const [state, setState] = useState(props.store.getState())


    const add = () => {
        props.store.dispatch(
            increment()
        )
    }

    const del = () => {
        props.store.dispatch(
            decrement()
        )
    }

    const async = () => {
        
        props.store.dispatch(
           asnycDecrement()
        )
    }

    const newTheme = () => {
        const theme = document.querySelector('body').classList.contains('light') ? 'dark' : 'light'
        props.store.dispatch(changeTheme(theme))
    }

    props.store.subscribe(() => {
        setState(props.store.getState())
        document.body.className = state.theme.value;
        document.querySelectorAll('button').forEach(button => {
            button.disabled = state.theme.disabled
        })
    })


    return (
        <Container maxWidth="sm">
            <Grid container spacing={2} className="top" alignItems={"center"} justifyContent={'space-between'}>
                <Grid item>
                    <Typography variant="h1" className="title">
                        Redux
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="secondary" onClick={ () => { newTheme() } }>Сменить тему</Button>
                </Grid>
            </Grid>
            <div className="wrapper">
                <Typography variant="body1" className="counter">Счетчик: <span className="value">{ state.counter }</span></Typography>
                <ButtonGroup>
                    <Button variant="contained" color="success" onClick={() => { add() }}>Добавить</Button>
                    <Button variant="contained" color="error" onClick={() => { del() }}>Убрать</Button>
                    <Button variant="contained" onClick={() => { async() }}>Async</Button>
                </ButtonGroup>
            </div>
        </Container>        
    )
}

export default App;