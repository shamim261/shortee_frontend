import MainInput from '../components/MainInput';
export default function Home() {
    return (
        <section className="flex justify-center items-center flex-col pt-48">
            <h1 className="text-center font-bold text-5xl md:text-5xl uppercase mb-4">
                Get Shorten with <span className="text-primary">Shortee</span>
            </h1>
            <MainInput />
        </section>
    );
}
