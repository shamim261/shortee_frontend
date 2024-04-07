export default function TextInput({ type, placeholder, ...rest }) {
    return (
        <>
            <input
                className="focus:outline-none p-4 rounded-lg w-96 m-2"
                type={type}
                placeholder={placeholder}
                {...rest}
            />
        </>
    );
}
