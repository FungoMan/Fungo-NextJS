import * as React from 'react'
import { useRouter } from 'next/router'
export interface PostListPageProps {}

export default function PostListPage(props: PostListPageProps) {
    const router = useRouter()

    return (
        <>
            <div>Post list page</div>
            <div>Query: {JSON.stringify(router.query)}</div>
        </>
    )
}