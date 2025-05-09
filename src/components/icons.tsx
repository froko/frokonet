export const HamburgerIcon = () => {
  return (
    <svg
      class="swap-off fill-current [:checked~*_&]:!-rotate-45 [:checked~*_&]:!opacity-0"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512">
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path>
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg
      class="swap-on fill-current [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512">
      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon>
    </svg>
  )
}

export const GitHubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-12 w-12 fill-gray-500 hover:fill-gray-300 md:mx-0">
      <rect x="0" fill="none" width="24" height="24"></rect>
      <g>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.909-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.251-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.307.679.917.679 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.579.688.481A9.997 9.997 0 0022 12c0-5.523-4.477-10-10-10z"></path>
      </g>
    </svg>
  )
}

export const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-pgl-blue mt-1 h-5 w-5">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
      />
    </svg>
  )
}
