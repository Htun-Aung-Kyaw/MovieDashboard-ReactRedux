import type {Metadata} from "next";
import MovieDetailUI from "@/app/components/movies/MovieDetailUI";

export default async function Page({params}: {params: {id: string}})
{
    const {id} = await params;
    return (
        <MovieDetailUI id={id} />
    )
}

export const metadata: Metadata = {
    title: "Movies",
};