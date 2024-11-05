import Link from "next/link";


export default function home() {
  return (<div>
    <ul className="flex gap-10  bg-blue-500" >

      <li><Link href="/">Home</Link></li>


    <li><Link href="/About">About</Link></li>

    <li><Link href="/Contact-us">Contact us</Link></li>

    </ul>
    <img src="https://slate.adobe.com/cp/AtL30/embed.jpg?buster=1454436845429" alt="sorry" />
    </div>
  );
}
