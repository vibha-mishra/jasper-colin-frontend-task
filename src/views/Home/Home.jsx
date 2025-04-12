// import '../../app/styles/globals.css';
import Link from "next/link";
import './Home.css';


export default function HomePage() {
 return (
   <div className="mainContainer">
     <Link href="/products">
     <button
       className="welcomeButton"
     >
       Welcome - Go to Products
     </button>
     </Link>
   </div>
 );
}
