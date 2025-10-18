import React, { use } from "react";
import { NavLink } from "react-router";
// categorids data fetching code start here.....
const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  console.log(categoriesPromise);
  const categories = use(categoriesPromise);
  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>
      {/* categoires theke map kore catagory nilem and navLink a name sow korlem... */}
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
            // dynamic id + root....
          <NavLink to={`/category/${category.id}`} key={category.id} className={'btn bg-base-100 border-0 hover:bg-base-300'}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
