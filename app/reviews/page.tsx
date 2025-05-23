import type {Metadata} from "next";
import ReviewList from "@/app/components/reviews/ReviewList";
import {mockReview} from "@/lib/mockReview";
import NewReview from "@/app/components/reviews/NewReview";


export default function Page()
{
    return (
        <div className="uiContainer">
            {/*<NewReview/>*/}
            <ReviewList/>
        </div>
    )
}

export const metadata: Metadata = {
    title: "Reviews",
};