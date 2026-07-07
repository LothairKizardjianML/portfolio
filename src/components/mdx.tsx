import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-4xl md:text-5xl font-semibold tracking-tight mt-16 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-semibold tracking-tight mt-16 mb-6"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-semibold tracking-tight mt-10 mb-4"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-lg leading-relaxed text-muted mb-6" {...props} />
  ),
  ul: (props) => (
    <ul
      className="list-disc list-outside pl-6 mb-6 text-lg text-muted flex flex-col gap-2"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-outside pl-6 mb-6 text-lg text-muted flex flex-col gap-2"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-accent underline underline-offset-4 hover:no-underline"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noreferrer" : undefined}
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="text-foreground font-semibold" {...props} />
  ),
  code: (props) => (
    <code
      className="font-mono text-sm bg-white/5 border border-white/10 rounded px-1.5 py-0.5"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-8 p-5 rounded-lg border border-white/10 bg-black/40 text-sm font-mono leading-relaxed whitespace-pre-wrap break-words"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent pl-6 my-6 italic text-muted"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table
        className="w-full text-sm border-collapse border border-white/10"
        {...props}
      />
    </div>
  ),
  thead: (props) => <thead className="bg-white/5" {...props} />,
  th: (props) => (
    <th
      className="text-left font-mono text-xs uppercase tracking-wider text-muted border border-white/10 px-4 py-3"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border border-white/10 px-4 py-3 align-top text-foreground"
      {...props}
    />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-lg my-8 w-full"
      alt={props.alt ?? ""}
      {...props}
    />
  ),
  Image,
};
