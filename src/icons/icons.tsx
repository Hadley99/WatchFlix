import * as React from "react";

interface SVG extends React.SVGProps<SVGSVGElement> {
  size: string;
  xlink?: string;
}

export const FireFill = (props: SVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    width={props?.size}
    height={props?.size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14c1 0 2.5 0 5-2.47c.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"
    ></path>
  </svg>
);

export const FireNoFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47c-1.667 1.647-2.933 2.47-3.8 2.47c3.995-7 1.8-10-4.2-14c.5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274c-.761 1.333.202 2.991 1.737 2.991c.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71c.424-.38.773-.717 1.118-1.086c1.23-1.318 2.114-2.78 2.566-4.462z"
      ></path>
    </svg>
  );
};

export const MoviesNoFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m19.729 3.917l.05.16l.552 1.922a.75.75 0 0 1-.418.893l-.096.035L9.09 10.002h11.16a.75.75 0 0 1 .742.65l.007.1v8.499a2.75 2.75 0 0 1-2.582 2.745l-.168.005H5.75a2.75 2.75 0 0 1-2.745-2.582L3 19.25v-8.392l-.522-1.821a2.75 2.75 0 0 1 1.726-3.35l.16-.052L16.378 2.19a2.75 2.75 0 0 1 3.35 1.726Zm-.23 7.585H4.5v7.749c0 .604.429 1.108.998 1.224l.124.02l.128.006h12.5a1.25 1.25 0 0 0 1.243-1.122l.006-.128v-7.749ZM6.272 6.649l-1.496.43a1.25 1.25 0 0 0-.886 1.42l.03.125l.344 1.201l.295-.085l1.713-3.09Zm4.756-1.363l-2.717.779l-1.714 3.09l2.718-.778l1.713-3.091Zm4.758-1.365l-2.718.78l-1.713 3.09l2.716-.778l1.715-3.092Zm1.847-.233l-1.521 2.74l2.569-.737l-.344-1.2a1.248 1.248 0 0 0-.704-.803Z"
      ></path>
    </svg>
  );
};

export const MoviesFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m19.729 3.875l.05.16l.552 1.922a.75.75 0 0 1-.418.893l-.096.035L9.09 9.96h11.16a.75.75 0 0 1 .742.65l.007.1v8.499a2.75 2.75 0 0 1-2.582 2.745l-.168.005H5.75a2.75 2.75 0 0 1-2.745-2.582L3 19.209v-8.392l-.522-1.821a2.75 2.75 0 0 1 1.726-3.35l.16-.052L16.378 2.15a2.75 2.75 0 0 1 3.35 1.726ZM6.273 6.607l-1.496.43a1.25 1.25 0 0 0-.886 1.42l.03.125l.344 1.201l.295-.085l1.713-3.09Zm4.756-1.363l-2.717.779l-1.714 3.09l2.718-.778l1.713-3.091Zm4.758-1.365l-2.718.78l-1.713 3.09l2.716-.778l1.715-3.092Zm1.847-.233l-1.521 2.74l2.569-.737l-.344-1.2a1.248 1.248 0 0 0-.704-.803Z"
      ></path>
    </svg>
  );
};

export const TvNoFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 6h-5.586l2.293-2.293l-1.414-1.414L12 5.586L8.707 2.293L7.293 3.707L9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 19V8h16l.002 11H4z"
      ></path>
    </svg>
  );
};

export const TvFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 6h-5.586l2.293-2.293l-1.414-1.414L12 5.586L8.707 2.293L7.293 3.707L9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2z"
      ></path>
    </svg>
  );
};

export const SearchNoFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
      ></path>
    </svg>
  );
};

export const SearchFill = (props: SVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617z"
      ></path>
    </svg>
  );
};
