import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="p-1 mb-3 dark:text-white">🔎 검색</div>
      <input
        className="rounded-2xl px-5 py-2 w-full bg-gray-200 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md outline-none transition"
        type="text"
        placeholder="검색어를 입력해주세요..."
        {...props}
      />
    </div>
  )
}

export default SearchInput
