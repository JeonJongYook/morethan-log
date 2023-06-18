import { useRouter } from "next/router"
import React from "react"

type TOrder = "오름차순" | "내림차순"

type Props = {}

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter()

  const currentOrder = `${router.query.order || ``}` || ("내림차순" as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }
  return (
    <div className={`flex text-sm gap-2  `}>
      <a
        className={`cursor-pointer ${
          currentOrder === "내림차순"
            ? "text-black font-bold dark:text-white"
            : "text-gray-500 dark:text-gray-400"
        }`}
        onClick={() => handleClickOrderBy("내림차순")}
      >
        내림차순
      </a>
      <a
        className={`cursor-pointer ${
          currentOrder === "오름차순"
            ? "text-black font-bold dark:text-white"
            : "text-gray-500 dark:text-gray-400"
        }`}
        onClick={() => handleClickOrderBy("오름차순")}
      >
        오름차순
      </a>
    </div>
  )
}

export default OrderButtons
