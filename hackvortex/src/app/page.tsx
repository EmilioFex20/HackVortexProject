import Image from "next/image";
import HelloWorld from "./_components/HelloWorld";
import NavBar from "./_components/NavBar";
export default function Home() {
  return (
      <>
        <NavBar></NavBar>
        <HelloWorld></HelloWorld>
      </>   
  );
}