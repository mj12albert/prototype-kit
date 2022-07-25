import Link from "next/link";
import Icon from "assets/svg/setting.svg";

export default function IndexPage() {
  return (
    <div>
      Hello World. <Icon />
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
