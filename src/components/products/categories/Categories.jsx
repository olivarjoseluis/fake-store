import { useEffect, useState } from "react"

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories/")
      .then(response => response.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>Categories</div>
  )
}

export default Categories