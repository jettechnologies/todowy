import { twMerge } from "tailwind-merge";

interface Props{
  children: React.ReactNode;
  className: string;
}

const Button:React.FC<Props> = ({children, className}) => {
  return (
    <button className={twMerge("w-fit h-fit p-2 hover:bg-gray-200 rounded-md font-roboto", className)}>
      {children}
    </button>
  )
}

export default Button