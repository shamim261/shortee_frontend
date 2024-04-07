export default function Form({ children, ...rest }) {
    return (
        <form action="#" {...rest}>
            {children}
        </form>
    );
}
