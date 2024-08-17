import Link from 'next/link'
export default function Animals(){
    return(
        <>
            <h1>Animals</h1>
            <Link href={{
                pathname: "/animals/land-animals",
            }}>land animals</Link>
            <br />
            <Link href={{
                pathname: "/animals/sea-animals",
            }}>sea animals</Link>
            <br />
            <Link href={{
                pathname: "/animals/aerial-animals",
            }}>aerial animals</Link>
        </>
    )
}