import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <div className="dark:bg-gray-800">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    );
}
