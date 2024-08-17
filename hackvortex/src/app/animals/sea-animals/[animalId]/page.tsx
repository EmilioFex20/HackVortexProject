"use client"
import React from "react"
import { useSearchParams } from "next/navigation"
export default function Animals({params,SearchParams}:{
    params:{
        animalId:string
    },
    SearchParams:{
        name: string
    }
}){
    const searchParams = useSearchParams();

    return(
        <>
            <p>Animal {params.animalId} llamado {searchParams.get("name")} </p>
        </>
    )
}