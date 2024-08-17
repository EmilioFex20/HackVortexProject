import Link from 'next/link'
export default function Animals(){
    return(
        <>
            <h1>Land Animals</h1>
            <Link href={{
                pathname: "/animals/land-animals/1",
                query:{
                    name:"wolf"
                }
            }}>wolf</Link>
            <br />
            <Link href={{
                pathname: "/animals/land-animals/2",
                query:{
                    name:"lion"
                }
            }}>lion</Link>
            <br />
            <Link href={{
                pathname: "/animals/land-animals/3",
                query:{
                    name:"elephant"
                }
            }}>elephant</Link>
        </>
    )
}