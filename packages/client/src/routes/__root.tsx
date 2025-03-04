import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

function Footer() {
  return (
    <div className="bg-primary flex flex-row px-8 py-6 mt-4">
      <h3 className="text-background text-md">
        Copyright © 2025 Mohamed Abdeltawab (forge34)
      </h3>
      <div className="text-background ml-10">
        <img
          className="inline invert-100"
          src={GithubIcon}
          width={18}
          height={18}
        />
        <a
          className="my-auto ml-1 text-sm"
          href="https://www.linkedin.com/in/moh-abdeltawab/"
        >
          Github
        </a>
      </div>

      <div className="text-background ml-10">
        <img
          className="inline invert-100"
          src={LinkedInIcon}
          width={18}
          height={18}
        />
        <a
          className="my-auto ml-1 text-sm"
          href="https://www.linkedin.com/in/moh-abdeltawab/"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
