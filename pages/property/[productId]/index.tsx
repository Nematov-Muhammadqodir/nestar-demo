import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PRODUCT'S PAGE {productId}</div>;
}
