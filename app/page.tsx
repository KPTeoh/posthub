'use client'
import AddPost from "./components/AddPost"


export default function Home() {
  return (
    <main>
      <h1 className="text-lg py-5">Hello PostHUB!</h1>
      <AddPost />
    </main>
  );
}
