import Link from 'next/link';

export interface ButtonProps {
  image: string;
  className?: string;
  link?: string;
}

export const Button: React.FC<ButtonProps> = ({
  link,
  image,
  className,
}: ButtonProps) => {
  return link ? (
    <Link href={link}>
      <a className={`${className} hover: border-none flex items-center`}>
        <img src={image} alt=""></img>
      </a>
    </Link>
  ) : (
    <button className={`${className} flex items-center`}>
      <img src={image} alt=""></img>
    </button>
  );
};
