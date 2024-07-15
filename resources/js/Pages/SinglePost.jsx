import { Head } from "@inertiajs/react";
import moment from "moment";
import React from "react";

function SinglePost({ post }) {
    return (
        <>
            <Head title={`${post.content}`} />
            <div
                key={post.id}
                className="w-[340px] m-auto mt-16 h-[200px] border-2 border-slate-300 rounded-sm py-4 px-6 flex flex-col justify-between items-end"
            >
                <p className="w-full">{post.content}</p>
                <p>{moment(post.created_at).fromNow()}</p>
            </div>
        </>
    );
}

export default SinglePost;
