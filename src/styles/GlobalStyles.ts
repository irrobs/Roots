import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
   font-family: "Nunito", sans-serif;
    
    &, &.light-mode {
      --color-gray-0: #fff;
      --color-gray-200: #e5e7eb;
      --color-gray-500: #6b7280;
      --color-gray-600: #4b5563;
      --color-gray-800: #1f2937;
      --color-gray-800-1: rgba(31,41,44, 0.1);
      --color-gray-900: ##111827;
      --color-lime-200: #d9f99d;
      --color-lime-500: #84cc16;
      --color-lime-500-1: rgba(132, 204, 22, 0.1);
      --color-lime-700: #4d7c0f;
      --color-red-600: #dc2626;
      --color-green-600: #16a34a;

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px .5rem 2.4rem rgba(0, 0, 0, 0.2);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

      --border-radius-sm: 6px;
      --border-radius-md: 12px;
      --border-radius-full: 100px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;

    
  }

  input:focus, textarea:focus {
      outline: 2px solid var(--color-lime-500);
      outline-offset: 2px;
    }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--color-grey-900);

    transition: color 0.3s, background-color 0.3s;
    height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
