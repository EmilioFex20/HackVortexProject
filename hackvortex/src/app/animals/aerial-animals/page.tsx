import Link from 'next/link'
export default function Animals(){
    return(
        <>
            <h1>Aerial Animals</h1>
            <Link href={{
                pathname: "/animals/aerial-animals/1",
                query:{
                    name:"bird"
                }
            }}>bird</Link>
            <br />
            <Link href={{
                pathname: "/animals/aerial-animals/2",
                query:{
                    name:"owl"
                }
            }}>owl</Link>
            <br />
            <Link href={{
                pathname: "/animals/aerial-animals/3",
                query:{
                    name:"eagle"
                }
            }}>eagle</Link>
        </>
    )
}