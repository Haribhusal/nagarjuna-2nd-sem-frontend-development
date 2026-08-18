import { Link } from "react-router"
import { useEffect, useState } from "react"

export default function Homepage() {

  const [news, setNews] = useState([])
  const [showItems, setShowItems] = useState(6)

  const URL = 'https://jsonplaceholder.typicode.com/posts'

  async function fetchNews() {
    try {
      fetch(URL)
        .then(res => res.json())
        .then(data => setNews(data))

    } catch (error) {

    }
  }

  useEffect(() => {
    fetchNews();
  }, [])

  console.log(news)


  return (
    <main className="py-10">
      <div className="container mx-auto">
        <div className="row">
          <h3 className="text-3xl mb-10 font-bold text-center">Get latest news</h3>
        </div>
        <div className="row grid grid-cols-3 gap-5">
          {news.slice(0, showItems).map((item) => (
            <Link to={'/news-details/123'}>
              <article>
                <img src={`https://picsum.photos/id/${item.id}/500/400`} alt="" />
                <h3 className="hover:text-blue-600 font-bold text-xl my-5">
                  {item.title}
                </h3>
                <p>
                  {item.body}
                </p>
              </article>
            </Link>
          ))}
        </div>
        <div className="row my-10 flex justify-center">
          <button onClick={() => setShowItems(showItems + 3)}>Show more</button>
        </div>
      </div>
    </main>
  )
}