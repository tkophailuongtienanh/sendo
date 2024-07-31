import { memo } from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { categoryId, search } = useParams();
  return (
    <div>
      <h1>Main Component</h1>
      {categoryId ? (
        <p>Category ID: {categoryId}</p>
      ) : (
        <p>No category selected</p>
      )}
      {search ? (
        <p>search string: {search}</p>
      ) : (
        <p>No search string selected</p>
      )}
    </div>
  );
}
export default memo(ProductList);