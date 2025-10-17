import Link from "next/link";

type AuthRedirectProps = {
  message: string;
  linkText: string;
  href: string;
};

export const AuthRedirect = ({
  message,
  linkText,
  href,
}: AuthRedirectProps) => {
  return (
    <div className="mt-5 flex items-center justify-center gap-2 text-sm sm:text-[16px]">
      <span>{message}</span>
      <Link href={href} className="text-blue font-medium hover:brightness-95">
        {linkText}
      </Link>
    </div>
  );
};
