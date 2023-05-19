function TodoList(props) {
    return(
        <ul>
            {props.children} {/*Esto se llama comunicación entre componenetes dentro de props */}
        </ul>
    );
}

export { TodoList };