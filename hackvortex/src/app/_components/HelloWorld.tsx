"use client"
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function HelloWorld(){
    /*
    const router = useRouter()*/
    const [input, setInput] = useState('')
    return(
        <>
            <Link href={{
                pathname: "/animals",
            }}>Menu animales</Link>
        </>
    )
}