![](https://standart.io/favicon.svg)

# standartio-react-icons

Simple React icons for your UI. This package provides the free and open source [standart.io](https://standart.io) icon library as easy-to-use React components, compatible with both JavaScript and TypeScript.

## Installation

Install the package with the package manager of your choice.

```bash
npm i --save standartio-react-icons
```

## Usage

`standartio-react-icons` can be imported into your React component files, like any other package. Each icon component is exported as a named export with the following type signature:

```typescript
(props: React.SVGProps<SVGSVGElement>) => JSX.Element;
```

**Example**

```jsx
import { PersonInAHat } from "standartio-react-icons";

export const MyComponent = () => {
  return (
    <PersonInAHat
      onClick={() => console.log("Nice hat!")}
      style={{ color: "black" }}
    />
  );
};
```

## Contributors

<img src="https://avatars.githubusercontent.com/u/5090118?v=4" alt="@yaosamo" width="75" style="border-radius: 50%;margin-right: 8px;" />
<img src="https://avatars.githubusercontent.com/u/5573091?v=4" alt="@soulprovidr" width="75" style="border-radius: 50%" />
