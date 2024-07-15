import { Head, Link, useForm, usePage } from "@inertiajs/react";
import PostCard from "../Components/PostCard";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function Home({ posts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        contentInput: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts", {
            onSuccess: () => reset("contentInput"),
        });
    }

    const { flash } = usePage().props;

    // Dumbass method to stop an empty toast going off at the page's first load
    const [count, setCount] = useState(0);

    useEffect(() => {
        count > 0 && toast(flash.message);
        setCount(count + 1);
    }, [flash.message]);

    return (
        <>
            <Head title="Home Page" />
            <form
                method="POST"
                onSubmit={submit}
                className="flex flex-col w-fit m-auto items-end gap-1 my-4 "
            >
                <textarea
                    name="content-input"
                    id="content-input"
                    rows={4}
                    value={data.contentInput}
                    onChange={(e) => setData("contentInput", e.target.value)}
                    className={`rounded-sm border-2 p-2 resize-none w-[500px] ${
                        errors.contentInput && "border-red-600"
                    } focus:outline-none`}
                    placeholder="Share your thoughts"
                ></textarea>
                {errors.contentInput && (
                    <p className="w-full text-red-600">{errors.contentInput}</p>
                )}
                <button
                    type="submit"
                    disabled={processing}
                    className="text-white bg-blue-500 w-fit px-4 py-1 rounded-md disabled:bg-blue-300"
                >
                    Share
                </button>
            </form>
            <div className="grid grid-cols-3 2xl:grid-cols-4  gap-3  flex-wrap">
                {posts.data.map((p) => {
                    return <PostCard p={p} key={p.id} />;
                })}
            </div>
            <div className="flex gap-3 w-fit m-auto mt-10 ">
                {posts.links.map((link) => {
                    return link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            className={` rounded-sm px-2 text-slate-500 border-2 border-slate-400 ${
                                link.active &&
                                "text-slate-600 font-semibold border-2 border-slate-500"
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={link.label}
                            className={` rounded-sm px-2 text-slate-400 border-2 border-slate-300`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    );
                })}
            </div>
            <Link preserveScroll href="/" className="block mt-[800px]">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    );
}
