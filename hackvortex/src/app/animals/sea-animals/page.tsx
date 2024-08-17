import Link from 'next/link'
export default function Animals(){
    return(
        <>
            <h1>Sea Animals</h1>
            <Link href={{
                pathname: "/animals/sea-animals/1",
                query:{
                    name:"tortoise"
                }
            }}>tortoise</Link>
            <br />
            <Link href={{
                pathname: "/animals/sea-animals/2",
                query:{
                    name:"squid"
                }
            }}>squid</Link>
            <br />
            <Link href={{
                pathname: "/animals/sea-animals/3",
                query:{
                    name:"whale"
                }
            }}>whale</Link>
        </>
    )
}