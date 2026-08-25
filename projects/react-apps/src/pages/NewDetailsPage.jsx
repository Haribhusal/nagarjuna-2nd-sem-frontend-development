import { useEffect, useState } from "react";
import { useLoaderData } from "react-router"

export default function NewDetailsPage() {
  const [newsDetails, setNewsDetails] = useState({})
  let data = useLoaderData();
  const URL = `https://jsonplaceholder.typicode.com/posts/${data.newsId}`

  async function fetchNewsDetails() {
    try {
      await fetch(URL)
        .then(res => res.json())
        .then(data => setNewsDetails(data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchNewsDetails();
  }, [])
  return (
    <main className="py-10">
      <div className="container mx-auto">
        <div className="row">
          <h3 className="font-bold text-3xl mb-10">{newsDetails.title}</h3>
          <p>
            {newsDetails.body}
          </p>
        </div>
      </div>
    </main>
  )
}