import Link from "next/link";

export default function Header() {
    return(
        <header className="bg-orange-500 text-white p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
}