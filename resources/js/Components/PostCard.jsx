import React from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import { Link, useForm } from "@inertiajs/react";
import moment from "moment";

function PostCard({ p }) {
    const { delete: destroy } = useForm();

    const route = useRoute();

    function submit(e) {
        e.preventDefault();
        destroy(route("posts.destroy", p));
    }

    return (
        <div className="w-[340px] m-auto min-h-[200px] border-2 border-slate-300 rounded-sm py-4 px-6 flex flex-col justify-between items-end">
            <form onSubmit={submit} method="post">
                <button>⛔</button>
            </form>
            <p className="w-full">{p.content}</p>
            <p>{moment(p.created_at).fromNow()}</p>
            <Link href={route("posts.show", p)} className="text-blue-400">
                See More
            </Link>
        </div>
    );
}

export default PostCard;
